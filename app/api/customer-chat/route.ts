import { createOpenAI } from "@ai-sdk/openai";
import { streamText, tool } from "ai";
import { database } from "@/lib/database";
import { sendConversationEmail } from "@/lib/email";
import { NextResponse } from "next/server";
import { z } from 'zod';

// Initialize OpenAI with API key
const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// AI Assistant prompt for AILaboratories customer support
const SYSTEM_PROMPT = `
You are a friendly AI customer support assistant for AILaboratories, a leading AI consultancy company.

Company Information:
- AILaboratories specializes in AI Consultancy, AI workflow automation, and R&D services
- We help companies integrate AI into their operations and build custom AI solutions
- Services include: AI strategy consulting, workflow automation, custom AI development, research & development
- We work with businesses of all sizes to transform their operations with AI technology
- We have experience across 25+ industries including healthcare, finance, manufacturing, retail, logistics, technology, energy, agriculture, education, and government

Comprehensive FAQ Knowledge Base:

GETTING STARTED:
- Project start time: We can typically begin discovery and planning within 1-2 weeks after initial consultation. For urgent projects, we offer expedited onboarding within 3-5 business days.
- Information needed: Business objectives, current challenges, existing tech stack details, project timeline expectations, budget range, and specific requirements.
- Free consultation: Yes! We provide a complimentary 30-minute initial consultation including preliminary project scope discussion and timeline estimation.
- What makes us different: Unique combination of deep technical expertise, industry experience across 25+ sectors, and commitment to practical, business-focused solutions that drive real ROI.

SERVICES & PRICING:
- Project costs: AI consultancy projects typically range from £1.5K-£100K+, agent workflow automation from £2K-£500K, R&D initiatives from £100K-£1M+++. Costs vary based on scope and complexity.
- Pricing models: Fixed-price projects, time & materials for exploratory work, retainer agreements for ongoing support, and equity partnerships for startups.
- AI solutions we develop: Machine learning models, natural language processing systems, computer vision applications, predictive analytics platforms, intelligent automation workflows, recommendation engines, chatbots and virtual assistants, custom AI-powered applications.
- System integration: We specialize in seamless integration with existing CRMs, ERPs, databases, APIs, cloud platforms, and legacy systems with minimal disruption.

TECHNICAL & IMPLEMENTATION:
- Technologies: Python, TensorFlow, PyTorch, Hugging Face, OpenAI GPT models, cloud platforms (AWS, Azure, GCP), Docker, Kubernetes, various databases.
- Data security: Enterprise-grade security with encryption at rest and in transit, secure API protocols, GDPR/CCPA compliance, regular security audits, strict access controls.
- Training: Comprehensive knowledge transfer including technical documentation, user guides, hands-on workshops, best practices sessions, and ongoing support.
- Team collaboration: We often work with internal teams, providing mentorship, code reviews, architectural guidance, and knowledge transfer.
- Scalability: All solutions designed with cloud-native architectures, proper load balancing, performance optimization, and systems that grow with your business.

SUPPORT & MAINTENANCE:
- Ongoing support: 24/7 monitoring, regular maintenance, performance optimization, bug fixes, feature updates, and strategic guidance.
- Maintenance packages include: System monitoring and alerts, regular performance optimization, security updates, bug fixes, monthly performance reports, model retraining, priority technical support.
- Response times: Critical issues (2 hours), High priority (4 hours), Medium priority (24 hours), Low priority (48 hours). Enterprise clients get priority support.
- Compliance: Extensive experience with HIPAA, SOX, GDPR, CCPA, and industry-specific regulations. We ensure AI solutions meet all relevant compliance requirements.

PARTNERSHIP & COLLABORATION:
- Client types: We work with organizations of all sizes, from startups to Fortune 500 companies. For startups, we offer flexible arrangements including equity partnerships.
- AI strategy: Comprehensive AI strategy development, technology roadmap planning, ROI analysis, risk assessment, and implementation planning.
- Staff augmentation: Skilled AI professionals including data scientists, ML engineers, AI researchers, and project managers for temporary or long-term assignments.
- Success metrics: We use proven methodologies with clear success metrics, regular progress reviews, agile development practices, and typically see 3x+ ROI improvements.
- Confidentiality: We routinely work under strict NDAs and confidentiality agreements with complete data privacy and IP protection.

CONSULTATION BOOKING:
- When a user wants to schedule a consultation, book a call, or says "yes" to scheduling, immediately use the "request_consultation" tool.
- ALWAYS call the request_consultation tool when users:
  * Say "yes" to scheduling a consultation
  * Ask to book an appointment
  * Want to schedule a consultation
  * Express interest in discussing their project in detail
  * Ask to speak with someone
- Do NOT ask for contact information manually - use the tool to show the form instead.

Contact Information:
- Email: contact@ailaboratories.ai
- Phone: +1 (555) 123-4567
- Free consultation available
- Live chat available on website

Your Role:
- Answer questions using the comprehensive knowledge base above
- Provide specific, detailed information about services, pricing, processes, and capabilities
- Be conversational and helpful, but professional
- When users want to schedule consultations or discuss their projects, use the request_consultation tool
- Always be positive and solution-focused
- Reference specific details from the FAQ when relevant

Guidelines:
- Keep responses informative but not overwhelming
- Use specific numbers, timelines, and details from the knowledge base
- When users show interest in consultations, use the request_consultation tool instead of asking them to email or call
- If a conversation seems to be ending naturally, you can ask if there's anything else you can help with

When a conversation appears to be naturally ending (user says goodbye, thanks, or seems satisfied), respond helpfully and then send a special message: "CONVERSATION_COMPLETE" to trigger the conversation saving process.
`;

