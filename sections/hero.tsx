import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      {/* Video */}
      <video
        src="/assets/doodleBg.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="px-6 md:px-20 max-w-3xl">
          
          <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-white">
            Social media you don’t read.
            <br />
            <span className="text-pink-500 font-semibold italic">
              You listen.
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
            Voice-first conversations where replies stack into threads you can play like a playlist.
          </p>

          <button className="mt-8 px-7 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-lg hover:bg-white/20 transition">
            Join the{" "}
            <span className="italic font-bold text-pink-400">
              Waitlist
            </span>
          </button>

          <p className="mt-4 text-sm text-gray-400">
            No typing. No scrolling noise. Just real conversations.
          </p>

        </div>
      </div>
    </div>
  );
};

export default Hero;