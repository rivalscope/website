import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  ArrowRight, 
  Brain, 
  Lightbulb, 
  Shield,
  Heart,
  Zap
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Leading AI Innovation & Research",
  description: "Learn about AILaboratories' mission, vision, and team. We're dedicated to advancing AI technology and helping businesses harness its transformative power.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              About AILaboratories
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Pioneering the Future of{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              At AILaboratories, we're not just building AI solutions – we're crafting the future 
              of intelligent technology that empowers businesses and transforms industries.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                <Target className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <CardDescription className="text-base leading-relaxed">
                  To democratize artificial intelligence by making cutting-edge AI technology 
                  accessible, practical, and transformative for businesses of all sizes. We believe 
                  AI should enhance human capabilities and drive sustainable growth across industries.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
                <Lightbulb className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <CardDescription className="text-base leading-relaxed">
                  To be the global leader in AI innovation, setting new standards for intelligent 
                  solutions that solve complex challenges. We envision a future where AI seamlessly 
                  integrates into every aspect of business operations, driving unprecedented efficiency and innovation.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Founded by a team of AI researchers and industry veterans
              </p>
            </div>
            
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                AILaboratories was born from a simple yet powerful idea: artificial intelligence 
                should be a force for positive transformation in the business world. Founded in 2023 
                by a group of AI researchers, data scientists, and industry experts, we recognized 
                the gap between cutting-edge AI research and practical business applications.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-6">
                Our founding team brings together decades of experience from leading tech companies, 
                research institutions, and successful AI implementations across various industries. 
                We've witnessed firsthand the transformative power of AI when applied thoughtfully 
                and strategically.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-6">
                Today, AILaboratories stands at the forefront of AI innovation, helping businesses 
                navigate the complex landscape of artificial intelligence and unlock new possibilities 
                for growth and efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Brain className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Innovation First
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We continuously push the boundaries of AI technology, exploring new possibilities 
                and creating breakthrough solutions that drive real-world impact.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Ethical AI
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We prioritize responsible AI development, ensuring our solutions are transparent, 
                fair, and beneficial for all stakeholders while maintaining the highest ethical standards.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Client Success
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your success is our success. We build long-term partnerships, providing ongoing 
                support and continuously optimizing solutions to achieve your business objectives.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
                  <Zap className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Rapid Delivery
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We understand the pace of modern business. Our agile development approach ensures 
                quick turnaround times without compromising on quality or effectiveness.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Collaboration
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe in the power of teamwork. We work closely with your team, fostering 
                knowledge transfer and building internal AI capabilities within your organization.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <Globe className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Global Impact
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our solutions are designed to scale globally, addressing challenges that span 
                industries and geographies while creating positive impact for communities worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Our Impact by Numbers
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-100">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">25+</div>
              <div className="text-blue-100">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">3x</div>
              <div className="text-blue-100">Average ROI Improvement</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Ready to Work with Us?
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              Join the growing number of businesses that trust AILaboratories to drive their AI transformation.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
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