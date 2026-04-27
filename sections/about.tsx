"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal
      gsap.fromTo(
        imageRef.current,
        { y: 40, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );

      // Content reveal
      gsap.fromTo(
        contentRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="about" className="w-full py-32 px-6 md:px-12 lg:px-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* LEFT SIDE: Image */}
        <div ref={imageRef} className="w-full lg:w-1/2 relative">
          <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] md:aspect-[4/3] lg:aspect-[4/5] bg-white/[0.02] shadow-[0_0_40px_rgba(0,0,0,0.1)] border border-white/5">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
              alt="Friends hanging out"
              className="w-full h-full object-cover"
            />
            {/* Subtle Gradient Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
          </div>

          {/* Single Subtle Floating Element */}
          <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-background border border-white/10 rounded-2xl p-4 shadow-2xl flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-accent text-background flex items-center justify-center shrink-0">
              <svg width="14" height="16" viewBox="0 0 10 12" fill="currentColor">
                <path d="M0 12V0L10 6L0 12Z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Akshat & friends</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="h-1.5 w-16 bg-accent rounded-full" />
                <span className="text-[10px] text-muted-foreground font-medium">Listening...</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Content */}
        <div ref={contentRef} className="w-full lg:w-1/2 flex flex-col items-start text-left mt-10 lg:mt-0">
          <p className="text-sm font-medium text-accent tracking-wide uppercase mb-4">
            Build Community
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
            Your voice groups, <br />
            <span className="text-muted-foreground">actually alive.</span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed mb-10">
            Talk instead of typing. Yapp lets your group conversations flow like a playlist — listen, reply, and stay connected in a way that actually feels human. No scrolling through walls of text.
          </p>

          <a href="#join" className="bg-foreground text-background hover:scale-[1.02] active:scale-[0.98] transition-transform px-8 py-4 rounded-full text-sm font-semibold tracking-wide shadow-lg inline-block text-center mt-6">
            Join the Conversation
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;