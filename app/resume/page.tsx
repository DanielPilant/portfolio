"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaFigma, FaJava, FaDatabase, FaGithub,
  FaChalkboardTeacher, FaLaptopCode, FaUsers,
  FaPython, FaReact, FaBrain, FaRobot, FaSitemap,
} from "react-icons/fa";
import {
  SiTailwindcss, SiTypescript, SiFlutter,
  SiDotnet, SiSqlite, SiSharp, SiCplusplus,
  SiFastapi, SiPostgresql, SiNotion, SiLangchain,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

// ─── Data ──────────────────────────────────────────────────────────────────────

const about = {
  title: "About me",
  description:
    "3rd-year Software Engineering student at JCT (GPA: 85) with hands-on experience building production-grade systems — spanning full-stack web apps, AI agent pipelines, and desktop applications. Fast learner who picks up new stacks quickly and writes clean, well-structured code.",
  info: [
    { fieldName: "Name",       fieldValue: "Daniel Pilant" },
    { fieldName: "Phone",      fieldValue: "058-4216328",              href: "tel:0584216328" },
    { fieldName: "Email",      fieldValue: "doubledan148@gmail.com",   href: "mailto:doubledan148@gmail.com" },
    { fieldName: "LinkedIn",   fieldValue: "linkedin.com/in/danielpilant", href: "https://www.linkedin.com/in/danielpilant?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { fieldName: "GitHub",     fieldValue: "github.com/DanielPilant",  href: "https://github.com/DanielPilant" },
    { fieldName: "Education",  fieldValue: "B.Sc. Software Engineering – JCT (2022 – Present)" },
    { fieldName: "Languages",  fieldValue: "Hebrew (Native) · English (Full Professional)" },
  ],
};

const activities = {
  title: "Community & Leadership",
  description:
    "Beyond academics, I invest in community leadership and mentorship — co-founding DevLev, a student-led developer community at JCT, coordinating multi-institutional educational programs as a Perach Project Coordinator, and teaching programming to young students.",
  items: [
    {
      institution: "Perach Scholar Program",
      title: "Project Program Coordinator",
      description:
        "Overseeing educational mentorship programs across multiple institutions including The Israel Museum, Infinity Project, and Code Plus — coordinating volunteers, planning curricula, and bridging students with real-world learning opportunities.",
      duration: "2025 – Present",
      images: [],
    },
    {
      institution: "DevLev – JCT Developer Student Club",
      title: "Co-Founder & Manager",
      description:
        "A student-led developer community I co-founded at JCT to bridge academia and industry — running hands-on workshops, hack nights, and networking events that connect students with real-world engineering.",
      duration: "2025 – 2026",
      images: ["/assets/images/DEVLEV.jpg", "/assets/images/DEVLEVMATAN.jpg", "/assets/images/DEVLEVMEETUP1_2.jpg", "/assets/images/DEVLEVMEETUP1.jpg"],
    },
    {
      institution: "JCT – Hackathon 2024",
      title: "3rd Place – Hackathon 2024",
      description:
        "ResqDoc: an AI-assisted documentation platform for United Hatzalah's emergency teams. Enables first responders to generate and manage medical reports in real time during rescue operations.",
      duration: "2024",
      images: ["/assets/images/Hackathon_1.jpg", "/assets/images/Hackathon_2.jpg", "/assets/images/Hackathon_3.jpg", "/assets/images/Hackathon_4.jpg"],
    },
    {
      institution: "Perach Scholar Program",
      title: "Programming Teacher",
      description:
        "Taught programming (Scratch, Arduino) and basic electronics to 5th–6th graders, designing hands-on lessons that made technology tangible and exciting for young learners.",
      duration: "2023 – 2025",
      images: ["/assets/images/SCHOOLCER.jpg", "/assets/images/SCHOOLCHACKATHON.jpg", "/assets/images/SCHOOLPROJECT1.jpg", "/assets/images/teacher.jpg"],
    },
  ],
};

const education = {
  title: "My education",
  description:
    "Pursuing a B.Sc. in Software Engineering at JCT (GPA: 85), with coursework spanning software architecture, AI systems, operating systems, databases, and full-stack development.",
  items: [
    {
      institution: "Jerusalem College of Technology (JCT)",
      title: "B.Sc. in Software Engineering",
      duration: "2022 – Present",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Languages, frameworks, and tools I reach for across full-stack web, AI pipelines, desktop apps, and infrastructure.",
  items: [
    // Languages
    { icon: <FaPython className="w-7 h-7" />,       name: "Python" },
    { icon: <SiTypescript className="w-7 h-7" />,   name: "TypeScript / JS" },
    { icon: <SiSharp className="w-7 h-7" />,        name: "C#" },
    { icon: <SiCplusplus className="w-7 h-7" />,    name: "C++" },
    { icon: <FaJava className="w-7 h-7" />,         name: "Java" },
    { icon: <FaDatabase className="w-7 h-7" />,     name: "SQL" },
    // AI
    { icon: <FaBrain className="w-7 h-7" />,        name: "RAG / LangChain" },
    { icon: <SiLangchain className="w-7 h-7" />,    name: "LangGraph" },
    { icon: <FaRobot className="w-7 h-7" />,        name: "AI Agents / MCP" },
    // Web
    { icon: <FaReact className="w-7 h-7" />,        name: "React / Next.js" },
    { icon: <SiTailwindcss className="w-7 h-7" />,  name: "Tailwind CSS" },
    { icon: <SiFastapi className="w-7 h-7" />,      name: "FastAPI" },
    // Mobile & Desktop
    { icon: <SiFlutter className="w-7 h-7" />,      name: "Flutter (Dart)" },
    { icon: <SiDotnet className="w-7 h-7" />,       name: ".NET / WPF" },
    // Databases
    { icon: <SiPostgresql className="w-7 h-7" />,   name: "PostgreSQL" },
    { icon: <SiSqlite className="w-7 h-7" />,       name: "SQLite" },
    // Architecture
    { icon: <FaSitemap className="w-7 h-7" />,      name: "Microservices / MFE" },
    { icon: <FaLaptopCode className="w-7 h-7" />,   name: "SOLID / SoC" },
    // Tools
    { icon: <FaGithub className="w-7 h-7" />,       name: "Git & GitHub" },
    { icon: <SiNotion className="w-7 h-7" />,       name: "Notion" },
    { icon: <FaFigma className="w-7 h-7" />,        name: "Figma" },
    // Soft skills
    { icon: <FaUsers className="w-7 h-7" />,            name: "Leadership" },
    { icon: <FaChalkboardTeacher className="w-7 h-7" />, name: "Mentorship" },
  ],
};

// ─── Animation variants ────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.07, ease: "easeOut" as const },
  }),
};

const skillsContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
};

