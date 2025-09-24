import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Cog, 
  Search, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  TrendingUp, 
  Lightbulb,
  Workflow,
  Database,
  Bot,
  Target,
  Beaker
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services - AI Consultancy, Workflow Development & R&D",
  description: "Explore AILaboratories' comprehensive AI services: strategic consultancy, custom workflow development, and cutting-edge research & development solutions.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              Comprehensive AI Solutions
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Services That Drive{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Innovation
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              From strategic consultancy to hands-on development, we provide end-to-end AI solutions 
              that transform your business operations and unlock new growth opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* AI Consultancy */}
      <section id="consultancy" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Brain className="h-12 w-12 text-blue-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  AI Consultancy
                </h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Navigate the AI landscape with confidence. Our expert consultants help you identify 
                opportunities, assess feasibility, and develop strategic roadmaps for AI implementation.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">AI Strategy Development</h3>
                    <p className="text-gray-600 dark:text-gray-300">Comprehensive AI strategies aligned with your business objectives</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Technology Assessment</h3>
                    <p className="text-gray-600 dark:text-gray-300">Evaluate current systems and identify AI integration opportunities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">ROI Analysis</h3>
                    <p className="text-gray-600 dark:text-gray-300">Detailed cost-benefit analysis and implementation timelines</p>
                  </div>
                </div>
              </div>
              
              <Button asChild>
                <Link href="/contact">
                  Get Strategic Guidance <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <Users className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle className="text-lg">Expert Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Industry veterans with deep AI expertise across sectors
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <TrendingUp className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle className="text-lg">Proven Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Track record of successful AI implementations
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <Target className="h-8 w-8 text-purple-600 mb-2" />
                  <CardTitle className="text-lg">Strategic Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Business-aligned solutions that drive real value
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <Lightbulb className="h-8 w-8 text-yellow-600 mb-2" />
                  <CardTitle className="text-lg">Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Cutting-edge approaches and emerging technologies
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Development */}
      <section id="workflow-development" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 gap-6">
                <Card className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800">
                  <CardHeader>
                    <Workflow className="h-8 w-8 text-purple-600 mb-2" />
                    <CardTitle>Process Automation</CardTitle>
                    <CardDescription>
                      Streamline operations with intelligent automation workflows
                    </CardDescription>
                  </CardHeader>
                </Card>
                
                <Card className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800">
                  <CardHeader>
                    <Database className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle>Data Integration</CardTitle>
                    <CardDescription>
                      Seamless integration with existing systems and data sources
                    </CardDescription>
                  </CardHeader>
                </Card>
                
                <Card className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800">
                  <CardHeader>
                    <Bot className="h-8 w-8 text-green-600 mb-2" />
                    <CardTitle>AI Agents</CardTitle>
                    <CardDescription>
                      Custom AI agents for specific business functions and tasks
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <Cog className="h-12 w-12 text-purple-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Workflow Development
                </h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Transform your operations with custom AI workflows that automate processes, 
                enhance productivity, and integrate seamlessly with your existing infrastructure.
              </p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    What We Deliver
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Custom AI workflow solutions tailored to your needs
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      End-to-end development from concept to deployment
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Integration with existing systems and databases
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Ongoing support and optimization
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button asChild>
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Development */}
      <section id="research-development" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Search className="h-12 w-12 text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Research & Development
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Push the boundaries of what's possible with our cutting-edge R&D services. 
              We explore innovative AI applications and develop breakthrough solutions for your industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Beaker className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Innovation Labs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Dedicated research environments for exploring new AI technologies 
                  and developing proof-of-concept solutions.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <CardTitle>Prototype Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Rapid prototyping and testing of innovative AI concepts 
                  to validate feasibility and potential impact.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Technology Transfer</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Seamless transition from research findings to production-ready 
                  solutions that drive business value.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Research Focus Areas
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="text-sm py-2 px-4">Machine Learning</Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">Natural Language Processing</Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">Computer Vision</Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">Reinforcement Learning</Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">Edge AI</Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">Multimodal AI</Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">AI Safety</Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">Explainable AI</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
              Let's discuss which services best fit your needs and create a custom solution for your business.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Contact Our Experts <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <Link href="/agent-test-room">
                  Try Our AI Agent
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}