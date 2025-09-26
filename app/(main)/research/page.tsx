import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  FileText, 
  Award, 
  Users, 
  ArrowRight, 
  ExternalLink,
  Calendar,
  BookOpen,
  Lightbulb,
  Cpu,
  Eye,
  MessageSquare,
  Shield,
  Zap,
  Server
} from "lucide-react";

export const metadata: Metadata = {
  title: "Research - Advancing AI Technology & Innovation",
  description: "Explore AILaboratories' cutting-edge research in artificial intelligence, machine learning, and emerging technologies. Discover our publications, projects, and breakthroughs.",
};

const researchAreas = [
  {
    icon: Cpu,
    title: "Machine Learning",
    description: "Advanced algorithms and architectures for improved learning efficiency and accuracy",
    color: "text-blue-600",
    bgColor: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20"
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Next-generation language models and conversational AI systems",
    color: "text-green-600",
    bgColor: "from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20"
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Advanced visual recognition and interpretation technologies",
    color: "text-purple-600",
    bgColor: "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20"
  },
  {
    icon: Shield,
    title: "AI Safety & Ethics",
    description: "Ensuring responsible and safe deployment of AI systems",
    color: "text-red-600",
    bgColor: "from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20"
  },
  {
    icon: Zap,
    title: "Edge AI",
    description: "Optimizing AI models for deployment on edge devices and IoT systems",
    color: "text-yellow-600",
    bgColor: "from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20"
  },
  {
    icon: Lightbulb,
    title: "Explainable AI",
    description: "Making AI decision-making processes transparent and interpretable",
    color: "text-indigo-600",
    bgColor: "from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20"
  }
];

const publications = [
  {
    title: "Efficient Neural Architecture Search for Multi-Modal Applications",
    authors: "AILaboratories Research Team",
    journal: "Journal of Machine Learning Research",
    year: "2024",
    type: "Paper",
    status: "Published"
  },
  {
    title: "Ethical Considerations in Large Language Model Deployment",
    authors: "Dr. Sarah Chen, Dr. Michael Rodriguez",
    journal: "AI Ethics Conference",
    year: "2024",
    type: "Conference",
    status: "Accepted"
  },
  {
    title: "Federated Learning for Edge AI: A Comprehensive Survey",
    authors: "AILaboratories Research Team",
    journal: "IEEE Transactions on AI",
    year: "2024",
    type: "Survey",
    status: "Under Review"
  },
  {
    title: "Improving Conversational AI with Context-Aware Memory Systems",
    authors: "Dr. Alex Thompson, Research Team",
    journal: "NeurIPS 2024",
    year: "2024",
    type: "Paper",
    status: "Submitted"
  }
];

const projects = [
  {
    title: "AutoML for Small Businesses",
    description: "Democratizing machine learning by creating automated ML tools specifically designed for small and medium enterprises.",
    status: "Active",
    duration: "2024 - 2025",
    funding: "Internal R&D"
  },
  {
    title: "Multimodal AI Assistant",
    description: "Developing next-generation AI assistants that can seamlessly process text, voice, images, and video inputs.",
    status: "Active",
    duration: "2023 - 2024",
    funding: "Government Grant"
  },
  {
    title: "Sustainable AI Computing",
    description: "Research into energy-efficient AI models and green computing practices for large-scale AI deployment.",
    status: "Completed",
    duration: "2023",
    funding: "Industry Partnership"
  }
];

