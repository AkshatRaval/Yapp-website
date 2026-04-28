"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useSensoryUI } from "@/components/ui/sensory-ui/config/provider";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { playSound } = useSensoryUI();

  const handleNavClick = () => {
    void playSound("navigation.tab");
    setIsOpen(false);
  };

  const handleMenuToggle = () => {
    void playSound(isOpen ? "overlay.close" : "overlay.open");
    setIsOpen(!isOpen);
  };

  const handleGetStarted = () => void playSound("notification.info");

  return (
    <div className="fixed top-0 w-full z-50">
      <header className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        {/* Desktop Nav Pills */}
        <ul className="hidden md:flex items-center gap-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-2 text-sm md:text-base text-white">
          <li>
            <a
              href="#hero"
              onClick={handleNavClick}
              className="hover:text-pink-400 transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#features"
              onClick={handleNavClick}
              className="hover:text-pink-400 transition"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={handleNavClick}
              className="hover:text-pink-400 transition"
            >
              About <span className="italic">Yapp</span>
            </a>
          </li>
          <li>
            <a
              href="#join"
              onClick={handleNavClick}
              className="hover:text-pink-400 transition"
            >
              Waitlist
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={handleNavClick}
              className="hover:text-pink-400 transition"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white p-2 bg-white/10 rounded-full border border-white/20"
          onClick={handleMenuToggle}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Right Actions */}
        <div className="flex items-center gap-4 text-white">
          {/* <a
            href="#"
            className="hidden sm:block text-sm md:text-base hover:text-pink-400 transition"
            onMouseEnter={handleLoginHover}
          >
            Login
          </a> */}

          <a
            href="#join"
            className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition"
            onClick={handleGetStarted}
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <>
          {/* Invisible overlay to catch outside clicks */}
          <div
            className="md:hidden fixed inset-0 -z-10 h-screen w-screen"
            onClick={() => setIsOpen(false)}
          />
          <div className="md:hidden absolute top-20 left-6 right-6 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 flex flex-col gap-4 text-white animate-in slide-in-from-top-5 duration-300">
            <a
              href="#"
              className="hover:text-pink-400 py-2 border-b border-white/5"
              onClick={handleNavClick}
            >
              Home
            </a>
            <a
              href="#features"
              className="hover:text-pink-400 py-2 border-b border-white/5"
              onClick={handleNavClick}
            >
              Features
            </a>
            <a
              href="#about"
              className="hover:text-pink-400 py-2 border-b border-white/5"
              onClick={handleNavClick}
            >
              About Yapp
            </a>
            <a
              href="#join"
              className="hover:text-pink-400 py-2"
              onClick={handleNavClick}
            >
              Waitlist
            </a>
            <a
              href="#contact"
              className="hover:text-pink-400 py-2"
              onClick={handleNavClick}
            >
              Contact
            </a>
            {/* <a
            href="#"
            className="sm:hidden text-pink-400 font-medium pt-2"
            onClick={handleNavClick}
          >
            Login
          </a> */}
          </div>
        </>
      )}
    </div>
  );
};

export default Navigation;
