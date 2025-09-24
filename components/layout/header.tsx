"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Research", href: "/research" },
  { name: "FAQ", href: "/faq" },
  { name: "Agent Test Room", href: "/agent-test-room" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center px-4 sm:px-6 lg:px-8">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
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
            <span className="hidden font-bold sm:inline-block">
              AILaboratories
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <SheetHeader>
              <SheetTitle className="flex items-center space-x-2 text-left">
                <Image
                  src="/branding/logo_web_blue.png"
                  alt="AILaboratories"
                  width={24}
                  height={24}
                  className="h-6 w-auto dark:hidden"
                />
                <Image
                  src="/branding/logo_web_white.png"
                  alt="AILaboratories"
                  width={24}
                  height={24}
                  className="h-6 w-auto hidden dark:block"
                />
                <span className="font-bold">AILaboratories</span>
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-foreground",
                    pathname === item.href
                      ? "text-foreground"
                      : "text-foreground/60"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link href="/" className="flex items-center space-x-2 md:hidden">
              <Image
                src="/branding/logo_web_blue.png"
                alt="AILaboratories"
                width={24}
                height={24}
                className="h-6 w-auto dark:hidden"
              />
              <Image
                src="/branding/logo_web_white.png"
                alt="AILaboratories"
                width={24}
                height={24}
                className="h-6 w-auto hidden dark:block"
              />
              <span className="font-bold">AILaboratories</span>
            </Link>
          </div>
          <nav className="flex items-center">
            <Button asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}