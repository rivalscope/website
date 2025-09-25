import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  HelpCircle, 
  ArrowRight, 
  Clock, 
  DollarSign, 
  Users, 
  Shield, 
  Zap,
  MessageSquare,
  Phone,
  Mail
} from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | AILaboratories",
  description: "Find answers to common questions about AILaboratories' AI consultancy, workflow automation, and R&D services. Get the information you need to get started.",
};

const faqCategories = [
  {
    title: "Getting Started",
    icon: Zap,
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/10",
    questions: [
      {
        q: "How quickly can you start a project?",
        a: "We can typically begin discovery and planning within 1-2 weeks after initial consultation. Implementation timelines vary based on project complexity, but we prioritize rapid deployment while maintaining quality standards. For urgent projects, we offer expedited onboarding within 3-5 business days."
      },
      {
        q: "What information do I need to provide to get started?",
        a: "To kickstart your project, we'll need: your business objectives, current challenges, existing tech stack details, project timeline expectations, budget range, and any specific requirements or constraints. Our team will guide you through a comprehensive discovery process during our initial consultation."
      },
      {
        q: "Do you offer free consultations?",
        a: "Yes! We provide a complimentary 30-minute initial consultation to understand your needs, assess project feasibility, and determine if we're the right fit. This includes a preliminary project scope discussion and timeline estimation."
      },
      {
        q: "What makes AILaboratories different from other AI companies?",
        a: "Our unique combination of deep technical expertise, industry experience across 25+ sectors, and commitment to practical, business-focused solutions sets us apart. We don't just build AI - we ensure it drives real ROI and integrates seamlessly with your operations."
      }
    ]
  },
  {
    title: "Services & Pricing",
    icon: DollarSign,
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-900/10",
    questions: [
      {
        q: "What's the typical project cost?",
        a: "Project costs vary significantly based on scope, complexity, and requirements. AI consultancy projects typically range from $25K-$100K, workflow automation from $50K-$500K, and R&D initiatives from $100K-$1M+. We provide detailed, transparent proposals after understanding your specific needs."
      },
      {
        q: "Do you offer different pricing models?",
        a: "Yes, we offer flexible pricing models including: fixed-price projects for well-defined scopes, time & materials for exploratory work, retainer agreements for ongoing support, and equity partnerships for startups with compelling visions and limited budgets."
      },
      {
        q: "What industries do you work with?",
        a: "We have experience across 25+ industries including healthcare, finance, manufacturing, retail, logistics, technology, energy, agriculture, education, and government. Our approach is industry-agnostic, focusing on understanding your specific challenges and objectives regardless of sector."
      },
      {
        q: "What types of AI solutions do you develop?",
        a: "We develop a wide range of AI solutions including: machine learning models, natural language processing systems, computer vision applications, predictive analytics platforms, intelligent automation workflows, recommendation engines, chatbots and virtual assistants, and custom AI-powered applications."
      },
      {
        q: "Can you integrate with our existing systems?",
        a: "Absolutely. We specialize in seamless integration with existing infrastructure including CRMs, ERPs, databases, APIs, cloud platforms, and legacy systems. Our integration approach ensures minimal disruption to your current operations while maximizing the value of your AI investment."
      }
    ]
  },
  {
    title: "Technical & Implementation",
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/10",
    questions: [
      {
        q: "What technologies and platforms do you use?",
        a: "We work with cutting-edge technologies including Python, TensorFlow, PyTorch, Hugging Face, OpenAI GPT models, cloud platforms (AWS, Azure, GCP), Docker, Kubernetes, and various databases. Our technology choices are always aligned with your specific requirements and long-term strategy."
      },
      {
        q: "How do you ensure data privacy and security?",
        a: "Data security is paramount. We implement enterprise-grade security measures including encryption at rest and in transit, secure API protocols, compliance with GDPR/CCPA regulations, regular security audits, and strict access controls. We can also work within your existing security frameworks and requirements."
      },
      {
        q: "Do you provide training for our team?",
        a: "Yes, knowledge transfer is a key part of our service. We provide comprehensive training including technical documentation, user guides, hands-on workshops, best practices sessions, and ongoing support to ensure your team can effectively use and maintain the AI solutions we develop."
      },
      {
        q: "Can you work with our in-house development team?",
        a: "Definitely. We often collaborate closely with internal teams, providing mentorship, code reviews, architectural guidance, and knowledge transfer. This hybrid approach helps build internal AI capabilities while leveraging our specialized expertise."
      },
      {
        q: "What about scalability and performance?",
        a: "All our solutions are designed with scalability in mind. We use cloud-native architectures, implement proper load balancing, optimize for performance, and design systems that can grow with your business. We also provide performance monitoring and optimization services."
      }
    ]
  },
  {
    title: "Support & Maintenance",
    icon: Shield,
    color: "text-red-600",
    bgColor: "bg-red-50 dark:bg-red-900/10",
    questions: [
      {
        q: "Do you provide ongoing support after project completion?",
        a: "Yes, we offer comprehensive support packages including 24/7 monitoring, regular maintenance, performance optimization, bug fixes, feature updates, and strategic guidance. We believe in long-term partnerships and continue to evolve solutions as your business grows."
      },
      {
        q: "What's included in your maintenance packages?",
        a: "Our maintenance packages include: system monitoring and alerts, regular performance optimization, security updates, bug fixes, monthly performance reports, model retraining when needed, and priority technical support. We offer different tiers based on your specific needs."
      },
      {
        q: "How do you handle model updates and improvements?",
        a: "We continuously monitor model performance and implement improvements through regular retraining, algorithm updates, new feature integration, and performance optimization. Our MLOps practices ensure smooth, automated updates with minimal downtime."
      },
      {
        q: "What's your response time for support requests?",
        a: "Response times vary by support tier: Critical issues (system down) - 2 hours, High priority (functionality impaired) - 4 hours, Medium priority (minor issues) - 24 hours, Low priority (general questions) - 48 hours. Enterprise clients receive priority support with faster response times."
      },
      {
        q: "Can you help with compliance and regulatory requirements?",
        a: "Yes, we have extensive experience with various compliance frameworks including HIPAA, SOX, GDPR, CCPA, and industry-specific regulations. We ensure our AI solutions meet all relevant compliance requirements and can assist with audit preparation and documentation."
      }
    ]
  },
  {
    title: "Partnership & Collaboration",
    icon: Users,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/10",
    questions: [
      {
        q: "Do you work with startups or only enterprise clients?",
        a: "We work with organizations of all sizes, from innovative startups to Fortune 500 companies. For startups with compelling visions and limited budgets, we offer flexible arrangements including equity partnerships and phased development approaches."
      },
      {
        q: "Can you help with AI strategy and roadmap planning?",
        a: "Absolutely. Our consultancy services include comprehensive AI strategy development, technology roadmap planning, ROI analysis, risk assessment, and implementation planning. We help you navigate the AI landscape and make informed decisions about your AI investments."
      },
      {
        q: "Do you offer staff augmentation services?",
        a: "Yes, we provide skilled AI professionals for temporary or long-term assignments including data scientists, ML engineers, AI researchers, and project managers. This helps bridge skill gaps while you build internal capabilities."
      },
      {
        q: "How do you ensure project success and ROI?",
        a: "We use proven methodologies including clear success metrics definition, regular progress reviews, agile development practices, continuous stakeholder communication, and thorough testing. We're committed to delivering measurable business value and typically see 3x+ ROI improvements."
      },
      {
        q: "Can you work under NDAs and confidentiality agreements?",
        a: "Absolutely. We routinely work under strict confidentiality agreements and NDAs. Data privacy and intellectual property protection are fundamental to our business practices. We can accommodate specific legal and security requirements as needed."
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              Frequently Asked Questions
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Get Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Questions Answered
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Find comprehensive answers to common questions about our AI services, 
              pricing, implementation process, and support. Can't find what you're looking for? 
              We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className={`flex items-center space-x-3 mb-8 p-4 rounded-lg ${category.bgColor}`}>
                    <category.icon className={`h-8 w-8 ${category.color}`} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h2>
                  </div>
                  
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`${categoryIndex}-${index}`} className="border rounded-lg px-6">
                        <AccordionTrigger className="text-left hover:no-underline">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {faq.q}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Our team is here to help you understand how AI can transform your business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <Card>
                <CardHeader className="pb-3">
                  <MessageSquare className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Live Chat</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Chat with our AI agent for instant answers
                  </CardDescription>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/agent-test-room">Start Chat</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <Phone className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Phone Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Speak directly with our experts
                  </CardDescription>
                  <Button variant="outline" size="sm">
                    +1 (555) 123-4567
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <Mail className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Email Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Get detailed answers via email
                  </CardDescription>
                  <Button variant="outline" size="sm" asChild>
                    <a href="mailto:contact@ailaboratories.ai">Send Email</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <Button size="lg" asChild>
              <Link href="/contact">
                Schedule a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Popular Topics
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/services#consultancy" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      AI Consultancy Services
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Learn about our strategic AI consulting and planning services.
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/services#workflow-development" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      Custom AI Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Discover our workflow automation and integration capabilities.
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/research" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      Research & Innovation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Explore our cutting-edge research and development initiatives.
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}