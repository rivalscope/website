import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Cpu, Shield, Users, Zap, Server, Network, Lock, Smartphone, Monitor, Eye } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              R&D Projects
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Next-Generation AI Products
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Pioneering the future of private AI with cutting-edge hardware solutions. 
              From pocket-sized AI devices to enterprise workstations, we're building the infrastructure for tomorrow's AI-powered world.
            </p>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="dream-machine" className="w-full">
            <TabsList className="grid w-full grid-cols-5 max-w-5xl mx-auto mb-12 text-sm">
              <TabsTrigger value="dream-machine">Dream Machine</TabsTrigger>
              <TabsTrigger value="iocentral">IOCentral</TabsTrigger>
              <TabsTrigger value="flowfoundry">FlowFoundry</TabsTrigger>
              <TabsTrigger value="medusa">Medusa LLM</TabsTrigger>
              <TabsTrigger value="genie">Genie IoT</TabsTrigger>
            </TabsList>

            {/* Dream Machine Tab */}
            <TabsContent value="dream-machine" className="space-y-12">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <Smartphone className="h-12 w-12 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Dream Machine 1</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  The first portable AI device capable of running private AI models and agents workflows right in your pocket.
                </p>
                <Badge variant="secondary" className="mt-2">Under Development</Badge>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Product Image */}
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl overflow-hidden">
                    <img 
                      src="/devices/dream_machine.png"
                      alt="Dream Machine 1"
                      className="w-full h-full object-contain p-8"
                    />
                  </div>
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Private AI in Your Pocket
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Dream Machine 1 represents a breakthrough in portable AI computing. This pocket-sized device 
                      runs sophisticated AI models and agents workflows completely offline, ensuring your data never 
                      leaves your control.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <Shield className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Complete Privacy</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">100% offline processing</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Cpu className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Powerful Hardware</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Optimized AI processors</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Zap className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Agents Workflows</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Multi-agent automation</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Smartphone className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Pocket-Sized</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Ultra-portable design</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button asChild>
                      <Link href="/contact">
                        Get Notified <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* IOCentral Tab */}
            <TabsContent value="iocentral" className="space-y-12">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <Server className="h-12 w-12 text-purple-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">IOCentral</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Professional AI workstations designed to run private AI models for teams of any size.
                </p>
                <Badge variant="secondary" className="mt-2">Under Development</Badge>
              </div>

              {/* IOCentral Hero Images */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
                {/* Desktop Version */}
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl overflow-hidden">
                    <img 
                      src="/devices/IOCentral_desktop.png"
                      alt="IOCentral Desktop"
                      className="w-full h-full object-contain p-6"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <Badge variant="secondary" className="bg-white dark:bg-gray-800 shadow-lg">
                      Desktop Workstation
                    </Badge>
                  </div>
                </div>

                {/* Server Version */}
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl overflow-hidden">
                    <img 
                      src="/devices/IOCentral_server.png"
                      alt="IOCentral Server"
                      className="w-full h-full object-contain p-6"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <Badge variant="secondary" className="bg-white dark:bg-gray-800 shadow-lg">
                      Enterprise Server
                    </Badge>
                  </div>
                </div>
              </div>

              {/* IOCentral Models */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* IOCentral Solo */}
                <Card className="relative overflow-hidden border-2 hover:border-blue-300 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <Monitor className="h-8 w-8 text-blue-600" />
                      <Badge variant="outline">1 User</Badge>
                    </div>
                    <CardTitle className="text-xl">IOCentral Solo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Perfect for individual researchers and developers who need dedicated AI processing power.
                    </CardDescription>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-center">
                        <Cpu className="h-4 w-4 text-blue-500 mr-2" />
                        High-performance AI chips
                      </li>
                      <li className="flex items-center">
                        <Shield className="h-4 w-4 text-green-500 mr-2" />
                        Complete data privacy
                      </li>
                      <li className="flex items-center">
                        <Zap className="h-4 w-4 text-purple-500 mr-2" />
                        Local model execution
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* IOCentral Team */}
                <Card className="relative overflow-hidden border-2 hover:border-purple-300 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <Users className="h-8 w-8 text-purple-600" />
                      <Badge variant="outline">5 Users</Badge>
                    </div>
                    <CardTitle className="text-xl">IOCentral Team</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Designed for small teams that need shared AI resources with multi-user support.
                    </CardDescription>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-center">
                        <Network className="h-4 w-4 text-blue-500 mr-2" />
                        Multi-user management
                      </li>
                      <li className="flex items-center">
                        <Lock className="h-4 w-4 text-green-500 mr-2" />
                        User isolation
                      </li>
                      <li className="flex items-center">
                        <Server className="h-4 w-4 text-purple-500 mr-2" />
                        Scalable processing
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* IOCentral Pro */}
                <Card className="relative overflow-hidden border-2 hover:border-green-300 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <Server className="h-8 w-8 text-green-600" />
                      <Badge variant="outline">10 Users</Badge>
                    </div>
                    <CardTitle className="text-xl">IOCentral Pro</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Professional-grade workstation for medium-sized teams with advanced AI requirements.
                    </CardDescription>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-center">
                        <Cpu className="h-4 w-4 text-blue-500 mr-2" />
                        Enterprise-grade hardware
                      </li>
                      <li className="flex items-center">
                        <Network className="h-4 w-4 text-green-500 mr-2" />
                        Advanced networking
                      </li>
                      <li className="flex items-center">
                        <Shield className="h-4 w-4 text-purple-500 mr-2" />
                        Enhanced security
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* IOCentral Enterprise */}

                <Card className="relative overflow-hidden border-2 hover:border-orange-300 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <Network className="h-8 w-8 text-orange-600" />
                      <Badge variant="outline">10+ Users</Badge>
                    </div>
                    <CardTitle className="text-xl">IOCentral Enterprise</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Scalable solution for large organizations with unlimited user capacity and custom configurations.
                    </CardDescription>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-center">
                        <Users className="h-4 w-4 text-blue-500 mr-2" />
                        Unlimited users
                      </li>
                      <li className="flex items-center">
                        <Server className="h-4 w-4 text-green-500 mr-2" />
                        Custom hardware
                      </li>
                      <li className="flex items-center">
                        <Lock className="h-4 w-4 text-purple-500 mr-2" />
                        Enterprise security
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Medusa LLM Tab */}
            <TabsContent value="medusa" className="space-y-12">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <Cpu className="h-12 w-12 text-orange-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Medusa LLM</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  A specialized 3B parameter INT8 Large Language Model designed for agentic workflows, 
                  tool usage, and intelligent input filtering - developed in the UK and optimized for edge deployment.
                </p>
                <Badge variant="secondary" className="mt-2">AI Model R&D</Badge>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Model Visualization */}
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="h-16 w-16 bg-orange-200 dark:bg-orange-800 rounded-lg flex items-center justify-center">
                          <Cpu className="h-8 w-8 text-orange-600" />
                        </div>
                        <div className="h-16 w-16 bg-red-200 dark:bg-red-800 rounded-lg flex items-center justify-center">
                          <Zap className="h-8 w-8 text-red-600" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">3B Parameter Model</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">INT8 Quantized</p>
                    </div>
                  </div>
                </div>

                {/* Model Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Intelligent Agentic AI Model
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Medusa is a breakthrough compact language model engineered specifically for agentic workflows. 
                      Despite its compact 3B parameter size with INT8 quantization, it excels at tool usage, 
                      workflow execution, and intelligent input discrimination - distinguishing between genuine 
                      requests and casual interactions.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <Zap className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Tool Mastery</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Expert tool usage & execution</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Shield className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Input Filtering</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Distinguishes real vs. casual inputs</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Network className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Agentic Workflows</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Optimized for multi-step tasks</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Cpu className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Edge Optimized</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">3B params, INT8 quantized</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <Cpu className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-orange-900 dark:text-orange-100">Technical Specifications</h4>
                          <ul className="text-sm text-orange-700 dark:text-orange-300 mt-2 space-y-1">
                            <li>• 3 billion parameters with INT8 quantization</li>
                            <li>• Specialized training for tool usage and agentic workflows</li>
                            <li>• Advanced input discrimination capabilities</li>
                            <li>• Optimized for edge deployment on mobile hardware</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <Network className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-blue-900 dark:text-blue-100">Perfect for Hardware Integration</h4>
                          <p className="text-sm text-blue-700 dark:text-blue-300">
                            Medusa is designed to be the core AI model powering Dream Machine and IOCentral devices, 
                            providing intelligent agentic capabilities while maintaining privacy and efficiency.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button asChild>
                      <Link href="/contact">
                        Early Access Program <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Medusa Capabilities */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
                      <Zap className="h-6 w-6 text-orange-600" />
                    </div>
                    <CardTitle>Advanced Tool Usage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Expertly handles complex tool interactions, API calls, and multi-step operations 
                      with precision and reliability in agentic workflows.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle>Intelligent Filtering</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Distinguishes between casual conversation and actionable requests, 
                      reducing unnecessary processing and improving user experience.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                      <Cpu className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle>Edge Deployment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Compact design allows deployment on mobile and edge devices while maintaining 
                      high performance and low latency for real-time applications.
                    </CardDescription>
                  </CardContent>
                </Card>

            </div>
          </TabsContent>

          {/* Genie IoT Tab */}
          <TabsContent value="genie" className="space-y-12">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Server className="h-12 w-12 text-teal-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Genie IoT</h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                A comprehensive range of plug-and-play IoT hardware devices that seamlessly integrate with FlowFoundry, 
                enabling agentic applications to control and automate any machinery, equipment, and sensors in the physical world.
              </p>
              <Badge variant="secondary" className="mt-2">IoT Hardware R&D</Badge>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
              {/* Genie IoT v1 */}
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl overflow-hidden">
                  <img
                    src="/devices/genie_IOT.png"
                    alt="Genie IoT Device v1"
                    className="w-full h-full object-contain p-6"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <Badge variant="secondary" className="bg-white dark:bg-gray-800 shadow-lg">
                    Genie IoT v1
                  </Badge>
                </div>
              </div>
              {/* Genie IoT v2 */}
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl overflow-hidden">
                  <img
                    src="/devices/Genie_IO.png"
                    alt="Genie IoT Device v2"
                    className="w-full h-full object-contain p-6"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <Badge variant="secondary" className="bg-white dark:bg-gray-800 shadow-lg">
                    Genie IoT v2
                  </Badge>
                </div>
              </div>
            </div>

            {/* Genie Product Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {/* Sensor Modules */}
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-teal-600" />
                  </div>
                  <CardTitle className="text-lg">Sensor Modules</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    Temperature, humidity, motion, light, sound, and environmental monitoring sensors 
                    with instant FlowFoundry integration.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Control Units */}
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle className="text-lg">Control Units</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    Relay switches, motor controllers, and actuators for automating lights, 
                    pumps, motors, and industrial equipment.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Communication Hubs */}
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                    <Network className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Communication Hubs</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    Wireless gateways and protocol converters enabling seamless connectivity 
                    across different industrial standards.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Edge Processors */}
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                    <Cpu className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Edge Processors</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    Local processing units for real-time decision making and edge AI inference 
                    without cloud dependency.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Integration Highlight */}

            <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-6 mt-12">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/40 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Network className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-teal-900 dark:text-teal-100 mb-3">
                    Seamless Ecosystem Integration
                  </h3>
                  <p className="text-teal-700 dark:text-teal-300 leading-relaxed mb-4">
                    Genie IoT devices are designed from the ground up to work with your entire AILaboratories ecosystem:
                  </p>
                  <ul className="text-sm text-teal-700 dark:text-teal-300 space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      <strong>FlowFoundry:</strong> Drag-and-drop device control in visual workflows
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      <strong>Medusa LLM:</strong> Natural language commands for device automation
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      <strong>Dream Machine & IOCentral:</strong> Local processing and private control
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>

      {/* Why Private AI Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Why Private AI Matters
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              In an age of data breaches and privacy concerns, private AI ensures your sensitive information stays secure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Shield className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Complete Data Privacy
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your data never leaves your device or network. Process sensitive information without 
                compromising privacy or regulatory compliance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Zap className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Lightning Fast
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                No internet latency or API rate limits. Get instant responses from AI models 
                running locally on optimized hardware.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Lock className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Enterprise Security
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Meet the strictest security requirements with air-gapped AI processing. 
                Perfect for healthcare, finance, and government applications.
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
              Be Among the First
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
              These revolutionary AI products are currently under development. 
              Get notified when they become available.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get Early Access <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <Link href="/research">
                  Learn About Our R&D
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}