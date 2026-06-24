import { motion } from "framer-motion";
import Image from "next/image";

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const floatingBox = {
  y: [0, -6, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const dataPulse = {
  x: [0, 120],
  opacity: [0.6, 1, 0.6],
  transition: {
    duration: 1.6,
    repeat: Infinity,
    ease: "linear",
  },
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/40 bg-black py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at top, rgba(255,255,255,0.03), rgba(0,0,0,0.75))",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            className="space-y-8 relative z-10"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <p className="inline-flex border border-white/40 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.24em] text-white/70">
              AI + MCP for modern SaaS
            </p>
            <div className="space-y-6">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                Connect Your Data to AI with Powerful MCP Tools
              </h1>
              <p className="max-w-2xl text-xl leading-9 text-white/70 sm:text-2xl">
                Allow Claude and other AI assistants to securely access your
                data, automate workflows, and perform actions through a fast,
                secure MCP server.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center bg-white/90 px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-white"
              >
                Get Started
              </a>
              <a
                href="#documentation"
                className="inline-flex items-center justify-center border border-white/40 bg-black/80 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-white/10"
              >
                View Documentation
              </a>
              <a
                href="#integration"
                className="inline-flex items-center justify-center border border-white/40 bg-black/80 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-white/10"
              >
                Connect with Claude
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/5 shadow-[0_0_80px_rgba(255,255,255,0.03)]"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          >
            <div
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
                backgroundSize: "16px 16px",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
