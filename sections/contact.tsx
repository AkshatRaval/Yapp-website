"use client";

import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
// Import your db instance
import { db } from "@/lib/firebase"; 
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      source: formData.get("source"),
      message: formData.get("message"),
      createdAt: serverTimestamp(),
    };

    try {
      // "inquiries" is the name of your collection in Firestore
      await addDoc(collection(db, "inquiries"), data);
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Something went wrong. Check console.");
    } finally {
      setLoading(false);
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <div className="bg-background relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] opacity-60",
        )}
      />

      <div className="relative z-10 w-full max-w-lg rounded-[2rem] border border-white/10 bg-white/[0.02] p-10 backdrop-blur-2xl shadow-2xl mx-4">
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">Contact</h1>
          <p className="text-sm text-muted-foreground/60">
            {success ? "✅ Message sent successfully!" : "We'll get back to you shortly."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <input
              name="name"
              type="text"
              required
              placeholder="Name"
              className="w-full rounded-xl border border-white/5 bg-white/5 p-4 text-white placeholder:text-gray-600 focus:border-white/20 focus:bg-white/10 focus:outline-none transition-all"
            />
            
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="w-full rounded-xl border border-white/5 bg-white/5 p-4 text-white placeholder:text-gray-600 focus:border-white/20 focus:bg-white/10 focus:outline-none transition-all"
            />

            <div className="relative group">
              <select
                name="source"
                required
                defaultValue=""
                className="w-full rounded-xl border border-white/5 bg-white/5 p-4 text-white focus:border-white/20 focus:outline-none appearance-none cursor-pointer transition-all hover:bg-white/10"
              >
                <option value="" disabled className="bg-neutral-900 text-gray-500">How did you find us?</option>
                <option value="twitter" className="bg-neutral-950 text-white">Twitter / X</option>
                <option value="linkedin" className="bg-neutral-950 text-white">LinkedIn</option>
                <option value="google" className="bg-neutral-950 text-white">Google Search</option>
                <option value="other" className="bg-neutral-950 text-white">Other</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 group-hover:text-white transition-colors">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>

            <textarea
              name="message"
              placeholder="Your message..."
              rows={3}
              className="w-full rounded-xl border border-white/5 bg-white/5 p-4 text-white placeholder:text-gray-600 focus:border-white/20 focus:bg-white/10 focus:outline-none transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={cn(
              "w-full rounded-xl bg-white px-4 py-4 font-bold text-black transition-all shadow-lg active:scale-[0.99]",
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-neutral-200"
            )}
          >
            {loading ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;