import nodemailer from 'nodemailer';
import { ConversationMessage, Conversation } from './database';

// Email configuration - you'll need to set these in your .env file
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // your email
    pass: process.env.EMAIL_PASS, // your app password
  },
});

export interface ConversationSummary {
  conversation: Conversation;
  messages: ConversationMessage[];
}

export async function sendConversationEmail(summary: ConversationSummary): Promise<void> {
  const { conversation, messages } = summary;
  
  // Format the conversation for email
  const formattedMessages = messages.map(msg => {
    const time = new Date(msg.timestamp).toLocaleString();
    const sender = msg.sender === 'user' ? (conversation.user_name || 'Customer') : 'AI Assistant';
    return `[${time}] ${sender}: ${msg.message}`;
  }).join('\n\n');

  const emailContent = `
New Customer Conversation Completed

Customer Details:
- Name: ${conversation.user_name || 'Not provided'}
- Email: ${conversation.user_email || 'Not provided'}
- Conversation ID: ${conversation.conversation_id}
- Started: ${new Date(conversation.created_at).toLocaleString()}
- Completed: ${conversation.completed_at ? new Date(conversation.completed_at).toLocaleString() : 'N/A'}

Conversation:
${formattedMessages}

---
This conversation has been automatically saved to the database.
  `;

  const mailOptions = {
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
    to: 'contact@ailaboratories.ai',
    subject: `New Customer Conversation - ${conversation.user_name || 'Anonymous'}`,
    text: emailContent,
    html: emailContent.replace(/\n/g, '<br>'),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Conversation email sent successfully');
  } catch (error) {
    console.error('Failed to send conversation email:', error);
    // Don't throw error - we don't want to break the chat if email fails
  }
}