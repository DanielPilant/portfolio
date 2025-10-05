"use client";
import Image from "next/image";
import { time } from "console";
import { it } from "node:test";
import { title } from "process";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaCss3Alt,
  FaJava,
  FaPython,
  FaDatabase,
  FaGithub,
  FaMicrosoft,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaUsers,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiFramer,
  SiFlutter,
  SiDotnet,
  SiSqlite,
} from "react-icons/si";

// about info
const about = {
  title: "About me",
  description: "",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Daniel Pilant",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+972) 584216328",
    },
    {
      fieldName: "Email",
      fieldValue: "doubledan148@gmail.com",
    },
    {
      fieldName: "Education",
      fieldValue:
        "Currently studying BSc in Computer Science at JCT - jerusalem College of Technology",
    },
    {
      fieldName: "Languages",
      fieldValue: "English (Fluent), Hebrew (Native)",
    },
  ],
};

// Activities info
const activities = {
  icon: "/assets/resume/badge.svg",
  title: "Community & Leadership",
  description:
    "Beyond academics, I dedicate time to community leadership and mentorship. From co-founding DevLev, a student-led developer community at JCT, to teaching and guiding students through the national Perach program, these experiences reflect my passion for empowering others, sharing knowledge, and bridging academia with real-world opportunities.",
  items: [
    {
      institution: "Winner - hackathon 2024 at JCT",
      title: "3rd Place - Hackathon 2024",
      Description:
        "ResqDoc is an AI-assisted documentation platform built for United Hatzalah’s emergency teams. It enables first responders to automatically generate and manage medical reports in real time during rescue operations. The system focuses on speed, accuracy, and structured data collection under pressure, allowing paramedics to record vital information with minimal interaction.",
      duration: "2024",
      Image1: "/assets/images/Hackathon_1.jpg",
      Image2: "/assets/images/Hackathon_2.jpg",
      Image3: "/assets/images/Hackathon_3.jpg",
      Image4: "/assets/images/Hackathon_4.jpg",
    },
    {
      institution: "DevLev - JCT's Developer Student Club",
      title: "Co-Founder & Manager",
      Description:
        "DevLev is a student-led tech community I co-founded at the Jerusalem College of Technology. We bridge academia and industry through hands-on workshops, hack nights, and networking, giving students practical skills, real projects, and professional connections to grow as future software engineers.",
      duration: "2025 - Present",
      Image1: "/assets/images/DEVLEV.jpg",
      image2: "/assets/images/DEVLEVMATAN.jpg",
      Image3: "/assets/images/DEVLEVMEETUP1_2.jpg",
      Image4: "/assets/images/DEVLEVMEETUP1.jpg",
    },
    {
      institution: "Perach Tutoring Program",
      title: "Teacher & Tutor",
      Description:
        "As part of the national Perach program, I served as a mentor and teacher for school students, providing academic support and personal guidance. Through one-on-one and group sessions, I helped students strengthen their skills, build confidence, and succeed in their studies while serving as a positive role model.",
      duration: "2023 - 2025",
      Image1: "/assets/images/SCHOOLCER.jpg",
      image2: "/assets/images/SCHOOLCHACKATHON.jpg",
      Image3: "/assets/images/SCHOOLPROJECT1.jpg",
      Image4: "/assets/images/teacher.jpg",
    },
  ],
};

// education info
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Pursuing a BSc in Computer Science at JCT, building strong foundations in software engineering while expanding skills with modern technologies like Flutter and Dart.",
  items: [
    {
      institution: "Jerusalem College of Technology (JCT)",
      title: "BSc in Computer Science",
      duration: "2023 - Present",
    },
    {
      institution: "Udemy",
      title: "Flutter & Dart - The Complete Guide [2025 Edition]",
      duration: "2025 - present",
    },
  ],
};

