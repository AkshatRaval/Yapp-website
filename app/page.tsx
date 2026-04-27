import Navigation from "@/components/navigation";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import About from "@/sections/about";
import Features from "@/sections/features";
import HowItWorks from "@/sections/how-it-works";
import SocialProof from "@/sections/social-proof";
import CTA from "@/sections/cta";
import Footer from "@/sections/footer";
import Hero from "@/sections/hero";
import Contact from "@/sections/contact";
import { WaitlistModal } from "@/components/waitlist-modal";

const page = () => {
  return (
    <div>
      <WaitlistModal />
      <SmoothCursor />
      <Navigation />
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      {/* <SocialProof /> */}
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
