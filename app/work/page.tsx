"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ProjectCard, cardVariants } from "@/components/ProjectCard";
import type { Project } from "@/components/ProjectCard";
import {
  BsChevronDown,
  BsArrowUpRight,
  BsGithub,
  BsList,
  BsFillGridFill,
} from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// ─── Project Data ──────────────────────────────────────────────────────────────

const personalProjects: Project[] = [
  {
    num: "01",
    category: "web / portfolio",
    title: "Portfolio Website",
    description:
      "This site — built with Next.js 15 App Router, Tailwind CSS v4, and Framer Motion. Architecturally it's a statically-exported app with component-scoped design tokens, a live Matter.js physics simulation running on an HTML5 canvas layer with hit-test pass-through so underlying UI elements remain interactive, and CSS scrollbar-gutter stabilisation to prevent reflow when content overflows.",
    stack: [
      { name: "Next.js 15" },
      { name: "TypeScript" },
      { name: "Tailwind CSS v4" },
      { name: "Framer Motion" },
      { name: "Radix UI" },
    ],
    image: "",
    live: "",
    github: "https://github.com/DanielPilant",
  },
  {
    num: "02",
    category: "AI / browser automation / full-stack",
    title: "AI-Powered Browser Automation & QA Platform",
    description:
      "Built at Hackathon 2025: a natural-language browser automation platform where you describe a test scenario in plain English and watch a real Chromium instance execute it live at ~20 FPS. The core architectural challenge was orchestrating an async agent loop (OpenAI Agents SDK) that translates prompts into Playwright MCP tool calls, while streaming JPEG screenshots over WebSocket to a React dashboard with low enough latency to feel interactive. Test failures trigger a three-stage analysis pipeline — rule-based classifier → LLM explainer — that categorises errors and suggests fixes. Deployed across 13 Docker Compose services with full observability: Grafana, Prometheus, Loki, Tempo, and OpenTelemetry.",
    stack: [
      { name: "Python" },
      { name: "FastAPI" },
      { name: "OpenAI Agents SDK" },
      { name: "Playwright MCP" },
      { name: "React 19" },
      { name: "Docker Compose" },
      { name: "OpenTelemetry" },
      { name: "WebSocket" },
    ],
    image: "/assets/images/TestFlow/image.png",
    live: "",
    github: "https://github.com/DanielPilant/Hackathon_EX_1",
  },
];

