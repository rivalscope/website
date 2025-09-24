import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Cog, Search, Users, Zap, ChevronRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6">
              Advanced AI Solutions
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
              Transform Your Business with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-600 dark:text-gray-300">
              AILaboratories provides cutting-edge AI consultancy, workflow development, 
              and R&D solutions to revolutionize your operations and unlock new possibilities.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/agent-test-room">
                  Try Our AI Agent <Zap className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Our Core Services
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              Comprehensive AI solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                <Brain className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">AI Consultancy</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <CardDescription className="text-base leading-relaxed">
                  Strategic guidance and expert advice to help you identify AI opportunities, 
                  assess feasibility, and develop implementation roadmaps tailored to your industry.
                </CardDescription>
                <Button variant="ghost" className="mt-4 p-0 h-auto font-semibold" asChild>
                  <Link href="/services#consultancy">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
                <Cog className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl">Workflow Development</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <CardDescription className="text-base leading-relaxed">
                  Custom AI workflow solutions designed to automate processes, enhance productivity, 
                  and seamlessly integrate with your existing business operations.
                </CardDescription>
                <Button variant="ghost" className="mt-4 p-0 h-auto font-semibold" asChild>
                  <Link href="/services#workflow-development">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
                <Search className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-xl">Research & Development</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <CardDescription className="text-base leading-relaxed">
                  Cutting-edge R&D services to explore innovative AI applications, prototype solutions, 
                  and drive technological advancement in your domain.
                </CardDescription>
                <Button variant="ghost" className="mt-4 p-0 h-auto font-semibold" asChild>
                  <Link href="/services#research-development">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Why Choose AILaboratories?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              We combine expertise, innovation, and results-driven approach
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Expert Team
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our team of AI specialists brings years of experience across various industries 
                and cutting-edge technologies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Zap className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Rapid Implementation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We focus on delivering practical solutions quickly, ensuring you see 
                tangible results in the shortest possible time.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Brain className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Innovation-Driven
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We stay at the forefront of AI research and development, bringing you 
                the latest innovations and breakthrough technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
              Let's discuss how AI can revolutionize your operations and drive growth.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Start Your AI Journey <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <Link href="/agent-test-room">
                  Experience Our AI
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}