export default function ResearchPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
        {/* Research Lab Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Research and Development Laboratory"
            className="w-full h-full object-cover opacity-8 dark:opacity-4"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/85 via-white/95 to-purple-50/85 dark:from-gray-900/92 dark:via-gray-900/97 dark:to-gray-800/92"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              Research & Innovation
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Advancing the Frontiers of{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Research
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Our research team pushes the boundaries of artificial intelligence, contributing to 
              scientific knowledge while developing practical solutions for tomorrow's challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Our Research Areas
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              Exploring cutting-edge technologies across multiple AI domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group overflow-hidden">
                <CardHeader className={`bg-gradient-to-br ${area.bgColor} relative`}>
                  {/* Research Area Background Images */}
                  <div className="absolute inset-0 opacity-8 group-hover:opacity-12 transition-opacity duration-300">
                    <img 
                      src={index === 0 ? "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" :
                           index === 1 ? "https://images.unsplash.com/photo-1526378722484-bd91ca387e32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80" :
                           index === 2 ? "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" :
                           index === 3 ? "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" :
                           index === 4 ? "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80" :
                           "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"}
                      alt={area.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <area.icon className={`h-12 w-12 ${area.color} mb-4 relative z-10`} />
                  <CardTitle className="text-xl relative z-10">{area.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <CardDescription className="text-base leading-relaxed">
                    {area.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        {/* Research Data Visualization */}
        <div className="absolute left-0 top-20 w-1/3 h-96 overflow-hidden opacity-6 dark:opacity-3">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Data Analytics and Research"
            className="w-full h-full object-cover transform -rotate-12 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-50/70 to-transparent dark:from-gray-800 dark:via-gray-800/70 dark:to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Current Research Projects
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              Ongoing initiatives driving AI innovation forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant={project.status === 'Active' ? 'default' : 'secondary'}>
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Duration: {project.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-2" />
                      <span>Funding: {project.funding}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product R&D Projects */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Product R&D Pipeline
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              Revolutionary hardware and software products currently under development
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-8">
            {/* Dream Machine 1 */}
            <Card className="border-2 border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors duration-300">
              <CardHeader className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center">
                    <Cpu className="h-6 w-6 text-blue-600" />
                  </div>
                  <Badge variant="outline">Hardware R&D</Badge>
                </div>
                <CardTitle className="text-xl">Dream Machine 1</CardTitle>
                <CardDescription>Portable AI Device</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    First-of-its-kind pocket-sized AI device capable of running private AI models 
                    and agents workflows completely offline. Revolutionary hardware design optimized 
                    for AI processing in an ultra-portable form factor.
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Research Focus:</h4>
                    <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        Edge AI optimization algorithms
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        Ultra-low power AI processors
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        Thermal management systems
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        Privacy-preserving architectures
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* IOCentral */}
            <Card className="border-2 border-purple-200 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700 transition-colors duration-300">
              <CardHeader className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <Badge variant="outline">Hardware R&D</Badge>
                </div>
                <CardTitle className="text-xl">IOCentral Series</CardTitle>
                <CardDescription>AI Workstation Platform</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    Professional AI workstation series designed for teams of 1-10+ users. 
                    Scalable architecture enabling private AI deployment across organizations 
                    with enterprise-grade security and performance.
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Research Focus:</h4>
                    <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                        Multi-user AI resource management
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                        Distributed computing architectures
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                        Enterprise security protocols
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                        Scalable hardware designs
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FlowFoundry */}
            <Card className="border-2 border-green-200 dark:border-green-800 hover:border-green-300 dark:hover:border-green-700 transition-colors duration-300">
              <CardHeader className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <Badge variant="outline">Software R&D</Badge>
                </div>
                <CardTitle className="text-xl">FlowFoundry</CardTitle>
                <CardDescription>Modular AI Platform</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    Revolutionary software platform enabling anyone to build AI workflows and 
                    multi-agent systems through visual, modular interfaces. Designed to run 
                    on Dream Machine and IOCentral hardware.
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Research Focus:</h4>
                    <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        Visual programming paradigms
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        Multi-agent orchestration
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        Distributed workflow execution
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        No-code AI development
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Medusa LLM */}
            <Card className="border-2 border-orange-200 dark:border-orange-800 hover:border-orange-300 dark:hover:border-orange-700 transition-colors duration-300">
              <CardHeader className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/40 rounded-lg flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-orange-600" />
                  </div>
                  <Badge variant="outline">AI Model R&D</Badge>
                </div>
                <CardTitle className="text-xl">Medusa LLM</CardTitle>
                <CardDescription>Agentic Language Model</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    Compact 3B parameter INT8 language model specialized for agentic workflows, 
                    advanced tool usage, and intelligent input discrimination. Developed in the UK and designed for 
                    edge deployment while maintaining sophisticated reasoning capabilities.
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Research Focus:</h4>
                    <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                        Advanced quantization techniques
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                        Tool usage optimization
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                        Input intent classification
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                        Agentic workflow training
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Genie IoT */}
            <Card className="border-2 border-teal-200 dark:border-teal-800 hover:border-teal-300 dark:hover:border-teal-700 transition-colors duration-300">
              <CardHeader className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/40 rounded-lg flex items-center justify-center">
                    <Server className="h-6 w-6 text-teal-600" />
                  </div>
                  <Badge variant="outline">IoT Hardware R&D</Badge>
                </div>
                <CardTitle className="text-xl">Genie IoT</CardTitle>
                <CardDescription>Physical World Interface</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    Plug-and-play IoT hardware range enabling agentic applications to control 
                    physical world equipment, machinery, and sensors. Seamless FlowFoundry 
                    integration for automated industrial and domestic environments.
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Research Focus:</h4>
                    <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
                        Zero-config device protocols
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
                        Industrial automation interfaces
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
                        Real-time sensor networks
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
                        Edge processing integration
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 max-w-4xl mx-auto">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                Integrated Ecosystem Approach
              </h3>
              <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
                These five products represent our vision for democratizing AI technology. Dream Machine and IOCentral 
                provide the private, secure hardware foundation, FlowFoundry makes advanced AI development 
                accessible through intuitive visual interfaces, Medusa LLM serves as the intelligent brain 
                powering agentic workflows, and Genie IoT bridges the digital and physical worlds through 
                plug-and-play automation devices. Together, they form a complete ecosystem 
                for private AI deployment, development, and real-world intelligent automation.
              </p>
            </div>
            
            <div className="mt-8">
              <Button asChild size="lg" className="mr-4">
                <Link href="/products">
                  Explore Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">
                  Join Development Program
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Recent Publications
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              Contributing to the global AI research community
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <Card key={index} className="border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {pub.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">
                          {pub.authors}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                          {pub.journal} • {pub.year}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{pub.type}</Badge>
                        <Badge variant={
                          pub.status === 'Published' ? 'default' : 
                          pub.status === 'Accepted' ? 'secondary' : 'outline'
                        }>
                          {pub.status}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Research Impact
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100">
              Our research translates into real-world solutions and industry advancement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <FileText className="h-12 w-12 text-white mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">25+</div>
              <div className="text-blue-100">Published Papers</div>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-white mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">8</div>
              <div className="text-blue-100">Research Awards</div>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-white mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-blue-100">Research Partners</div>
            </div>
            <div className="text-center">
              <BookOpen className="h-12 w-12 text-white mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">1000+</div>
              <div className="text-blue-100">Citations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Research Partnerships
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              Collaborating with leading institutions and organizations worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Academic Institutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Partnering with top universities for fundamental research and 
                  talent development in AI and machine learning.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Industry Leaders</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Collaborating with Fortune 500 companies to solve real-world 
                  challenges and accelerate AI adoption.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Government Agencies</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Working with public sector organizations on AI policy, 
                  ethics, and national technology initiatives.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Interested in Research Collaboration?
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              We're always looking for partners who share our passion for advancing AI technology 
              and creating positive impact through research.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">
                  Explore Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}