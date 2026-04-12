"use client";

import React from "react";
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
                Computer Science Undergraduate &amp; Data Science Enthusiast
              </span>
            </h1>
          </FadeInUp>

          <FadeInUp delay={0.12}>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-white/70 sm:text-lg">
              I build end-to-end products that combine modern web engineering with
              applied AI—focused on clean UX, robust backends, and data-driven
              experimentation.
            </p>
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
        </section>

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
