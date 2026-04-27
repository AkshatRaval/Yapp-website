"use client";

import { Iphone } from "@/components/ui/iphone";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { MdGroups2 } from "react-icons/md";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const mockRightRef = useRef<HTMLDivElement>(null);
  const mockLeftRef = useRef<HTMLDivElement>(null);
  const badge1Ref = useRef<HTMLDivElement>(null);
  const badge2Ref = useRef<HTMLDivElement>(null);
  const badge3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // content animation
      gsap.from(contentRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // phone animation
      gsap.from(phoneRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
      });

      // background circles
      gsap.from(".bg-circle", {
        scale: 0.9,
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "power2.out",
      });

      // right mockup entry
      gsap.from(mockRightRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
      });

      // left mockup entry
      gsap.from(mockLeftRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
      });

      // floating badges entry
      gsap.from([badge1Ref.current, badge2Ref.current, badge3Ref.current], {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        delay: 0.8,
        ease: "power3.out"
      });

      // floating animation (both)
      gsap.to([mockRightRef.current, mockLeftRef.current], {
        y: -12,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3,
      });

      // floating animation (badges)
      gsap.to([badge1Ref.current, badge2Ref.current, badge3Ref.current], {
        y: -8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.4,
      });

      // subtle rotation
      gsap.to(mockRightRef.current, {
        rotate: "+=2",
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(mockLeftRef.current, {
        rotate: "-=2",
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="hero"
      ref={containerRef}
      className="min-h-screen relative w-full overflow-hidden flex items-center justify-center"
    >
      {/* 🌑 Background Circles */}
      <div className="absolute bottom-[-220px] flex items-center justify-center w-full pointer-events-none">
        <div className="absolute w-[800px] h-[800px] rounded-full border border-accent/10 bg-circle" />
        <div className="absolute w-[650px] h-[650px] rounded-full border border-accent/10 bg-circle" />
        <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-primary/10 to-accent/10 blur-3xl bg-circle" />
      </div>

      {/* 📱 Phone */}
      <div
        ref={phoneRef}
        className="absolute bottom-[-90px] z-10 w-[clamp(220px,32vw,320px)]"
      >
        <Iphone src="assets/mainScreenshot.jpeg" />
      </div>

      {/* 🎯 Right Mockup */}
      <div
        ref={mockRightRef}
        className="
          absolute
          bottom-[18%] sm:bottom-[22%] md:bottom-[25%]
          right-[6%] sm:right-[8%] md:right-[12%] lg:right-[22%]
          w-[110px] sm:w-[140px] md:w-[200px] lg:w-[240px]
          z-20
          rotate-[6deg] sm:rotate-[4deg] md:rotate-[2deg]
        "
      >
        <img
          src="/assets/heroMockup1.png"
          className="w-full h-auto object-contain"
          alt="Mockup"
        />
        {/* Blur depth */}
        <img
          src="/assets/heroMockup1.png"
          className="w-full h-auto object-contain absolute top-0 left-0 -z-10 blur-[20px] opacity-40 scale-110"
          alt="Mockup blur"
        />
      </div>

      {/* 🎯 Left Mockup */}
      <div
        ref={mockLeftRef}
        className="
          absolute
          bottom-[20%] sm:bottom-[24%] md:bottom-[28%]
          left-[6%] sm:left-[8%] md:left-[12%] lg:left-[18%]
          w-[100px] sm:w-[130px] md:w-[180px] lg:w-[220px]
          z-20
          -rotate-[6deg] sm:-rotate-[4deg] md:-rotate-[2deg]
        "
      >
        <img
          src="/assets/heroWaveform.png"
          className="w-full h-auto object-contain"
          alt="Waveform"
        />
        {/* Blur depth */}
        <img
          src="/assets/heroWaveform.png"
          className="w-full h-auto object-contain absolute top-0 left-0 -z-10 blur-[20px] opacity-40 scale-110"
          alt="Waveform blur"
        />
      </div>

      {/* 🚀 Floating Features */}
      <div 
        ref={badge1Ref}
        className="absolute top-[35%] left-[10%] lg:left-[15%] z-30 bg-white/[0.05] border border-white/10 backdrop-blur-xl rounded-full px-4 py-2 text-xs font-medium text-white/90 shadow-xl"
      >
        ✨ No AI Slop
      </div>
      
      <div 
        ref={badge2Ref}
        className="absolute top-[25%] right-[12%] lg:right-[18%] z-30 bg-white/[0.05] border border-white/10 backdrop-blur-xl rounded-full px-4 py-2 text-xs font-medium text-white/90 shadow-xl"
      >
        🎧 Play like a playlist
      </div>

      <div 
        ref={badge3Ref}
        className="absolute bottom-[35%] left-[20%] lg:left-[25%] z-30 bg-accent/20 border border-accent/30 backdrop-blur-xl rounded-full px-4 py-2 text-xs font-medium text-white/90 shadow-xl"
      >
        🗣️ Pure Voices
      </div>

      {/* ✨ Content */}
      <div
        ref={contentRef}
        className="flex flex-col justify-start items-center text-center absolute top-16 sm:top-20 px-4 max-w-[90%] sm:max-w-xl md:max-w-2xl"
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">
          Get Ready to{" "}
          <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
            Yapp
          </span>
        </h1>

        <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
          Voice-first conversations where replies stack into threads you can
          play like a playlist.
        </p>

        <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <a href="#join" className="rounded-full px-5 py-2 flex items-center justify-center gap-2 bg-accent text-background font-bold hover:scale-[1.02] active:scale-[0.98] transition-transform">
            Join the Waitlist <MdGroups2 size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
