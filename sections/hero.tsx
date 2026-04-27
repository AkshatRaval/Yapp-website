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
      className="min-h-[100dvh] relative w-full overflow-hidden flex flex-col items-center justify-start pt-[12vh] sm:pt-[15vh]"
    >
      {/* 🌑 Background Circles */}
      <div className="absolute bottom-[-10vh] flex items-center justify-center w-full pointer-events-none z-0">
        <div className="absolute w-[120vh] h-[120vh] max-w-[1000px] max-h-[1000px] rounded-full border border-accent/10 bg-circle" />
        <div className="absolute w-[90vh] h-[90vh] max-w-[750px] max-h-[750px] rounded-full border border-accent/10 bg-circle" />
        <div className="w-[70vh] h-[70vh] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-tr from-primary/10 to-accent/10 blur-3xl bg-circle" />
      </div>

      {/* ✨ Content */}
      <div
        ref={contentRef}
        className="flex flex-col justify-start items-center text-center px-4 max-w-[90%] sm:max-w-xl md:max-w-2xl z-40 shrink-0"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">
          Get Ready to{" "}
          <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
            Yapp
          </span>
        </h1>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md">
          Voice-first conversations where replies stack into threads you can
          play like a playlist.
        </p>

        <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <a href="#join" className="rounded-full px-6 py-2.5 flex items-center justify-center gap-2 bg-accent text-background font-bold hover:scale-[1.02] active:scale-[0.98] transition-transform text-sm sm:text-base">
            Join the Waitlist <MdGroups2 size={20} />
          </a>
        </div>
      </div>

      {/* Space between content and phone */}
      <div className="flex-1 min-h-[4vh]"></div>

      {/* 📱 Phone */}
      <div
        ref={phoneRef}
        className="relative z-10 w-[clamp(220px,min(40vw,45vh),350px)] -mb-[12vh] md:-mb-[20vh]"
      >
        <Iphone src="assets/mainScreenshot.jpeg" />
      </div>

      {/* 🎯 Right Mockup */}
      <div
        ref={mockRightRef}
        className="
          absolute
          bottom-[20vh] sm:bottom-[22vh] md:bottom-[25vh]
          right-[4vw] sm:right-[8vw] md:right-[12vw] lg:right-[20vw]
          w-[clamp(110px,min(20vw,25vh),240px)]
          z-20 md:block hidden
          rotate-[6deg] sm:rotate-[4deg] md:rotate-[2deg]
        "
      >
        <img
          src="/assets/heroMockup1.png"
          className="md:block hidden w-full h-auto object-contain"
          alt="Mockup"
        />
        {/* Blur depth */}
        <img
          src="/assets/heroMockup1.png"
          className="md:block hidden w-full h-auto object-contain absolute top-0 left-0 -z-10 blur-[20px] opacity-40 scale-110"
          alt="Mockup blur"
        />
      </div>

      {/* 🎯 Left Mockup */}
      <div
        ref={mockLeftRef}
        className="
          absolute
          bottom-[22vh] sm:bottom-[24vh] md:bottom-[28vh]
          left-[4vw] sm:left-[8vw] md:left-[12vw] lg:left-[18vw]
          w-[clamp(100px,min(18vw,22vh),220px)]
          z-20
          -rotate-[6deg] sm:-rotate-[4deg] md:-rotate-[2deg]
        "
      >
        <img
          src="/assets/heroWaveform.png"
          className="md:block hidden w-full h-auto object-contain"
          alt="Waveform"
        />
        {/* Blur depth */}
        <img
          src="/assets/heroWaveform.png"
          className="md:block hidden w-full h-auto object-contain absolute top-0 left-0 -z-10 blur-[20px] opacity-40 scale-110"
          alt="Waveform blur"
        />
      </div>

      {/* 🚀 Floating Features */}
      <div
        ref={badge1Ref}
        className="md:block hidden absolute top-[35vh] left-[5vw] lg:left-[15vw] z-30 bg-white/[0.05] border border-white/10 backdrop-blur-xl rounded-full px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-medium text-white/90 shadow-xl"
      >
        ✨ No AI Slop
      </div>

      <div
        ref={badge2Ref}
        className="md:block hidden absolute top-[30vh] lg:top-[25vh] right-[5vw] lg:right-[15vw] z-30 bg-white/[0.05] border border-white/10 backdrop-blur-xl rounded-full px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-medium text-white/90 shadow-xl"
      >
        🎧 Play like a playlist
      </div>

      <div
        ref={badge3Ref}
        className="hidden md:block absolute bottom-[40vh] left-[20vw] lg:left-[25vw] z-30 bg-accent/20 border border-accent/30 backdrop-blur-xl rounded-full px-4 py-2 text-xs font-medium text-white/90 shadow-xl"
      >
        🗣️ Pure Voices
      </div>
    </div>
  );
};

export default Hero;
