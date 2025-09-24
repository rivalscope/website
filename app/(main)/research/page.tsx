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
  Zap
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
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className={`bg-gradient-to-br ${area.bgColor}`}>
                  <area.icon className={`h-12 w-12 ${area.color} mb-4`} />
                  <CardTitle className="text-xl">{area.title}</CardTitle>
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
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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