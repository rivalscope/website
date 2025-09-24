import "./globals.css";
import { Metadata } from "next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://ailaboratories.ai"),
  title: {
    default: "AILaboratories - Advanced AI Solutions & Consultancy",
    template: "%s | AILaboratories"
  },
  description: "AILaboratories provides cutting-edge AI consultancy, workflow development, and R&D solutions to transform your business operations with artificial intelligence.",
  keywords: ["AI consultancy", "artificial intelligence", "machine learning", "AI development", "workflow automation", "R&D", "AI solutions"],
  authors: [{ name: "AILaboratories", url: "https://ailaboratories.ai" }],
  creator: "AILaboratories",
  publisher: "AILaboratories",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ailaboratories.ai",
    siteName: "AILaboratories",
    title: "AILaboratories - Advanced AI Solutions & Consultancy",
    description: "Transform your business with our cutting-edge AI consultancy, workflow development, and R&D solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AILaboratories - Advanced AI Solutions & Consultancy",
    description: "Transform your business with our cutting-edge AI consultancy, workflow development, and R&D solutions.",
    creator: "@ailaboratories",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Toaster position="top-center" richColors />
        {children}
      </body>
    </html>
  );
}