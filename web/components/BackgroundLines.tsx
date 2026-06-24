"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const lines = Array.from({ length: 3 }, (_, index) => index);

export function BackgroundLines() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="pointer-events-none fixed inset-0 z-0 flex justify-center overflow-hidden">
      <div className="flex w-full max-w-7xl justify-between px-4 sm:px-6 lg:px-8">
        {lines.map((index) => {
          // Different speed for each line
          const y = useTransform(
            scrollYProgress,
            [0, 1],
            [0, (index % 2 === 0 ? 1 : -1) * (120 + index * 40)],
          );

          return (
            <motion.div
              key={index}
              className="h-[200vh] w-px bg-white/20 origin-top"
              style={{ y }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: index * 0.12,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
