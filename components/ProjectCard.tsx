"use client";

import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export interface Project {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: { name: string }[];
  image: string;
  live: string;
  github: string;
}

// Consumed by the parent stagger container in work/page.tsx
export const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export function ProjectCard({ project }: { project: Project }) {
  const hasImage = !!project.image;
  const hasLinks = project.live || project.github;

  return (
    <motion.div
      variants={cardVariants}
      className={[
        "group relative flex gap-6",
        hasImage ? "flex-col xl:flex-row" : "flex-col",
        // Glassmorphism base
        "bg-white/[0.03] backdrop-blur-sm",
        "border border-white/[0.08] rounded-2xl",
        "p-6 xl:p-8",
        // Hover lift + glow
        "hover:bg-white/[0.06] hover:border-accent/25",
        "hover:shadow-[0_8px_40px_rgba(0,195,255,0.07)]",
        "hover:scale-[1.005]",
        "transition-all duration-300",
      ].join(" ")}
    >
      {/* ── Left: content column ─────────────────────────────── */}
      <div
        className={`flex flex-col gap-5 ${hasImage ? "xl:w-[55%]" : "w-full"}`}
      >
        {/* Number + category chip */}
        <div className="flex items-center gap-4">
          <span
            className="text-5xl xl:text-6xl font-extrabold leading-none select-none"
            style={{
              background: "linear-gradient(135deg, #00c3ff 0%, #9359ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {project.num}
          </span>
          <span className="text-[10px] xl:text-xs uppercase tracking-[0.14em] text-accent/80 border border-accent/25 rounded-full px-3 py-1 bg-accent/[0.07] font-semibold">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl xl:text-2xl font-bold text-white/90 group-hover:text-accent transition-colors duration-300 leading-snug">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-white/50 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tech stack pills */}
        {project.stack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item, i) => (
              <span
                key={i}
                className="text-[11px] px-3 py-1 rounded-full bg-white/[0.05] text-white/55 border border-white/[0.07] font-mono tracking-tight"
              >
                {item.name}
              </span>
            ))}
          </div>
        )}

        {/* Accent gradient divider */}
        <div className="h-px bg-gradient-to-r from-accent/20 via-accent/10 to-transparent" />

        {/* Action links */}
        {hasLinks && (
          <TooltipProvider delayDuration={200}>
            <div className="flex items-center gap-3 flex-wrap">
              {project.live && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-white/60 hover:text-accent border border-white/10 hover:border-accent/40 rounded-full px-4 py-2 bg-white/[0.04] hover:bg-accent/[0.08] transition-all duration-300 font-medium"
                    >
                      <BsArrowUpRight className="text-sm" />
                      Live Preview
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Open live site in new tab</TooltipContent>
                </Tooltip>
              )}
              {project.github && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-white/60 hover:text-accent border border-white/10 hover:border-accent/40 rounded-full px-4 py-2 bg-white/[0.04] hover:bg-accent/[0.08] transition-all duration-300 font-medium"
                    >
                      <BsGithub className="text-sm" />
                      GitHub
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>View source code</TooltipContent>
                </Tooltip>
              )}
            </div>
          </TooltipProvider>
        )}
      </div>

      {/* ── Right: image column ───────────────────────────────── */}
      {hasImage && (
        <div className="xl:w-[45%] relative min-h-[200px] xl:min-h-[260px] rounded-xl overflow-hidden border border-white/[0.08]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
          />
          {/* Subtle vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/25 pointer-events-none" />
        </div>
      )}
    </motion.div>
  );
}