const academicProjects: Project[] = [
  {
    num: "01",
    category: "full-stack / real-time / maps",
    course: "Software Engineering",
    title: "Live Trip",
    description:
      "A full-stack real-time crowd monitoring application. The central design challenge was composing multiple external APIs — MapLibre GL + MapTiler for rendering, OpenStreetMap's Overpass API for on-demand site polygon boundaries, WeatherAPI for conditions, and Supabase for auth + a PostgreSQL backend with Row Level Security — into a coherent, low-latency user experience. Data mutations flow through Next.js Server Actions with optimistic UI; Google OAuth is handled via Supabase Auth; polygons are fetched on-demand and cached client-side. Includes dual-mode geocoding, full RTL support (Hebrew, English, French), system-aware map themes, and E2E test coverage with Pytest + Selenium.",
    stack: [
      { name: "Next.js 16" },
      { name: "TypeScript" },
      { name: "Supabase" },
      { name: "PostgreSQL" },
      { name: "MapLibre GL" },
      { name: "Tailwind CSS" },
      { name: "Google OAuth" },
      { name: "WeatherAPI" },
    ],
    image: "/assets/images/liveTrip/live-trip.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "AI / microservices / desktop",
    course: "Windows Systems Engineering",
    title: "ShopMate AI Assistant",
    description:
      "A microservices-based shopping assistant that finds the cheapest single Israeli supermarket branch for a given cart. The interesting engineering problems: a hybrid search engine for fuzzy product matching, a custom SQL optimisation query that solves a 'cheapest full-coverage branch' problem across thousands of products and locations, and an LLM-as-a-Judge hallucination filter that validates AI-generated product matches before they're committed to the cart. Architected across three decoupled services — a LangGraph + Llama 3.1 AI Agent API, a Core & Database API (FastAPI + PostgreSQL), and a PySide6 desktop client following Micro-Frontend + MVP patterns — so each service can evolve and be tested independently.",
    stack: [
      { name: "Python" },
      { name: "LangGraph" },
      { name: "Llama 3.1" },
      { name: "RAG" },
      { name: "FastAPI" },
      { name: "PostgreSQL" },
      { name: "PySide6" },
      { name: "Microservices" },
      { name: "MVP Pattern" },
    ],
    image: "/assets/images/shoppy/micros.jpg",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "desktop / .NET",
    course: "Windows Systems Engineering — Mini Project",
    title: "MissionForce",
    description:
      "A volunteer coordination and mission management desktop application built with C# and .NET 8 WPF. The primary focus was a strict three-layer architecture (DAL / BL / PL) to isolate data access, business rules, and presentation — so the domain logic could be tested and evolved independently of the UI. Features a Material Design interface, real-time volunteer tracking, mission assignment workflows, and an embedded WebView2 panel.",
    stack: [
      { name: "C#" },
      { name: ".NET 8" },
      { name: "WPF" },
      { name: "Material Design" },
      { name: "WebView2" },
    ],
    image: "/assets/images/assets/minip_windows_1.png",
    live: "",
    github: "https://github.com/DanielPilant/dotNet5785_1426_2126",
  },
  {
    num: "04",
    category: "graphics / rendering",
    course: "Intro to Software Engineering — Mini Project",
    title: "Java Ray Tracing Engine",
    description:
      "A ray tracing renderer built entirely from first principles in Java — no graphics libraries, just linear algebra and physics. The core engineering challenge was performance: naïve ray tracing is O(n) per pixel for n scene objects, so I implemented a Bounding Volume Hierarchy (BVH) to bring intersection tests down to O(log n). The renderer supports Phong shading, reflections, refractions, soft shadows via area lights, and multi-sample anti-aliasing. A deep exercise in understanding how 3D graphics actually work at the mathematical level.",
    stack: [
      { name: "Java" },
      { name: "OOP Design Patterns" },
      { name: "Linear Algebra" },
      { name: "Physics Simulation" },
    ],
    image: "/assets/images/assets/GoodPhotoYET2.png",
    live: "",
    github: "",
  },
];

const courseProjects: Project[] = [
  {
    num: "01",
    category: "HTML & CSS / front-end",
    title: "Streamly",
    description:
      "Project 1 of 7 in a structured Full-Stack Development course: a Netflix-style movie browsing UI built purely with HTML5 and CSS3. The deliberate constraint was no JavaScript — the goal was mastering the layout fundamentals first: Flexbox, CSS Grid, responsive breakpoints, and semantic markup. Features genre category pages, movie cards with hover effects, YouTube trailer embeds, and a fully responsive design.",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Flexbox" },
      { name: "CSS Grid" },
    ],
    image: "/assets/images/FS_proj_1/1.png",
    live: "",
    github: "https://github.com/DanielPilant/Streamly",
  },
  {
    num: "02",
    category: "HTML, CSS & JavaScript / front-end",
    title: "Web Game Platform",
    description:
      "Project 2 of 7: a multi-game platform built with pure Vanilla JS (no frameworks), focused on DOM manipulation and client-side state management from scratch. Features per-user auth, personalised game lobbies, per-user leaderboards, a Snake clone with custom graphics and sound, and a full two-player Chess implementation with complete piece-movement validation, undo history, and move logging — all state managed in localStorage.",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Vanilla JS (ES6+)" },
      { name: "DOM Manipulation" },
      { name: "localStorage" },
    ],
    image: "/assets/images/FS_proj_2/2.png",
    live: "",
    github: "https://github.com/DanielPilant/second_proj",
  },
  {
    num: "03",
    category: "SPA / vanilla JS full-stack",
    title: "TaskMaster",
    description:
      "Project 3 of 7, intentionally designed to teach how web infrastructure works by re-building it from scratch. The most educational part: simulating an entire client-server ecosystem inside the browser — a custom hash-based SPA router, a hand-rolled XHR client ('FAJAX') with Bearer token injection and auto-retry, and a simulated network layer with artificial latency and a 20% packet-drop rate. A request dispatcher routes traffic to separate Auth and App servers backed by localStorage. Full CRUD task management with session auth. Gave me a deep appreciation for what modern frameworks actually abstract away.",
    stack: [
      { name: "Vanilla JS (ES6+)" },
      { name: "HTML5 Templates" },
      { name: "CSS3" },
      { name: "SPA Routing" },
      { name: "REST API Simulation" },
      { name: "localStorage" },
    ],
    image: "/assets/images/FS_proj_3/3.png",
    live: "",
    github: "https://github.com/DanielPilant/third_proij_scatch_2",
  },
  {
    num: "04",
    category: "React / front-end app",
    title: "Visual Text Editor",
    description:
      "Project 4 of 7 and my first React project, focused on learning component architecture and unidirectional state management. Features a full rich-text editing experience: multi-document tab management, a custom virtual keyboard (English, Hebrew, Emoji), text formatting controls, undo history, find & replace, and complete file management. Built with React 19, Vite, and CSS Modules for component-scoped styling; all state persisted in localStorage.",
    stack: [
      { name: "React 19" },
      { name: "Vite" },
      { name: "CSS Modules" },
      { name: "localStorage" },
    ],
    image: "/assets/images/FS_proj_4/4.png",
    live: "",
    github: "https://github.com/DanielPilant/project_4",
  },
];

