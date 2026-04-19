"use client";

import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/components/ProjectCard";

// ─── Project Data ──────────────────────────────────────────────────────────────
// Each array maps to one tab. Add / remove entries freely — the UI adapts.

const personalProjects: Project[] = [
  {
    num: "01",
    category: "web / portfolio",
    title: "Portfolio Website",
    description:
      "This very site — a personal developer portfolio crafted with Next.js 15, Tailwind CSS v4, and Framer Motion. Features an animated landing screen, an interactive tabbed resume with skill icons, glassmorphic project cards, and a contact form, all optimised for performance and accessibility.",
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
  // TODO: Add more personal projects here
];

const academicProjects: Project[] = [
  {
    num: "01",
    category: "graphics / rendering",
    title: "Java Ray Tracing Engine",
    description:
      "A fully custom-built ray tracing engine that simulates physically-based lighting: reflections, refractions, and soft shadows. Implements Phong shading, bounding-volume hierarchies for acceleration, and multi-sample anti-aliasing — all from first principles in pure Java.",
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
  {
    num: "02",
    category: "desktop / .NET",
    title: "MissionForce",
    description:
      "A volunteer management system built with C# and .NET 8 WPF. Features a Material Design UI, real-time volunteer tracking, mission assignment workflows, and an embedded WebView2 component. Designed with a layered DAL / BL / PL architecture to streamline coordination for non-profits.",
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
  // TODO: Add more academic projects here
];

const courseProjects: Project[] = [
  {
    num: "01",
    category: "HTML & CSS / front-end",
    title: "Streamly",
    description:
      "A front-end movie browsing website built entirely with HTML5 and CSS3 — the first project in a 7-part Full-Stack Development course. Features a Netflix-style layout with genre category pages, movie cards with hover effects, YouTube trailer embeds via iframe, and a fully responsive design built on Flexbox and CSS Grid.",
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
      "A multi-game web platform built with pure HTML5, CSS3, and Vanilla JavaScript — the second project in a 7-part Full-Stack course. Features a login/auth screen, a personalised game lobby with per-user leaderboards, a modernised Snake game with custom graphics and sound, and a full two-player PVP Chess implementation with complete piece-movement rules, undo history, move logging, and a competitive scoring system. All state persisted via localStorage.",
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
      "A complete Single Page Application built from scratch with Vanilla JS, HTML5, and CSS3 — no libraries or frameworks. Simulates an entire client-server ecosystem in the browser: custom hash-based SPA router, FAJAX (a hand-rolled XHR client with Bearer token injection and auto-retry), a network layer with artificial latency and 20% packet-drop rate, a dispatcher routing to separate Auth and App servers, and localStorage-backed user and task databases. Full CRUD task management with session auth.",
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
      "A React 19 rich-text editor built as project 4 of 7 in an academic Full-Stack program. Features user authentication, multi-document tab management, a custom virtual keyboard with English, Hebrew, and Emoji layouts, text formatting controls (font family, size, colour), undo history, find & replace, and full file management (new, save, save-as, open, delete). All user data and documents persisted in localStorage. Built with Vite and CSS Modules for component-scoped styling.",
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
  // TODO: Add more Full Stack Course projects here (project 5, 6, 7)
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

// Parent container staggers children (ProjectCard uses cardVariants as its child variant)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

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
  return (
    <div className="min-h-[80vh] py-12 xl:py-16">
      <div className="container mx-auto">

        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10"
        >
          <h2 className="text-white mb-3">
            My{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00c3ff 0%, #9359ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Projects
            </span>
          </h2>
          <p className="text-white/50 text-sm xl:text-base max-w-xl leading-relaxed">
            A curated showcase spanning personal experiments, academic research,
            and structured full-stack development.
          </p>
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
              ) : (
                // key={cat.value} re-mounts motion.div on tab change → re-triggers stagger
                <motion.div
                  key={cat.value}
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
