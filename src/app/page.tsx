"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  GitBranch,
  Link,
  Mail,
  Sparkles,
  Briefcase,
  Code2,
} from "lucide-react";

import { FadeInUp } from "@/components/motion/FadeInUp";
import { RotatingText } from "@/components/motion/RotatingText";
import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/ui/Section";
import { experience, projects, skills } from "@/lib/data";

export default function Home() {
  return (
    <div className="relative flex-1">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/10 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 backdrop-blur-md">
              <Sparkles className="h-5 w-5 text-cyan-300" />
            </span>
            <span className="text-sm font-semibold tracking-wide text-white/90">
              Rasikumar Nishantha
            </span>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-white/70 sm:flex">
            <a className="hover:text-white" href="#projects">
              Projects
            </a>
            <a className="hover:text-white" href="#about">
              About
            </a>
            <a className="hover:text-white" href="#skills">
              Skills
            </a>
            <a className="hover:text-white" href="#experience">
              Experience
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6">
        {/* Hero */}
        <section className="relative py-20 sm:py-28">
          <div className="absolute inset-0 -z-10" />

          <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
            {/* Left: copy */}
            <div>
              <FadeInUp>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/70 backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.55)]" />
                  Dark • Glass • Motion
                </div>
              </FadeInUp>

              <FadeInUp delay={0.06}>
                <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                  Rasikumar Nishantha
                  <span className="text-glow block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    <RotatingText
                      items={[
                        "Computer Science Undergraduate",
                        "Full-Stack Developer / Software Engineer",
                        "Data Science Enthusiast",
                      ]}
                    />
                  </span>
                </h1>
              </FadeInUp>

              <FadeInUp delay={0.18}>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a
                    href="#projects"
                    className="neon-ring inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 text-sm font-semibold text-black transition-transform hover:scale-[1.02] active:scale-[0.99]"
                  >
                    View My Work <ArrowRight className="h-4 w-4" />
                  </a>

                  <div className="flex items-center gap-3 text-white/70">
                    <a
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-transform hover:scale-[1.04]"
                      href="https://github.com/NishaMax"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                    >
                      <GitBranch className="h-5 w-5" />
                    </a>
                    <a
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-transform hover:scale-[1.04]"
                      href="#"
                      aria-label="LinkedIn"
                    >
                      <Link className="h-5 w-5" />
                    </a>
                    <a
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-transform hover:scale-[1.04]"
                      href="#contact"
                      aria-label="Contact"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.22}>
                <div className="mt-12 grid gap-4 sm:grid-cols-3">
                  {[
                    {
                      label: "Focus",
                      value: "Full-stack + AI",
                    },
                    {
                      label: "Style",
                      value: "Glassmorphism",
                    },
                    {
                      label: "Motion",
                      value: "Framer Motion",
                    },
                  ].map((item) => (
                    <GlassCard key={item.label} className="p-5">
                      <p className="text-xs font-medium tracking-widest text-white/50">
                        {item.label.toUpperCase()}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-white/90">
                        {item.value}
                      </p>
                    </GlassCard>
                  ))}
                </div>
              </FadeInUp>
            </div>

            {/* Right: image */}
            <FadeInUp
              delay={0.12}
              className="mx-auto w-full max-w-sm lg:max-w-none"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
                <Image
                  src="/images/my.jpg"
                  alt="Rasikumar Nishantha"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 420px, 80vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <p className="mt-4 text-center text-xs text-white/50">
                Replace{" "}
                <span className="font-mono">public/images/my.jpg</span> with your
                photo.
              </p>
            </FadeInUp>
          </div>
        </section>

        <Section id="about" eyebrow="A bit more" title="About me">
          <FadeInUp>
            <GlassCard className="p-6 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-4 text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                  <p>
                    I’m a Computer Science undergraduate and Full-Stack AI Developer
                    focused on building production-grade Generative AI applications
                    and scalable backend systems.
                  </p>
                  <p>
                    I bridge Data Science and Software Engineering—using Python, SQL,
                    and TypeScript to design end-to-end RAG pipelines with LangChain
                    and ChromaDB.
                  </p>
                  <p>
                    I’ve shipped complete, containerized products across the stack,
                    from real-time monitoring systems (Lanka Watch) to intelligent,
                    agent-driven platforms (CareerVerse), applying clean engineering
                    practices and Agile delivery.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                  <p className="text-xs font-medium tracking-widest text-white/50">
                    HIGHLIGHTS
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-white/70">
                    <li>• Production-grade GenAI apps</li>
                    <li>• RAG pipelines (LangChain + ChromaDB)</li>
                    <li>• Scalable APIs & backend systems</li>
                    <li>• Full-stack, containerized delivery</li>
                    <li>• Clean architecture + Agile</li>
                  </ul>
                </div>
              </div>
            </GlassCard>
          </FadeInUp>
        </Section>

        {/* Projects */}
        <Section id="projects" eyebrow="Selected work" title="Projects">
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((p, idx) => (
              <FadeInUp key={p.name} delay={0.05 * idx}>
                <motion.div whileHover={{ scale: 1.015 }}>
                  <GlassCard className="h-full p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-lg font-semibold text-white">
                          {p.name}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-white/70">
                          {p.description}
                        </p>
                      </div>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                        <Code2 className="h-5 w-5 text-cyan-300" />
                      </span>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 text-xs text-white/50">
                      More details coming soon.
                    </div>
                  </GlassCard>
                </motion.div>
              </FadeInUp>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" eyebrow="Toolbox" title="Skills">
          <FadeInUp>
            <GlassCard className="p-6">
              <div className="flex flex-wrap gap-3">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-gradient-to-r from-white/5 to-white/0 px-4 py-2 text-sm text-white/80 backdrop-blur-md"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm text-white/55">
                This list will expand—keeping the structure flexible for future
                additions.
              </p>
            </GlassCard>
          </FadeInUp>
        </Section>

        {/* Experience */}
        <Section id="experience" eyebrow="Leadership & community" title="Experience / Volunteering">
          <div className="grid gap-6 md:grid-cols-3">
            {experience.map((x, idx) => (
              <FadeInUp key={x.title} delay={0.05 * idx}>
                <GlassCard className="h-full p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      <Briefcase className="h-5 w-5 text-blue-300" />
                    </span>
                    <p className="text-sm font-semibold text-white">{x.title}</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/70">
                    {x.detail}
                  </p>
                </GlassCard>
              </FadeInUp>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" eyebrow="Let’s connect" title="Contact">
          <FadeInUp>
            <GlassCard className="p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">
                    Want to collaborate or chat?
                  </p>
                  <p className="mt-2 text-sm text-white/70">
                    Send a message, or find me on these platforms.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://github.com/NishaMax"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white/80 transition-transform hover:scale-[1.02]"
                  >
                    <GitBranch className="h-4 w-4" /> GitHub
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white/80 transition-transform hover:scale-[1.02]"
                  >
                    <Link className="h-4 w-4" /> LinkedIn
                  </a>
                </div>
              </div>
            </GlassCard>
          </FadeInUp>

          <div className="py-10 text-center text-xs text-white/45">
            © {new Date().getFullYear()} Rasikumar Nishantha. Built with Next.js.
          </div>
        </Section>
      </main>
    </div>
  );
}
