"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaqAccordion } from "@/components/FaqAccordion";
import { StatisticsCounters } from "@/components/StatisticsCounters";
import { CaseStudySection } from "@/components/CaseStudyCard";
import ScrollRevealText from "@/components/ScrollRevealText";
import LogoMarquee from "@/components/LogoMarquee";
import HeroSection from "@/components/HeroSection";

const features = [
  {
    title: "Secure Authentication",
    description:
      "Authenticate users securely using OAuth and encrypted access tokens.",
    imageSrc: "/feature_secure_auth.png",
  },
  {
    title: "Real-Time Data Access",
    description: "Provide live access to your application's data.",
    imageSrc: "/feature_real_time_data.png",
  },
  {
    title: "AI Assistant Integration",
    description:
      "Connect seamlessly with Claude, ChatGPT, Cursor, and Windsurf.",
    imageSrc: "/feature_ai_integration.png",
  },
  {
    title: "Enterprise Security",
    description: "Role-based access, audit logs, and encrypted communication.",
    imageSrc: "/feature_enterprise_security.png",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "Free",
    description: "Basic tools, limited requests, community support.",
    cta: "Start Free",
  },
  {
    name: "Pro",
    price: "$19/month",
    description: "Unlimited tools, higher limits, priority support.",
    cta: "Upgrade",
  },
  {
    name: "Enterprise",
    price: "Custom Pricing",
    description: "SSO, dedicated support, custom integrations.",
    cta: "Contact Sales",
  },
];

