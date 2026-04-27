"use client";

import React, { useEffect, useRef } from "react";
import { MdGroups2 } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const float1Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.to(float1Ref.current, {
        y: -40,
        x: 30,
        scale: 1.2,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="cta" className="py-32 px-6 relative w-full overflow-hidden flex items-center justify-center">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-accent/20 rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-white/5 rounded-full pointer-events-none -z-10" />

      {/* Floating Lights */}
      <div 
        ref={float1Ref}
        className="absolute top-20 right-[15%] w-56 h-56 bg-accent/20 rounded-full blur-[100px] pointer-events-none -z-10"
      />

      <div ref={contentRef} className="max-w-2xl mx-auto text-center relative z-10 flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
          Ready to stop typing <br className="hidden md:block" />
          and start <span className="text-accent italic">listening?</span>
        </h2>
        
        <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-lg">
          Join the exclusive waitlist to secure your username and get early access to the future of voice-first social.
        </p>

        {/* PUT YOUR WAITLIST FORM URL BELOW */}
        <a 
          href="#join" 
          className="group relative inline-flex items-center justify-center gap-3 bg-accent text-background px-8 py-4 rounded-full text-base font-bold overflow-hidden transition-transform hover:scale-105 active:scale-95"
        >
          <span className="relative z-10 flex items-center gap-2">
            Join the Waitlist <MdGroups2 size={22} />
          </span>
          {/* Hover highlight effect */}
          <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
        </a>

        <p className="mt-6 text-xs text-muted-foreground">
          Spots are limited. No spam, ever.
        </p>
      </div>
    </section>
  );
};

export default CTA;
