import "../globals.css";
import { Metadata } from "next";
import { Toaster } from "sonner";
import { Header } from "@/components/layout/header";

export const metadata: Metadata = {
  title: "Agent Test Room - Try Our AI Assistant",
  description: "Experience AILaboratories' advanced AI assistant in our interactive test environment. See our AI capabilities in action with real-time responses.",
};

export default function AgentTestRoomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Toaster position="top-center" richColors />
        {children}
      </main>
    </div>
  );
}