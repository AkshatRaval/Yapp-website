import Navigation from "@/components/navigation";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import Contact from "@/sections/contact";
import Features from "@/sections/features";
import Footer from "@/sections/footer";
import Hero from "@/sections/hero";

const page = () => {
  return (
    <div>
      <SmoothCursor />
      <Navigation />
      <Hero />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
