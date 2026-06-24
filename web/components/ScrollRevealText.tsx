"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealTextProps {
  text: string;
}

export default function ScrollRevealText({ text }: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end center"],
  });

  const words = text.split(" ");

  return (
    <section ref={containerRef} className="relative h-[250vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-5xl leading-[1.2] font-medium md:text-7xl">
            {words.map((word, index) => {
              const start = index / words.length;
              const end = start + 1 / words.length;

              return (
                <Word
                  key={index}
                  word={word}
                  progress={scrollYProgress}
                  start={start}
                  end={end}
                />
              );
            })}
          </h2>
        </div>
      </div>
    </section>
  );
}

function Word({
  word,
  progress,
  start,
  end,
}: {
  word: string;
  progress: any;
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, end], [0.15, 1]);

  return (
    <span className="relative mr-3 inline-block">
      <span className="absolute text-white/10">{word}</span>

      <motion.span style={{ opacity }} className="relative text-white">
        {word}
      </motion.span>
    </span>
  );
}
