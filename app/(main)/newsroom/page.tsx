import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Newsroom - Latest Updates & Announcements",
  description: "Stay updated with the latest news, announcements, and developments from AILaboratories. Get insights into our research breakthroughs and company milestones.",
  keywords: ["AI news", "company updates", "research announcements", "AILaboratories news", "artificial intelligence developments"],
};

const newsItems = [
  {
    id: 1,
    title: "AILaboratories Launches Advanced Workflow Automation Platform",
    description: "Our new platform revolutionizes how businesses implement AI-driven workflow automation, reducing implementation time by 60%.",
    date: "2025-09-20",
    category: "Product Launch",
    featured: true,
  },
  {
    id: 2,
    title: "Partnership with Leading European Tech Companies",
    description: "We're excited to announce strategic partnerships that will expand our AI consultancy services across Europe.",
    date: "2025-09-15",
    category: "Partnership",
    featured: false,
  },
  {
    id: 3,
    title: "Research Breakthrough in AI Agent Collaboration",
    description: "Our R&D team has achieved significant progress in multi-agent systems, enabling more efficient collaborative AI workflows.",
    date: "2025-09-10",
    category: "Research",
    featured: true,
  },
  {
    id: 4,
    title: "AILaboratories Expands Team with Leading AI Researchers",
    description: "We welcome five new senior researchers to our team, strengthening our capabilities in machine learning and AI development.",
    date: "2025-09-05",
    category: "Company",
    featured: false,
  },
  {
    id: 5,
    title: "New AI Consultancy Framework Reduces Client Onboarding Time",
    description: "Our innovative consultancy approach helps clients achieve AI integration 40% faster than traditional methods.",
    date: "2025-08-30",
    category: "Innovation",
    featured: false,
  },
  {
    id: 6,
    title: "AILaboratories Presents at International AI Conference",
    description: "Our CEO presented groundbreaking research on enterprise AI adoption at the Global AI Summit 2025.",
    date: "2025-08-25",
    category: "Event",
    featured: false,
  },
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const getCategoryColor = (category: string) => {
  const colors = {
    "Product Launch": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    "Partnership": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "Research": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    "Company": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    "Innovation": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
    "Event": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
  };
  return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
};

export default function NewsroomPage() {
  const featuredNews = newsItems.filter(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  return (
    <div className="container mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
          Newsroom
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Stay up to date with the latest news, announcements, and developments from AILaboratories. 
          Discover our research breakthroughs, product launches, and company milestones.
        </p>
      </div>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Featured News</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {featuredNews.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getCategoryColor(item.category)}>
                      {item.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-4 w-4" />
                      {formatDate(item.date)}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {item.description}
                  </CardDescription>
                  <Button variant="outline" size="sm">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* All News */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Latest Updates</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {regularNews.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className={getCategoryColor(item.category)} variant="secondary">
                    {item.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-4 w-4" />
                    {formatDate(item.date)}
                  </div>
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {item.description}
                </CardDescription>
                <Button variant="ghost" size="sm">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="mt-16 bg-gray-50 dark:bg-gray-900 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Stay Updated
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          Subscribe to our newsletter to receive the latest news, research updates, and announcements 
          directly in your inbox.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">
            Subscribe to Newsletter
          </Link>
        </Button>
      </div>
    </div>
  );
}