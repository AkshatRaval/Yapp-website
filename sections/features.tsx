import { Iphone } from "@/components/ui/iphone";
import { Marquee } from "@/components/ui/marquee";
import React from "react";
const features = [
  {
    title: "Voice-First Threads",
    desc: "Replies stack into structured conversations you can listen to, not read.",
  },
  {
    title: "Continuous Playback",
    desc: "Each reply flows into the next like a playlist—no interruptions.",
  },
  {
    title: "AI Noise Reduction",
    desc: "Low-effort content is filtered so you hear only meaningful discussions.",
  },
  {
    title: "Clean Voice Processing",
    desc: "Background noise and filler words are reduced for clarity.",
  },
  {
    title: "Temporary Yap Rooms",
    desc: "Live discussions that disappear after a set time.",
  },
  {
    title: "Thread Playback Engine",
    desc: "Conversations are intelligently ordered for better listening flow.",
  },
];
const FeatureCard = ({ feature }: any) => {
  return (

    <div className="group w-[260px] h-[160px] mx-3">
      <div
        className="
        h-full w-full
        rounded-2xl
        bg-white/[0.04]
        backdrop-blur-xl
        border border-white/10

        p-5 flex flex-col justify-between

        transition-all duration-300
        hover:bg-white/[0.08]
        hover:border-pink-500/30
      "
      >
        {/* Title */}
        <h3 className="text-sm md:text-base font-semibold leading-tight">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
          {feature.desc}
        </p>

        {/* Bottom accent */}
        <div className="h-[2px] w-6 bg-pink-500 opacity-70 group-hover:w-10 transition-all duration-300" />
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="relative py-28 px-6 md:px-12 overflow-hidden" id="features">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-pink-500/20 blur-[120px] rounded-full -z-10" />

      {/* Title */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          Conversations you can{" "}
          <span className="italic text-pink-500">listen to</span>
        </h1>

        <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          Not comments. Not noise. Just real voices flowing like a conversation.
        </p>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        {/* LEFT CONTENT */}
        <div className="flex-1 max-w-xl space-y-8 text-center lg:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
              Tap once. <br className="hidden md:block" />
              Start listening.
            </h2>

            <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              Hear thoughts, reactions, and ideas the way they’re meant to be
              experienced— naturally, not buried in text.
            </p>
          </div>

          {/* Feature Points (Upgraded style) */}
          <div className="space-y-5">
            <div className="flex items-start gap-3 justify-center lg:justify-start">
              <span className="text-pink-500 text-lg">●</span>
              <p className="text-sm md:text-base text-muted-foreground">
                Replies flow like a playlist
              </p>
            </div>

            <div className="flex items-start gap-3 justify-center lg:justify-start">
              <span className="text-pink-500 text-lg">●</span>
              <p className="text-sm md:text-base text-muted-foreground">
                Conversations feel human, not fragmented
              </p>
            </div>

            <div className="flex items-start gap-3 justify-center lg:justify-start">
              <span className="text-pink-500 text-lg">●</span>
              <p className="text-sm md:text-base text-muted-foreground">
                No scrolling. Just listening
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT MOCKUP */}
        <div className="flex-1 flex justify-center relative">
          {/* Glow Behind Phone */}
          <div className="absolute w-[300px] h-[300px] bg-pink-500/30 blur-[100px] rounded-full" />

          <div
            className="
              relative
              w-[65vw]
              max-w-[300px]
              sm:max-w-[360px]
              md:max-w-[420px]
              lg:max-w-[460px]
            "
          >
            <Iphone src="/assets/mainScreenshot.jpeg" />
          </div>
        </div>
      </div>
      <div className="w-full mx-auto mt-5">
        <Marquee pauseOnHover className="[--duration:50s]">
          {features.map((feature, index) => (
            <FeatureCard feature={feature} key={index} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Features;