const skillItem = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" as const } },
};

// ─── Shared section header ─────────────────────────────────────────────────────

function SectionHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col gap-2 mb-8">
      <h3 className="text-3xl xl:text-4xl font-bold text-white">{title}</h3>
      <p className="text-white/50 text-sm leading-relaxed max-w-[540px] mx-auto xl:mx-0">
        {description}
      </p>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function Resume() {
  return (
    <div className="min-h-[80vh] py-12 xl:py-20">
      <div className="container mx-auto">
        <Tabs
          defaultValue="education"
          className="flex flex-col xl:flex-row gap-10 xl:gap-16"
        >
          {/* ── Sidebar tab list ──────────────────────────────────── */}
          <TabsList className="flex flex-col w-full xl:w-[200px] shrink-0 mx-auto xl:mx-0 gap-2 h-auto bg-transparent p-0">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* ── Content area ──────────────────────────────────────── */}
          <div className="flex-1 min-h-[60vh] text-center xl:text-left">

            {/* Education ─────────────────────────────────────────── */}
            <TabsContent value="education" className="mt-0">
              <motion.div
                initial="hidden"
                animate="visible"
                className="flex flex-col"
              >
                <SectionHeader title={education.title} description={education.description} />
                <ul className="flex flex-col gap-4">
                  {education.items.map((item, i) => (
                    <motion.li
                      key={i}
                      custom={i}
                      variants={fadeUp}
                      className="flex flex-col justify-center items-center xl:items-start gap-3 bg-white/[0.03] border border-white/[0.08] rounded-2xl px-8 py-7 hover:border-accent/25 hover:bg-white/[0.05] transition-all duration-300"
                    >
                      <span className="text-accent text-sm font-semibold tracking-wide">
                        {item.duration}
                      </span>
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        <p className="text-white/55 text-sm">{item.institution}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </TabsContent>

            {/* Skills ─────────────────────────────────────────────── */}
            <TabsContent value="skills" className="mt-0">
              <div className="flex flex-col">
                <SectionHeader title={skills.title} description={skills.description} />
                <TooltipProvider delayDuration={150}>
                  <motion.ul
                    variants={skillsContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-5 gap-3"
                  >
                    {skills.items.map((skill, i) => (
                      <motion.li key={i} variants={skillItem}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex flex-col items-center justify-center gap-2.5 p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-accent/30 hover:bg-accent/[0.05] hover:scale-[1.04] active:scale-[0.97] transition-all duration-300 cursor-default group aspect-square">
                              <span className="text-white/55 group-hover:text-accent transition-colors duration-300">
                                {skill.icon}
                              </span>
                              <span className="text-[10px] xl:text-xs text-white/45 group-hover:text-white/70 transition-colors text-center leading-tight font-medium">
                                {skill.name}
                              </span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>{skill.name}</TooltipContent>
                        </Tooltip>
                      </motion.li>
                    ))}
                  </motion.ul>
                </TooltipProvider>
              </div>
            </TabsContent>

            {/* Activities ─────────────────────────────────────────── */}
            <TabsContent value="activities" className="mt-0">
              <div className="flex flex-col">
                <SectionHeader title={activities.title} description={activities.description} />
                <ScrollArea className="h-[560px] xl:h-[640px] pr-2">
                  <ul className="flex flex-col gap-5 pb-2">
                    {activities.items.map((item, i) => (
                      <motion.li
                        key={i}
                        custom={i}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="group bg-white/[0.03] border border-white/[0.08] rounded-2xl p-4 xl:p-6 hover:border-accent/20 hover:bg-white/[0.05] transition-all duration-300"
                      >
                        <div className="flex flex-col xl:flex-row gap-5 items-stretch">
                          {/* 2×2 image grid — hidden when no images available */}
                          {item.images.length > 0 && (
                            <div className="xl:basis-[55%] grid grid-cols-2 gap-2.5">
                              {item.images.slice(0, 4).map((src, j) => (
                                <div
                                  key={j}
                                  className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/[0.07]"
                                >
                                  <Image
                                    src={src}
                                    alt={`${item.title} ${j + 1}`}
                                    fill
                                    sizes="(max-width: 640px) 50vw, (max-width: 1280px) 25vw, 20vw"
                                    priority={i === 0 && j === 0}
                                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                                  />
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Info panel — full width when there are no images */}
                          <div className={`${item.images.length > 0 ? "xl:basis-[45%]" : "w-full"} bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 flex flex-col justify-between gap-4 text-left`}>
                            <div className="flex flex-col gap-2">
                              <span className="text-xs font-semibold tracking-widest text-accent/80 uppercase">
                                {item.duration}
                              </span>
                              <h3 className="text-lg xl:text-xl font-semibold text-white leading-snug">
                                {item.title}
                              </h3>
                              <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                <p className="text-white/50 text-xs">{item.institution}</p>
                              </div>
                            </div>
                            <p className="text-white/50 text-sm leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* About ──────────────────────────────────────────────── */}
            <TabsContent value="about" className="mt-0">
              <motion.div
                initial="hidden"
                animate="visible"
                className="flex flex-col"
              >
                <SectionHeader title={about.title} description={about.description} />
                <ul className="flex flex-col gap-4 max-w-[560px] mx-auto xl:mx-0">
                  {about.info.map((item, i) => (
                    <motion.li
                      key={i}
                      custom={i}
                      variants={fadeUp}
                      className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-3 border-b border-white/[0.06] last:border-0"
                    >
                      <span className="text-xs uppercase tracking-widest text-white/35 font-semibold sm:w-24 shrink-0">
                        {item.fieldName}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-sm text-white/75 hover:text-accent transition-colors duration-200 truncate"
                        >
                          {item.fieldValue}
                        </a>
                      ) : (
                        <span className="text-sm text-white/75">{item.fieldValue}</span>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </div>
  );
}
