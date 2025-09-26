import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Cog, Search, Users, Zap, ChevronRight } from "lucide-react";
import ParticlesBackground from "@/components/particles-background";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 overflow-hidden">
        {/* Particles Background */}
        <div className="absolute inset-0 z-0">
          <ParticlesBackground />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-20">
          <div className="text-center">
            <div className="hero-content-fade-in" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
                Transform Your Business Operations
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  with Artificial Intelligence
                </span>
              </h1>
            </div>
            
            <div className="hero-content-fade-in" style={{ animationDelay: '0.8s' }}>
              <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-700 dark:text-gray-300">
                AILaboratories provides cutting-edge AI consultancy, workflow automation, 
                and R&D solutions to revolutionize your operations and unlock new possibilities.
              </p>
            </div>
            
            <div className="hero-content-fade-in" style={{ animationDelay: '1.1s' }}>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button asChild size="lg" className="pulse-glow">
                  <Link href="/contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/agent-test-room">
                    Agents Test Room <Zap className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            

          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white dark:bg-gray-900 relative">
        {/* Decorative Tech Image */}
        <div className="absolute right-0 top-20 w-1/3 h-64 overflow-hidden opacity-5 dark:opacity-3">
          <img 
            src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80"
            alt="Technology Background"
            className="w-full h-full object-cover transform rotate-12"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Our Core Services
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              Comprehensive AI solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              {/* Card Image Header */}
              <div className="h-32 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="AI Strategy Meeting"
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-blue-100/80 dark:from-blue-900/40 dark:to-blue-800/40"></div>
                <Brain className="absolute bottom-4 left-4 h-12 w-12 text-blue-600" />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">AI Consultancy</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
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

            <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              {/* Card Image Header */}
              <div className="h-32 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                  alt="Automated Workflow Dashboard"
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 to-purple-100/80 dark:from-purple-900/40 dark:to-purple-800/40"></div>
                <Cog className="absolute bottom-4 left-4 h-12 w-12 text-purple-600" />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">Workflow Automation</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
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

            <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              {/* Card Image Header */}
              <div className="h-32 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Research and Development Lab"
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 to-green-100/80 dark:from-green-900/40 dark:to-green-800/40"></div>
                <Search className="absolute bottom-4 left-4 h-12 w-12 text-green-600" />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">Research & Development</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
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
      <section className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        {/* Team collaboration image */}
        <div className="absolute left-0 bottom-0 w-1/2 h-96 overflow-hidden opacity-8 dark:opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Team Collaboration"
            className="w-full h-full object-cover transform -rotate-6 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50/70 to-gray-50 dark:from-transparent dark:via-gray-800/70 dark:to-gray-800"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                  Agents Test Room
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}