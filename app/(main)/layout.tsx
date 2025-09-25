import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CustomerChat } from "@/components/customer-chat";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <CustomerChat 
        businessName="AILaboratories"
      />
    </div>
  );
}