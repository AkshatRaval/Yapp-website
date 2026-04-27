"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLDivElement>(null);
  const float1Ref = useRef<HTMLDivElement>(null);
  const float2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title entry
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Steps stagger entry
      gsap.from(stepsRef.current, {
        scrollTrigger: {
          trigger: stepsRef.current[0],
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Floating animations
      gsap.to([float1Ref.current, float2Ref.current], {
        y: -30,
        x: 20,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 2,
      });
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      number: "01",
      title: "Tap to Speak",
      desc: "Forget typing. Just tap and share your thoughts instantly with your group.",
    },
    {
      number: "02",
      title: "Replies Stack Up",
      desc: "Responses organize into threaded voice notes, keeping the conversation clean.",
    },
    {
      number: "03",
      title: "Play as a Playlist",
      desc: "Listen to the whole thread seamlessly, like a personalized podcast of your friends.",
    },
  ];

  return (
    <section ref={containerRef} id="how-it-works" className="py-24 px-6 md:px-12 w-full max-w-7xl mx-auto relative overflow-visible">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Floating Lights */}
      <div 
        ref={float1Ref}
        className="absolute top-10 right-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none -z-10"
      />
      <div 
        ref={float2Ref}
        className="absolute bottom-10 left-10 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div ref={titleRef} className="text-center mb-16 md:mb-24">
        <p className="text-sm text-accent font-medium mb-3">How it works</p>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Three steps to <span className="italic opacity-80">better chats</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
        {steps.map((step, idx) => (
          <div 
            key={idx}
            ref={(el) => { stepsRef.current[idx] = el; }}
            className="flex flex-col items-center md:items-start text-center md:text-left group"
          >
            <div className="mb-6 md:mb-8 relative">
              {/* Soft background shape */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center backdrop-blur-sm group-hover:border-accent/30 transition-all duration-300">
                <span className="text-xl md:text-2xl font-bold text-accent/80">
                  {step.number}
                </span>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              {step.title}
            </h3>
            
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
