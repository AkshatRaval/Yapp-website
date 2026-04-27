"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useSensoryUI } from "@/components/ui/sensory-ui/config/provider";
import { X } from "lucide-react";

export const WaitlistModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { playSound } = useSensoryUI();

  useEffect(() => {
    const checkHash = () => {
      setIsOpen(window.location.hash === "#join");
    };

    // Initial check
    checkHash();

    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  const closeModal = () => {
    window.location.hash = "";
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      source: "Waitlist Modal",
      createdAt: serverTimestamp(),
    };

    try {
      await addDoc(collection(db, "inquiries"), data);
      setSuccess(true);
      void playSound("notification.success");
      (e.target as HTMLFormElement).reset();
      
      // Auto close after success
      setTimeout(() => {
        setSuccess(false);
        closeModal();
      }, 2000);
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Something went wrong. Check console.");
      void playSound("notification.error");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div 
        className="absolute inset-0" 
        onClick={closeModal}
      />
      <div className="relative z-10 w-full max-w-md rounded-[2rem] border border-white/10 bg-black/80 p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors rounded-full hover:bg-white/10"
        >
          <X size={20} />
        </button>
        
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-2">
            Join Waitlist
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {success
              ? "✅ You're on the list!"
              : "Secure your username and get early access."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            required
            placeholder="Your Name"
            className="w-full rounded-xl border border-white/5 bg-white/5 p-4 text-white placeholder:text-gray-500 focus:border-white/20 focus:bg-white/10 focus:outline-none transition-all"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Your Email"
            className="w-full rounded-xl border border-white/5 bg-white/5 p-4 text-white placeholder:text-gray-500 focus:border-white/20 focus:bg-white/10 focus:outline-none transition-all"
          />
          <button
            type="submit"
            disabled={loading || success}
            className={cn(
              "w-full rounded-xl bg-white px-4 py-4 font-bold text-black transition-all shadow-lg active:scale-[0.99] mt-4",
              loading || success ? "opacity-50 cursor-not-allowed" : "hover:bg-neutral-200"
            )}
          >
            {loading ? "Joining..." : success ? "Joined!" : "Join the Waitlist"}
          </button>
        </form>
      </div>
    </div>
  );
};
