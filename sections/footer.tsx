import { Mail } from "lucide-react";
import React from "react";
import {  BsTwitterX } from "react-icons/bs";
import { FaReddit, FaInstagram  } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="w-full py-16 px-6">
      
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8 md:p-16">
          {/* Decorative Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-pink-500/10 blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Side: Branding */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white tracking-tighter">
                Yapp<span className="text-pink-500 italic">!</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-sm leading-relaxed">
                The future of social is voice. Join the conversation and start listening to what matters.
              </p>
              <div className="flex gap-4">
                {/* PUT YOUR SOCIAL LINKS HERE */}
                <a
                  href="https://x.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-pink-500/20 hover:border-pink-500/50 transition-all duration-300"
                >
                  <BsTwitterX size={20} />
                </a>
                <a
                  href="https://reddit.com/r/your-community"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-pink-500/20 hover:border-pink-500/50 transition-all duration-300"
                >
                  <FaReddit size={20} />
                </a>
                <a
                  href="https://instagram.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-pink-500/20 hover:border-pink-500/50 transition-all duration-300"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="mailto:hello@yourdomain.com"
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-pink-500/20 hover:border-pink-500/50 transition-all duration-300"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Right Side: Links */}
            <div className="grid grid-cols-2 gap-8 md:justify-items-end">
              <div className="space-y-4">
                <h3 className="text-white font-semibold">Platform</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#features" className="hover:text-pink-400 transition">Features</a></li>
                  <li><a href="#join" className="hover:text-pink-400 transition">Waitlist</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-white font-semibold">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#about" className="hover:text-pink-400 transition">About</a></li>
                  {/* PUT YOUR PRIVACY/TERMS LINKS HERE */}
                  <li><a href="/privacy" className="hover:text-pink-400 transition">Privacy</a></li>
                  <li><a href="/terms" className="hover:text-pink-400 transition">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Divider */}
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Yapp Labs. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <span className="text-pink-500">♥</span> for the voice-first era.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;