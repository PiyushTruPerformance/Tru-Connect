"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface CaseStudyCardProps {
  imageSrc: string;
  category: string;
  title: string;
  description: string;
  href: string;
}

export function CaseStudyCard({
  imageSrc,
  category,
  title,
  description,
  href,
}: CaseStudyCardProps) {
  return (
    <motion.div
      className="group relative flex flex-col border border-white/40 bg-black/80 overflow-hidden backdrop-blur-sm transition-all hover:bg-black/80 hover:border-white/40"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative h-64 w-full overflow-hidden border-b border-white/40">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/80 mix-blend-multiply" />
      </div>
      <div className="flex flex-1 flex-col justify-between p-8">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white">
            {category}
          </p>
          <h3 className="mt-4 text-2xl font-semibold text-white">{title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-white/50">
            {description}
          </p>
        </div>
        <div className="mt-8">
          <Link
            href={href}
            className="inline-flex items-center text-sm font-semibold text-white transition-colors hover:text-white"
          >
            Read case study
            <svg
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export function CaseStudySection() {
  const caseStudies = [
    {
      category: "Enterprise Software",
      title: "Global SaaS Platform Scales with MCP",
      description:
        "Learn how a leading enterprise software provider integrated our MCP servers to offer instant AI-powered data retrieval for 100,000+ users, achieving zero downtime.",
      imageSrc: "/case_study_enterprise_bw.png",
      href: "#",
    },
    {
      category: "Financial Technology",
      title: "Automating Compliance Workflows",
      description:
        "See how a major FinTech company securely connected Claude to their internal audit systems, reducing compliance report generation time by 80%.",
      imageSrc: "/case_study_ai_bw.png",
      href: "#",
    },
  ];

  return (
    <section className="border-b border-white/40 py-20 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.26em] text-white/50">
            Case Studies
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-white">
            See how top teams use MCP.
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {caseStudies.map((study, idx) => (
            <CaseStudyCard key={idx} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
}