// skills info
const skills = {
  title: "My skills",
  description:
    "Technologies and strengths I bring as a software engineer, developer, and community leader.",
  items: [
    // 🌐 Web & Frontend
    //{ icon: <FaHtml5 className="w-8 h-8" />, name: "HTML5" },
    //{ icon: <FaCss3Alt className="w-8 h-8" />, name: "CSS3" },
    //{ icon: <FaJs className="w-8 h-8" />, name: "JavaScript" },
    //{ icon: <SiTypescript className="w-8 h-8" />, name: "TypeScript" },
    //{ icon: <FaReact className="w-8 h-8" />, name: "React" },
    //{ icon: <SiNextdotjs className="w-8 h-8" />, name: "Next.js" },
    //{ icon: <SiTailwindcss className="w-8 h-8" />, name: "Tailwind CSS" },
    //{ icon: <SiFramer className="w-8 h-8" />, name: "Framer Motion" },

    // 📱 Mobile
    { icon: <SiFlutter className="w-8 h-8" />, name: "Flutter (Dart)" },

    // ⚙️ Backend & Desktop
    { icon: <SiDotnet className="w-8 h-8" />, name: ".NET 8 / WPF" },
    //{ icon: <FaNodeJs className="w-8 h-8" />, name: "Node.js" },

    // 🖥️ Programming Languages
    { icon: <FaJava className="w-8 h-8" />, name: "Java" },
    //{ icon: <FaPython className="w-8 h-8" />, name: "Python (basic)" },

    // 🗄️ Databases
    { icon: <FaDatabase className="w-8 h-8" />, name: "SQL" },
    { icon: <SiSqlite className="w-8 h-8" />, name: "SQLite (sqflite)" },

    // 🔧 Tools
    { icon: <FaGithub className="w-8 h-8" />, name: "Git & GitHub" },
    {
      icon: <FaMicrosoft className="w-8 h-8" />,
      name: "Visual Studio / VS Code",
    },
    { icon: <FaFigma className="w-8 h-8" />, name: "Figma" },

    // 🌟 Soft Skills
    {
      icon: <FaUsers className="w-8 h-8" />,
      name: "Community Leadership (DevLev)",
    },
    {
      icon: <FaChalkboardTeacher className="w-8 h-8" />,
      name: "Teaching (Perach Program)",
    },
    {
      icon: <FaLaptopCode className="w-8 h-8" />,
      name: "Clean Architecture & OOP",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";
import { Description } from "@radix-ui/react-dialog";

const Resume = () => {
  return (
    <motion.div className="min-h-[80vh] flex items-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs
          defaultValue="education"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full xl:max-w-[360] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* activities */}
            <TabsContent value="activities" className="mtmx-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <ScrollArea className="h-[690px]">
                  <h3 className="text-4xl font-bold">{activities.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {activities.description}
                  </p>
                  <ul className="flex flex-col gap-[30px]">
                    {activities.items.map((item, index) => {
                      const imgs = [
                        item.Image1,
                        item.image2,
                        item.Image3,
                        item.Image4,
                      ].filter(Boolean);

                      return (
                        <li
                          key={index}
                          className="group bg-[#232329] rounded-2xl p-4 xl:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                          <div className="flex flex-col xl:flex-row gap-6 items-stretch">
                            <div className="xl:basis-2/3 grid grid-cols-2 gap-3">
                              {imgs
                                .slice(0, 4)
                                .map((src: string, i: number) => (
                                  <div
                                    key={i}
                                    className="relative aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-white/10"
                                  >
                                    <Image
                                      src={src}
                                      alt={`${item.title} image ${i + 1}`}
                                      fill
                                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                      priority={index === 0 && i === 0}
                                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                                    />
                                  </div>
                                ))}
                            </div>

                            <div className="xl:basis-1/3 bg-[#1e1e23]/50 rounded-xl p-5 flex flex-col justify-between gap-4">
                              <div className="flex flex-col gap-2">
                                <span className="text-accent tracking-wide font-semibold">
                                  {item.duration}
                                </span>
                                <h3 className="text-2xl font-semibold text-white">
                                  {item.title}
                                </h3>

                                <div className="flex items-center gap-3 text-white/70">
                                  <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                                  <p>{item.institution}</p>
                                </div>
                              </div>

                              {item.Description && (
                                <p className="text-white/70 leading-relaxed">
                                  {item.Description}
                                </p>
                              )}
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="mtmx-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[460px] min-h-[60px] text-center lg:text-left">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="mtmx-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.items.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="mtmx-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1  gap-y-10 max-w-[600px] mx-auto xl:mx-0">
                  {about.info.map((info, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">
                          {info.fieldName}:{" "}
                        </span>
                        <span className="text-xl">{info.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
