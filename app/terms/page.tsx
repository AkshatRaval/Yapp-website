import Navigation from "@/components/navigation";
import Footer from "@/sections/footer";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SmoothCursor />
      <Navigation />
      
      <main className="flex-grow pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto w-full animate-in fade-in slide-in-from-bottom-8 duration-700">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Terms of Service</h1>
        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
          <p className="text-sm font-medium text-accent">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p>
              This is a placeholder for the Terms of Service. By accessing and using the Yapp platform, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">2. Description of Service</h2>
            <p>
              Yapp provides a voice-first social communication platform. We reserve the right to modify or discontinue, temporarily or permanently, the service with or without notice.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">3. User Conduct</h2>
            <p>
              You agree to use the service for lawful purposes only and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4. Account Security</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer or device.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">5. Contact Information</h2>
            <p>
              If you have any questions regarding these Terms, please contact us.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
