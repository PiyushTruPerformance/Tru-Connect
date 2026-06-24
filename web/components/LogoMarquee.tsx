"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Bot,
  Database,
  Shield,
  Workflow,
  BarChart3,
  Sparkles,
  Cpu,
} from "lucide-react";

const items = [
  { name: "CLAUDE", icon: Brain },
  { name: "CHATGPT", icon: Sparkles },
  { name: "MCP", icon: Workflow },
  { name: "SUPABASE", icon: Database },
  { name: "FASTAPI", icon: Cpu },
  { name: "SECURITY", icon: Shield },
  { name: "AI AGENTS", icon: Bot },
  { name: "ANALYTICS", icon: BarChart3 },
];

export default function LogoMarquee() {
  const duplicatedItems = [...items, ...items];

  return (
    <section className="relative overflow-hidden border-y border-white/40  mb-12 bg-black py-8">
      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-black to-transparent" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-black to-transparent" />

      <motion.div
        className="flex w-max gap-14"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={index} className="flex shrink-0 items-center gap-4">
              <Icon size={22} className="text-white/80" strokeWidth={1.75} />

              <span className="text-sm font-medium tracking-[0.2em] text-white uppercase md:text-base">
                {item.name}
              </span>

              <span className="text-white/20 text-xl">•</span>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
