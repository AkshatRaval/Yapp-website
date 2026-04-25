import React from "react";

const Navigation = () => {
  return (
    <div className="fixed top-0 w-full z-50">
      
      <header className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        
        {/* Left - Nav Pills */}
        <ul className="flex items-center gap-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-2 text-sm md:text-base text-white">
          <li>
            <a href="#" className="hover:text-pink-400 transition">Home</a>
          </li>
          <li>
            <a href="#features" className="hover:text-pink-400 transition">Features</a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-400 transition">
              About <span className="italic">Yapp</span>
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-400 transition">FAQ</a>
          </li>
        </ul>

        {/* Right - Actions */}
        <div className="flex items-center gap-6 text-white">
          <a href="#" className="text-sm md:text-base hover:text-pink-400 transition">
            Login
          </a>

          <button className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition">
            Get Started
          </button>
        </div>

      </header>
    </div>
  );
};

export default Navigation;