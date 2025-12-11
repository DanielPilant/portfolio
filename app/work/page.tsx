"use client";

import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const projects = [
  {
    num: "01",
    category: "graphics / rendering engine",
    title: "Java Ray Tracing Engine",
    description:
      "A fully custom-built ray tracing engine that simulates realistic lighting, reflections, refractions, and soft shadows. This project was driven by the goal of understanding the mathematical and physical principles behind computer graphics — building everything from scratch to master how light interacts with 3D geometry.",
    stack: [
      { name: "Java" },
      { name: "Object-Oriented Design" },
      { name: "Math & Physics Algorithms" },
    ],
    image: "/assets/images/assets/GoodPhotoYET2.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Desktop / .NET",
    title: "MissionForce",
    description:
      "MissionForce is a volunteer management system built with C# and .NET 8 (WPF). It enables organizations to manage volunteers, missions, and reports efficiently, featuring a layered architecture (DAL, BL, PL) and a modern Material Design interface powered by WebView2.",
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
];

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="flex flex-col xl:flex-row xl:gap-[30px] bg-[#232329]/60 items-center justify-center rounded-2xl p-6 xl:p-8 border border-white/10 shadow-sm">
      {/* Left: Text panel */}
      <div className="w-full xl:w-1/2 flex flex-col">
        <div className="bg-[#232329]/60 backdrop-blur-[2px] rounded-2xl p-6 xl:p-8 border border-white/10 shadow-sm">
          <div className="text-7xl xl:text-8xl leading-none font-extrabold text-white/10 select-none">
            {project.num}
          </div>

          <h2 className="mt-2 text-[34px] xl:text-[42px] font-bold leading-tight text-white">
            {project.category} project
          </h2>

          <p className="mt-4 text-white/70 leading-relaxed">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-white/5 text-white/80 text-sm border border-white/10"
              >
                {tech.name}
              </span>
            ))}
          </div>

          <div className="mt-6 border-b border-white/10" />

          <div className="mt-4 flex items-center gap-4">
            {project.live ? (
              <Link
                href={project.live}
                target="_blank"
                className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
              >
                <span className="underline underline-offset-4">Live Demo</span>
                <BsArrowUpRight className="text-lg" />
              </Link>
            ) : (
              <span className="text-white/30 text-sm select-none">
                Live demo unavailable
              </span>
            )}

            {project.github && (
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-[44px] h-[44px] rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex justify-center items-center transition-colors">
                    <Link
                      href={project.github}
                      target="_blank"
                      className="flex"
                      aria-label="Open GitHub repository"
                    >
                      <BsGithub className="text-white text-[22px]" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>GitHub repository</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        </div>
      </div>

      {/* Right: Image */}
      <div className="w-full xl:w-1/2 flex justify-center">
        <div className="relative w-full max-w-[800px] aspect-[4/3]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="rounded-2xl object-cover border border-white/10"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        {/* COLUMN of blocks */}
        <div className="flex flex-col gap-8">
          {projects.map((p, idx) => (
            <ProjectCard key={idx} project={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