export async function POST(req: Request) {
  try {
    // Check if OpenAI API key is available
    if (!process.env.OPENAI_API_KEY) {
      console.error('OPENAI_API_KEY is not set in environment variables');
      return NextResponse.json({ error: 'OpenAI API key not configured' }, { status: 500 });
    }

    const { messages, conversationId, userName, userEmail } = await req.json();

    if (!conversationId) {
      return NextResponse.json({ error: 'Conversation ID required' }, { status: 400 });
    }

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Messages array required' }, { status: 400 });
    }

    // Save user message to database
    try {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage && lastMessage.role === 'user') {
        await database.saveMessage({
          conversation_id: conversationId,
          sender: 'user',
          message: lastMessage.content,
          timestamp: new Date()
        });
      }

      // Update conversation info if provided
      if (userName || userEmail) {
        await database.saveConversation({
          conversation_id: conversationId,
          user_name: userName,
          user_email: userEmail,
          status: 'active',
          created_at: new Date()
        });
      }
    } catch (dbError) {
      console.error('Database error (non-critical):', dbError);
      // Continue with AI response even if database fails
    }

    // Get AI response
    console.log('Messages received:', JSON.stringify(messages, null, 2));
    
    // Ensure messages are in the correct format
    const formattedMessages = messages.map(msg => ({
      role: msg.role as 'user' | 'assistant' | 'system',
      content: msg.content
    }));
    
    console.log('Formatted messages:', JSON.stringify(formattedMessages, null, 2));
    
    const result = await streamText({
      model: openai("gpt-4o"),
      system: SYSTEM_PROMPT,
      messages: formattedMessages,
      temperature: 0.7, // Balanced creativity and consistency
      tools: {
        request_consultation: tool({
          description: 'REQUIRED: Use this tool immediately when user wants to schedule consultation, says yes to booking, or asks to discuss project. Shows contact form.',
          inputSchema: z.object({}),
          execute: async () => {
            return {
              type: "ui-component",
              component: "ConsultationForm",
              data: { conversationId },
              message: "I'd be happy to help you schedule a consultation! Please fill out this quick form and our team will get back to you within 24 hours."
            };
          }
        })
      }
    });

    // Create a readable stream that also saves the assistant's response
    const stream = new ReadableStream({
      async start(controller) {
        let fullResponse = '';
        let toolResults: any[] = [];
        
        // Process the full result including text and tool calls
        for await (const chunk of result.fullStream) {
          if (chunk.type === 'text-delta') {
            fullResponse += chunk.text;
            controller.enqueue(new TextEncoder().encode(`data: ${JSON.stringify({ content: chunk.text })}\n\n`));
          } else if (chunk.type === 'tool-call') {
            // Tool call started
            controller.enqueue(new TextEncoder().encode(`data: ${JSON.stringify({ 
              type: 'tool-call', 
              toolName: chunk.toolName,
              args: chunk.input 
            })}\n\n`));
          } else if (chunk.type === 'tool-result') {
            // Tool execution completed
            const toolOutput = chunk.output as any;
            toolResults.push(toolOutput);
            controller.enqueue(new TextEncoder().encode(`data: ${JSON.stringify({ 
              type: 'tool-result', 
              toolName: chunk.toolName,
              result: toolOutput 
            })}\n\n`));
            
            // If it's a consultation request, handle the form display
            if (chunk.toolName === 'request_consultation' && toolOutput?.type === 'show_consultation_form') {
              fullResponse += '\n\n' + toolOutput.message;
              controller.enqueue(new TextEncoder().encode(`data: ${JSON.stringify({ 
                type: 'show_consultation_form',
                content: '\n\n' + toolOutput.message,
                conversationId: toolOutput.conversationId
              })}\n\n`));
            }
          }
        }

        // Check if conversation should be completed
        const shouldComplete = fullResponse.includes('CONVERSATION_COMPLETE') || 
                              fullResponse.toLowerCase().includes('goodbye') ||
                              fullResponse.toLowerCase().includes('have a great day') ||
                              toolResults.some(result => (result as any)?.success); // Complete if consultation was requested

        // Remove the completion trigger from the response
        const cleanResponse = fullResponse.replace('CONVERSATION_COMPLETE', '').trim();

        // Save assistant response to database
        try {
          await database.saveMessage({
            conversation_id: conversationId,
            sender: 'assistant',
            message: cleanResponse,
            timestamp: new Date()
          });

          // If conversation is complete, save to database and send email
          if (shouldComplete) {
            await database.completeConversation(conversationId);
            
            // Get full conversation for email
            const { conversation, messages: allMessages } = await database.getConversation(conversationId);
            if (conversation) {
              await sendConversationEmail({ conversation, messages: allMessages });
            }
          }
        } catch (dbError) {
          console.error('Database error in stream (non-critical):', dbError);
          // Don't break the stream if database operations fail
        }

        controller.close();
      }
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
      },
    });

  } catch (error) {
    console.error('Customer chat error:', error);
    return NextResponse.json(
      { error: 'Failed to process chat message' },
      { status: 500 }
    );
  }
}