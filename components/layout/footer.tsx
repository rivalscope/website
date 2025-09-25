import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/branding/logo_web_blue.png"
                alt="AILaboratories"
                width={32}
                height={32}
                className="h-8 w-auto dark:hidden"
              />
              <Image
                src="/branding/logo_web_white.png"
                alt="AILaboratories"
                width={32}
                height={32}
                className="h-8 w-auto hidden dark:block"
              />
              <span className="text-xl font-bold">AILaboratories</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Transforming businesses with cutting-edge AI solutions, consultancy, 
              and research. We specialize in AI workflow automation and R&D to 
              support industries in their digital transformation journey.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link
                href="https://github.com/ailaboratories"
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://twitter.com/ailaboratories"
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://linkedin.com/company/ailaboratories"
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:contact@ailaboratories.ai"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/services#consultancy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  AI Consultancy
                </Link>
              </li>
              <li>
                <Link
                  href="/services#workflow-development"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Workflow Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#research-development"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  R&D Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/agent-test-room"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Agent Test Room
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8">
          <div className="flex justify-center">
            <p className="text-sm text-muted-foreground text-center">
              © 2025 AILaboratories. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}