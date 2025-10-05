"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
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
    image: "/assets/images/mission_force_2.png",
    live: "",
    github: "https://github.com/DanielPilant/dotNet5785_1426_2126",
  },
  {
    num: "02",
    category: "graphics / rendering engine",
    title: "Java Ray Tracing Engine",
    description:
      "A fully custom-built ray tracing engine that simulates realistic lighting, reflections, refractions, and soft shadows. This project was driven by the goal of understanding the mathematical and physical principles behind computer graphics — building everything from scratch to master how light interacts with 3D geometry.",
    stack: [
      { name: "Java" },
      { name: "Object-Oriented Design" },
      { name: "Math & Physics Algorithms" },
    ],
    image: "/assets/images/MINIP_2.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Left: Text panel */}
          <div className="w-full xl:w-[50%] flex flex-col order-2 xl:order-none">
            <div className="bg-[#232329]/60 backdrop-blur-[2px] rounded-2xl p-6 xl:p-8 border border-white/10 shadow-sm">
              {/* outline num and title */}
              <div className="text-7xl xl:text-8xl leading-none font-extrabold text-white/10 select-none">
                {project.num}
              </div>

              {/* project category */}
              <h2 className="mt-2 text-[34px] xl:text-[42px] font-bold leading-tight text-white transition-colors duration-300">
                {project.category} project
              </h2>

              {/* project description */}
              <p className="mt-4 text-white/70 leading-relaxed">
                {project.description}
              </p>

              {/* stack chips */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-white/5 text-white/80 text-sm border border-white/10"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>

              {/* divider */}
              <div className="mt-6 border-b border-white/10" />

              {/* actions */}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* live button – מציג רק אם יש קישור */}
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

                  {/* github button – מציג רק אם יש קישור */}
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
          </div>

          {/* Right: Slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={24}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((proj, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[360px] xl:h-[520px] relative group flex justify-center items-center">
                    {/* frame */}
                    <div className="absolute inset-0 rounded-2xl bg-[#232329] border border-white/10 shadow-sm" />
                    {/* image */}
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <Image
                        src={proj.image}
                        fill
                        className="object-cover"
                        alt={proj.title}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                      />
                      {/* overlay gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      {/* caption (optional) */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                        <div className="px-3 py-1 rounded-full bg-black/40 backdrop-blur text-white/90 text-sm border border-white/10">
                          {proj.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-0 z-20 w-full justify-between px-2 xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center rounded-full transition-all"
                iconStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