// ─── Category configuration ────────────────────────────────────────────────────

const categories: {
  value: string;
  label: string;
  sublabel: string;
  projects: Project[];
}[] = [
  {
    value: "personal",
    label: "Personal",
    sublabel: "Self-initiated",
    projects: personalProjects,
  },
  {
    value: "academic",
    label: "Academic",
    sublabel: "University work",
    projects: academicProjects,
  },
  {
    value: "course",
    label: "Full Stack Course",
    sublabel: "Structured curriculum",
    projects: courseProjects,
  },
];

// ─── Animation variants ────────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

// ─── Compact row (accordion) ───────────────────────────────────────────────────

function CompactProjectRow({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const hasImage = !!project.image;
  const hasLinks = project.live || project.github;
  const PILL_PREVIEW = 3;

  return (
    <motion.div variants={cardVariants} className="overflow-hidden rounded-xl border border-white/[0.08]">
      {/* ── Always-visible row ── */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={[
          "w-full flex items-center gap-4 px-5 py-4 text-left",
          "bg-white/[0.03] hover:bg-white/[0.06]",
          open ? "border-b border-white/[0.08]" : "",
          "transition-colors duration-200 group",
        ].join(" ")}
      >
        {/* Gradient number */}
        <span
          className="text-2xl font-extrabold leading-none shrink-0 w-10 text-right"
          style={{
            background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {project.num}
        </span>

        {/* Title + category */}
        <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
          <span className="text-sm font-semibold text-white/85 group-hover:text-accent transition-colors duration-200 truncate leading-snug">
            {project.title}
          </span>
          <span className="text-[10px] uppercase tracking-[0.12em] text-accent/70 border border-accent/20 rounded-full px-2.5 py-0.5 bg-accent/[0.06] font-semibold self-start sm:self-auto shrink-0">
            {project.category}
          </span>
        </div>

        {/* Stack pill preview */}
        <div className="hidden md:flex items-center gap-1.5 shrink-0">
          {project.stack.slice(0, PILL_PREVIEW).map((item, i) => (
            <span
              key={i}
              className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/[0.05] text-white/45 border border-white/[0.06] font-mono"
            >
              {item.name}
            </span>
          ))}
          {project.stack.length > PILL_PREVIEW && (
            <span className="text-[10px] text-white/30 font-mono">
              +{project.stack.length - PILL_PREVIEW}
            </span>
          )}
        </div>

        {/* Chevron */}
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" as const }}
          className="shrink-0 text-white/30 group-hover:text-accent/60 transition-colors duration-200"
        >
          <BsChevronDown className="text-sm" />
        </motion.div>
      </button>

      {/* ── Expandable content ── */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" as const }}
            style={{ overflow: "hidden" }}
          >
            <div
              className={[
                "flex gap-6 p-5 xl:p-7 bg-white/[0.025]",
                hasImage ? "flex-col xl:flex-row" : "flex-col",
              ].join(" ")}
            >
              {/* Left: details */}
              <div className={`flex flex-col gap-4 ${hasImage ? "xl:w-[58%]" : "w-full"}`}>
                {/* Course label */}
                {project.course && (
                  <span className="text-[11px] text-white/35 font-medium tracking-wide">
                    {project.course}
                  </span>
                )}

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Full stack pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((item, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-3 py-1 rounded-full bg-white/[0.05] text-white/55 border border-white/[0.07] font-mono tracking-tight"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>

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
                              onClick={(e) => e.stopPropagation()}
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
                              onClick={(e) => e.stopPropagation()}
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

              {/* Right: image */}
              {hasImage && (
                <div className="xl:w-[42%] relative min-h-[180px] xl:min-h-[220px] rounded-xl overflow-hidden border border-white/[0.08]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/25 pointer-events-none" />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Empty state ───────────────────────────────────────────────────────────────

function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center py-24 gap-4 text-center"
    >
      <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-2xl select-none">
        🚧
      </div>
      <p className="text-white/30 text-sm tracking-wide">Projects coming soon</p>
    </motion.div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function Work() {
  const [viewMode, setViewMode] = useState<"compact" | "full">("compact");

  return (
    <div className="min-h-[80vh] py-12 xl:py-16">
      <div className="container mx-auto">

        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="mb-10 flex items-start justify-between gap-4 flex-wrap"
        >
          <div>
            <h2 className="text-white mb-3">
              My{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Projects
              </span>
            </h2>
            <p className="text-white/50 text-sm xl:text-base max-w-xl leading-relaxed">
              Systems I&apos;ve designed and built from the ground up — spanning AI
              agent architectures, microservices, real-time backends, and
              graphics engines. Click any project to explore the engineering
              decisions behind it.
            </p>
          </div>

          {/* View toggle */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-white/[0.04] border border-white/[0.07] self-start mt-1">
            <button
              onClick={() => setViewMode("compact")}
              title="Compact list"
              className={[
                "flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-all duration-200",
                viewMode === "compact"
                  ? "bg-accent/[0.15] text-accent border border-accent/30 shadow-[0_0_12px_rgba(0,195,255,0.12)]"
                  : "text-white/40 hover:text-white/70",
              ].join(" ")}
            >
              <BsList className="text-base" />
              <span className="hidden sm:inline">Compact</span>
            </button>
            <button
              onClick={() => setViewMode("full")}
              title="Full cards"
              className={[
                "flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-all duration-200",
                viewMode === "full"
                  ? "bg-accent/[0.15] text-accent border border-accent/30 shadow-[0_0_12px_rgba(0,195,255,0.12)]"
                  : "text-white/40 hover:text-white/70",
              ].join(" ")}
            >
              <BsFillGridFill className="text-sm" />
              <span className="hidden sm:inline">Full Cards</span>
            </button>
          </div>
        </motion.div>

        {/* Tabs */}
        <Tabs defaultValue="personal" className="w-full">

          {/* Tab triggers */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <TabsList className="grid grid-cols-3 gap-2 xl:gap-3 bg-transparent h-auto p-0 mb-8 xl:mb-10 w-full">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.value}
                  value={cat.value}
                  className="flex-col gap-0.5 py-3 xl:py-4 px-2 xl:px-5 h-auto
                    whitespace-normal text-center rounded-xl
                    border border-white/[0.08] bg-white/[0.03]
                    text-white/50 hover:text-white/80 hover:bg-white/[0.07] hover:border-white/20
                    data-[state=active]:border-accent/50
                    data-[state=active]:shadow-[0_0_24px_rgba(0,195,255,0.15)]
                    transition-all duration-300"
                >
                  <span className="text-[13px] xl:text-sm font-semibold block leading-tight">
                    {cat.label}
                  </span>
                  <span className="text-[10px] opacity-60 font-normal leading-tight hidden xl:block">
                    {cat.sublabel}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </motion.div>

          {/* Tab content panels */}
          {categories.map((cat) => (
            <TabsContent key={cat.value} value={cat.value} className="mt-0">
              {cat.projects.length === 0 ? (
                <EmptyState />
              ) : viewMode === "compact" ? (
                <motion.div
                  key={`${cat.value}-compact`}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col gap-2"
                >
                  {cat.projects.map((project, idx) => (
                    <CompactProjectRow key={idx} project={project} />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key={`${cat.value}-full`}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col gap-5 xl:gap-6"
                >
                  {cat.projects.map((project, idx) => (
                    <ProjectCard key={idx} project={project} />
                  ))}
                </motion.div>
              )}
            </TabsContent>
          ))}

        </Tabs>
      </div>
    </div>
  );
}
