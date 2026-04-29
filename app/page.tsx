"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import { PhysicsCanvas } from "@/components/PhysicsCanvas";

// ─── Animation variants ────────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  const floorRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative overflow-x-hidden min-h-[calc(100vh-4rem)] xl:min-h-[calc(100vh-5rem)] flex flex-col justify-center py-10 xl:py-12">

      {/* Physics canvas — absolute overlay, pointer-events-none */}
      <PhysicsCanvas floorRef={floorRef} />

      <div className="relative z-10 container mx-auto flex flex-col gap-10 xl:gap-12">

        {/* ── Hero row ─────────────────────────────────────────────────────── */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-16">

          {/* Text column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center xl:items-start text-center xl:text-left order-2 xl:order-none xl:max-w-[55%]"
          >
            {/* Role badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-accent/80 border border-accent/20 rounded-full px-4 py-1.5 bg-accent/[0.06] font-semibold mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Software Developer
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={itemVariants} className="mb-5">
              Hello, I&apos;m <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Daniel Pilant
              </span>
            </motion.h1>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="max-w-[480px] mb-8 text-white/60 leading-relaxed"
            >
              Third-year Software Engineering student driven by a fascination
              with how complex systems operate behind the scenes. My focus lies
              in Backend development and System Design, constantly exploring how
              to architect scalable and efficient applications. I enjoy bridging
              the gap between high-level web development and low-level system
              mechanics. Seeking a backend or software engineering role to tackle
              hard architectural challenges and write robust code.
            </motion.p>

            {/* CTA row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 w-full xl:w-auto"
            >
              <Button
                asChild
                size="lg"
                className="uppercase tracking-widest text-xs font-semibold rounded-xl px-6 h-12 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 w-full sm:w-auto"
              >
                <a
                  href="/assets/resume/resume.pdf"
                  download="Daniel Pilant Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Download resume</span>
                  <FiDownload className="text-base" />
                </a>
              </Button>

              <div className="hidden sm:block w-px h-8 bg-white/[0.12]" />

              <Socials
                containerStyles="flex gap-3"
                iconStyles="w-10 h-10 border border-white/[0.1] rounded-xl flex justify-center items-center text-white/55 text-lg hover:text-accent hover:border-accent/40 hover:bg-accent/[0.07] hover:scale-110 active:scale-95 transition-all duration-200"
              />
            </motion.div>
          </motion.div>

          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
            className="order-1 xl:order-none mb-4 xl:mb-0"
          >
            <Photo />
          </motion.div>
        </div>

        {/* ── GitHub Activity strip ─────────────────────────────────────────── */}
        <motion.div
          ref={floorRef}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85, ease: "easeOut" as const }}
          className="flex flex-col gap-2"
        >
          <p className="text-[10px] uppercase tracking-[0.18em] text-white/25 font-semibold">
            GitHub Activity
          </p>
          <div className="rounded-xl overflow-hidden border border-white/[0.07]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://raw.githubusercontent.com/DanielPilant/DanielPilant/output/github-contribution-grid-snake-dark.svg"
              alt="GitHub contribution snake"
              className="w-full h-[80px] xl:h-[100px] object-cover object-center"
              style={{ filter: "hue-rotate(65deg) saturate(1.5) brightness(1.1)" }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
