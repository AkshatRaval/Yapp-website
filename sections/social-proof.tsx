"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AvatarCircles } from "@/components/ui/avatar-circles";

gsap.registerPlugin(ScrollTrigger);

const avatars = [
  {
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64",
    profileUrl: "#",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64",
    profileUrl: "#",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64",
    profileUrl: "#",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=64&h=64",
    profileUrl: "#",
  },
];

const testimonials = [
  {
    quote: "Finally, a group chat where I don't have to scroll through 100 missed texts. Listening feels so much more natural.",
    author: "Sarah J.",
    role: "Early Adopter"
  },
  {
    quote: "It's like WhatsApp voice notes but actually organized and playable like a podcast. Absolutely game-changing.",
    author: "Mike T.",
    role: "Community Manager"
  },
  {
    quote: "The audio quality and the way it strips out background noise makes these conversations so easy to consume on the go.",
    author: "Elena R.",
    role: "Product Designer"
  }
];

const SocialProof = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const float1Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left side entry
      gsap.from(leftRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        x: -40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Cards stagger entry
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Floating element
      gsap.to(float1Ref.current, {
        y: -30,
        x: -20,
        scale: 1.1,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="social-proof" className="py-24 px-6 md:px-12 relative w-full overflow-hidden">
      {/* Floating Lights */}
      <div 
        ref={float1Ref}
        className="absolute top-1/4 left-10 w-40 h-40 bg-accent/15 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side - Trust visual */}
        <div ref={leftRef} className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Loved by early <span className="text-accent italic">listeners</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-sm">
            Join the growing community of people moving away from endless texting and back to real, human connection.
          </p>
          
          <div className="flex items-center gap-4 mt-4">
            <AvatarCircles numPeople={1000} avatarUrls={avatars} />
            <div className="text-xs text-muted-foreground flex flex-col">
              <span className="flex text-yellow-500 text-sm">★★★★★</span>
              <span>Waitlist filling fast</span>
            </div>
          </div>
        </div>

        {/* Right Side - Testimonial Cards */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 relative">
          {/* Subtle glow behind cards */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent/5 blur-[100px] pointer-events-none" />
          
          {testimonials.map((test, idx) => (
            <div 
              key={idx} 
              ref={(el) => { cardsRef.current[idx] = el; }}
              className={`p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md flex flex-col justify-between ${idx === 2 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''}`}
            >
              <p className="text-sm md:text-base text-foreground/90 leading-relaxed mb-6 font-medium">
                "{test.quote}"
              </p>
              <div>
                <p className="text-sm font-semibold">{test.author}</p>
                <p className="text-xs text-muted-foreground">{test.role}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default SocialProof;
