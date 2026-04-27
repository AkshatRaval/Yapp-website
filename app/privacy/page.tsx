import Navigation from "@/components/navigation";
import Footer from "@/sections/footer";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SmoothCursor />
      <Navigation />
      
      <main className="flex-grow pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto w-full animate-in fade-in slide-in-from-bottom-8 duration-700">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Privacy Policy</h1>
        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
          <p className="text-sm font-medium text-accent">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">1. Information We Collect</h2>
            <p>
              This is a placeholder for the Privacy Policy. Here you will detail what information you collect from your users. For example, we collect information you provide directly to us, such as when you join the waitlist, request support, or communicate with us.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">2. How We Use Information</h2>
            <p>
              This section will explain how the collected information is utilized to provide, maintain, and improve the Yapp platform and services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">3. Information Sharing</h2>
            <p>
              Outline the circumstances under which user data might be shared with third parties, emphasizing user consent and data protection.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
