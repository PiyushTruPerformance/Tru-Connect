"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

interface StatItemProps {
  endValue: number;
  suffix: string;
  label: string;
}

function Counter({ endValue, suffix, label }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // ms
      const increment = endValue / (duration / 16); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          setCount(endValue);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, endValue]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-8 border border-white/40 bg-black/80 backdrop-blur-sm">
      <div className="flex items-baseline text-5xl font-semibold tracking-tight text-white">
        <span>{count}</span>
        <span className="text-4xl">{suffix}</span>
      </div>
      <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/50">{label}</p>
    </div>
  );
}

export function StatisticsCounters() {
  const stats = [
    { endValue: 10, suffix: "M+", label: "API Requests" },
    { endValue: 50, suffix: "+", label: "Integrations" },
    { endValue: 99, suffix: ".99%", label: "Uptime" },
    { endValue: 10, suffix: "k+", label: "Active Users" },
  ];

  return (
    <section className="border-b border-white/40 py-20 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Counter endValue={stat.endValue} suffix={stat.suffix} label={stat.label} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