const faq = [
  {
    question: "What is MCP?",
    answer:
      "MCP is an open protocol that enables AI assistants to connect with external tools and data.",
  },
  {
    question: "Which AI assistants are supported?",
    answer: "Claude, ChatGPT, Cursor, Windsurf, and any MCP-compatible client.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes. All requests are authenticated and encrypted.",
  },
  {
    question: "Do I need technical knowledge?",
    answer: "No. Most users can connect in a few minutes.",
  },
  {
    question: "Can I revoke access?",
    answer: "Yes. Access can be revoked at any time.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="bg-transparent text-white">
      {/* <section className="relative overflow-hidden border-b border-white/40 bg-black py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/[0.03] via-black to-black" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div
              className="space-y-8 relative z-10"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="inline-flex border border-white/40 bg-white/5 px-4 py-1.5 text-sm uppercase tracking-[0.24em] text-white/70">
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
                <Link
                  href="#get-started"
                  className="inline-flex items-center justify-center bg-white/90 px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-white/90"
                >
                  Get Started
                </Link>
                <Link
                  href="#documentation"
                  className="inline-flex items-center justify-center border border-white/40 bg-black/80 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-white/10"
                >
                  View Documentation
                </Link>
                <Link
                  href="#integration"
                  className="inline-flex items-center justify-center border border-white/40 bg-black/80 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-white/10"
                >
                  Connect with Claude
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="relative border border-white/20 bg-white/[0.02] p-10 backdrop-blur-sm"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.12 }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />

              <div className="relative z-10 flex flex-col space-y-12">
                <div className="flex w-full items-center justify-between gap-4">
                  <div className="flex h-14 w-28 items-center justify-center border border-white/30 bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                    <span className="text-sm font-semibold text-white">
                      Claude
                    </span>
                  </div>

                  <div className="relative flex-1">
                    <div className="absolute inset-0 flex items-center">
                      <div className="h-[1px] w-full bg-gradient-to-r from-white/10 via-white/50 to-white/10" />
                    </div>
                    <div className="relative mx-auto flex h-6 w-16 items-center justify-center border border-white/20 bg-black">
                      <span className="text-[10px] uppercase tracking-widest text-white/70">
                        MCP
                      </span>
                    </div>
                  </div>

                  <div className="flex h-14 w-28 items-center justify-center border border-white/30 bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                    <span className="text-sm font-semibold text-white">
                      Your App
                    </span>
                  </div>
                </div>

                <div className="border-l border-white/20 pl-6">
                  <p className="text-sm leading-relaxed text-white/60">
                    Claude sends requests to the MCP server, which securely
                    accesses your application data and returns AI-powered
                    responses in real time.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}
      <HeroSection />
      <ScrollRevealText text="The Model Context Protocol connects your private data directly to AI assistants. Seamlessly interact, retrieve, and automate workflows in real time without compromising security." />
      <LogoMarquee />
      <motion.section
        className="border-b border-white/40 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.12, delayChildren: 0.1 },
          },
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.p
            className="text-center text-sm uppercase tracking-[0.3em] text-white/50"
            variants={fadeUp}
          >
            Trusted by developers, analysts, marketers, and teams worldwide.
          </motion.p>
          <div className="mt-10 grid grid-cols-2 gap-4 text-center text-sm text-white/50 sm:grid-cols-4">
            {["MCP Labs", "Nimbus", "Flux", "Vertex"].map((logo) => (
              <motion.div
                key={logo}
                className=" border border-white/40 bg-white/5 p-5"
                variants={fadeUp}
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <StatisticsCounters />
      <section className="border-b border-white/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.95fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.26em] text-white/50">
                What is MCP?
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-white">
                Model Context Protocol for secure AI connections.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Model Context Protocol (MCP) is an open standard that allows AI
                assistants to securely connect with external applications and
                data sources.
              </p>
            </div>
            <div className="space-y-4 border border-white/40 bg-black/80 p-8 shadow-lg">
              <p className="text-white/70">With our MCP server, users can:</p>
              <ul className="space-y-3 text-white/90">
                <li>- Retrieve data instantly</li>
                <li>- Execute actions</li>
                <li>- Automate workflows</li>
                <li>- Access real-time information</li>
                <li>- Interact with your platform using natural language</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-white/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.26em] text-white/50">
                Key Features
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-white">
                Built for secure AI applications and fast integrations.
              </h2>
            </div>
            <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  className=" border border-white/40 bg-black/80 p-8 shadow-sm backdrop-blur flex flex-col"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                >
                  <div className="relative mb-6 h-40 w-full shrink-0">
                    <Image
                      src={feature.imageSrc}
                      alt={feature.title}
                      fill
                      className="object-contain mix-blend-screen opacity-90"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-white/50">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-white/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.26em] text-white/50">
                How it works
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-white">
                From connect to conversation in minutes.
              </h2>
              <div className="mt-8 space-y-6">
                {[
                  "Connect your account.",
                  "Authorize access through secure OAuth.",
                  "Use natural language inside Claude.",
                  "Receive real-time responses from your data.",
                ].map((step, index) => (
                  <motion.div
                    key={step}
                    className=" border border-white/40 bg-black/80 p-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                  >
                    <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                      Step {index + 1}
                    </p>
                    <p className="mt-3 text-lg text-white/90">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              className=" border border-white/40 bg-black/80 p-8 text-white/70 shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <p className="text-sm uppercase tracking-[0.26em] text-white/50">
                Example
              </p>
              <div className="mt-6 space-y-4 bg-black/80 p-6">
                <div>
                  <p className="text-sm font-semibold text-white">User:</p>
                  <p className="mt-2 text-white/70">
                    Show me all active projects.
                  </p>
                </div>
                <div className="pt-4">
                  <p className="text-sm font-semibold text-white">Claude:</p>
                  <p className="mt-2 text-white/70">
                    You currently have 14 active projects...
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="border-b border-white/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <motion.div
              className=" border border-white/40 bg-black/80 p-8 shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <p className="text-sm uppercase tracking-[0.26em] text-white/50">
                Supported Use Cases
              </p>
              <div className="mt-8 space-y-8">
                {[
                  {
                    heading: "Project Management",
                    bullets: [
                      "View projects",
                      "Create tasks",
                      "Update statuses",
                      "Generate reports",
                    ],
                  },
                  {
                    heading: "Analytics",
                    bullets: [
                      "Pull dashboards",
                      "Retrieve KPIs",
                      "Generate summaries",
                    ],
                  },
                  {
                    heading: "Customer Management",
                    bullets: [
                      "Search customers",
                      "Update records",
                      "Generate insights",
                    ],
                  },
                  {
                    heading: "Reporting",
                    bullets: [
                      "Build reports",
                      "Export data",
                      "Generate executive summaries",
                    ],
                  },
                ].map((caseItem) => (
                  <div key={caseItem.heading}>
                    <h3 className="text-xl font-semibold text-white">
                      {caseItem.heading}
                    </h3>
                    <ul className="mt-4 space-y-2 text-white/50">
                      {caseItem.bullets.map((item) => (
                        <li key={item}>- {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className=" border border-white/40 bg-black/80 p-8 shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <p className="text-sm uppercase tracking-[0.26em] text-white/50">
                MCP Tools
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "get_projects",
                    description: "Retrieve project information.",
                  },
                  {
                    title: "create_project",
                    description: "Create new projects.",
                  },
                  {
                    title: "get_reports",
                    description: "Retrieve reports and analytics.",
                  },
                  {
                    title: "update_project",
                    description: "Update project details.",
                  },
                  {
                    title: "search_records",
                    description: "Search across application data.",
                  },
                  {
                    title: "generate_summary",
                    description: "Generate AI-powered summaries.",
                  },
                ].map((tool) => (
                  <div
                    key={tool.title}
                    className=" border border-white/40 bg-black/80 p-5"
                  >
                    <h4 className="text-lg font-semibold text-white">
                      {tool.title}
                    </h4>
                    <p className="mt-2 text-white/50">{tool.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <CaseStudySection />
      <section className="border-b border-white/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <motion.div
              className=" border border-white/40 bg-black/80 p-8 shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <p className="text-sm uppercase tracking-[0.26em] text-white/50">
                Security First
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-white">
                Your data remains secure at every step.
              </h2>
              <div className="mt-8 space-y-4 text-white/70">
                <p>
                  OAuth Authentication, access tokens, encrypted communication,
                  permissions, and audit logging keep every request safe.
                </p>
                <ul className="space-y-3 text-white/50">
                  <li>- OAuth Authentication</li>
                  <li>- Access Tokens</li>
                  <li>- Encrypted Communication</li>
                  <li>- User Permission Controls</li>
                  <li>- Audit Logging</li>
                  <li>- Secure Infrastructure</li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              className=" border border-white/40 bg-black/80 p-8 shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <p className="text-sm uppercase tracking-[0.26em] text-white/50">
                Works With
              </p>
              <div className="mt-8 grid gap-3 text-white/90 sm:grid-cols-2">
                {[
                  "Anthropic Claude",
                  "OpenAI ChatGPT",
                  "Cursor Cursor",
                  "Visual Studio Code VS Code",
                  "Windsurf Windsurf",
                ].map((integration) => (
                  <div
                    key={integration}
                    className=" border border-white/40 bg-black/80 p-5"
                  >
                    {integration}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="border-b border-white/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-center">
            <p className="text-sm uppercase tracking-[0.26em] text-white/50">
              Pricing
            </p>
            <h2 className="text-4xl font-semibold text-white">
              Plans for every stage of growth.
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {pricing.map((tier) => (
                <motion.div
                  key={tier.name}
                  className=" border border-white/40 bg-black/80 p-8 shadow-lg"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                >
                  <p className="text-sm uppercase tracking-[0.25em] text-white/50">
                    {tier.name}
                  </p>
                  <p className="mt-6 text-5xl font-semibold tracking-tight text-white">
                    {tier.price}
                  </p>
                  <p className="mt-4 text-white/50">{tier.description}</p>
                  <button className="mt-8 inline-flex w-full items-center justify-center bg-white/90 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white/90">
                    {tier.cta}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="documentation" className="border-b border-white/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div
              className="space-y-8 text-white/70"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.12, delayChildren: 0.1 },
                },
              }}
            >
              <p className="text-sm uppercase tracking-[0.26em] text-white/50">
                Documentation Preview
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-white">
                Quick Start
              </h2>
              <div className="space-y-8">
                <div>
                  <p className="text-lg font-semibold text-white">Install</p>
                  <pre className="mt-3 overflow-x-auto border border-white/40 bg-black/80 p-5 text-sm text-white/90">
                    npm install
                  </pre>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">Connect</p>
                  <pre className="mt-3 overflow-x-auto border border-white/40 bg-black/80 p-5 text-sm text-white/90">{`{\n  "mcpServers": {\n    "your-server": {\n      "url": "https://your-domain.com/mcp"\n    }\n  }\n}`}</pre>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">
                    Authenticate
                  </p>
                  <p className="mt-3 text-white/70">
                    Login and authorize access.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className=" border border-white/40 bg-black/80 p-8 shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <p className="text-sm uppercase tracking-[0.26em] text-white/50">
                FAQ
              </p>
              <div className="mt-8">
                <FaqAccordion faqs={faq} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="border-b border-white/40 py-24 bg-black/40">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <p className="text-sm uppercase tracking-[0.26em] text-white">
              Stay Updated
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Subscribe to our developer newsletter
            </h2>
            <p className="mt-4 text-lg text-white/50">
              Get the latest updates on MCP, new integrations, and community
              tools delivered straight to your inbox.
            </p>
            <form
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full max-w-sm border border-white/40 bg-white/5 px-5 py-3 text-white placeholder-slate-500 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white/80"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
      <section id="get-started" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className=" border border-white/40 bg-black/80 p-10 text-center shadow-[0_0_120px_-40px_rgba(15,23,42,0.8)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <p className="text-sm uppercase tracking-[0.26em] text-white/50">
              Ready to Connect Your Data to AI?
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-white">
              Start using MCP today and unlock powerful AI-driven workflows.
            </h2>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#"
                className="inline-flex items-center justify-center bg-white/90 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white/90"
              >
                Get Started
              </Link>
              <Link
                href="#documentation"
                className="inline-flex items-center justify-center border border-white/40 bg-black/80 px-7 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-white/10"
              >
                View Documentation
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center border border-white/40 bg-black/80 px-7 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-white/10"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
