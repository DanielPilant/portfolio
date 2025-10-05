"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { title } from "process";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+972) 584216328",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "doubledan148@gmail.com",
  },
];

import { motion } from "framer-motion";

const contact = () => {
  return (
    <motion.section className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                I&apos;m open to freelance opportunities and collaborations.
                Fill out the form below to get in touch.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Phone" />
              </div>
              {/* textarea */}
              <Textarea className="h-[200px]" placeholder="Type your messege here" />
              <Button className="max-w-80 " >
                Send Message (in progress)
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px h-[52px] xl:w-[72px] bg-[#27272c] text-accent flex items-center justify-center px-5">
                    <div>{item.icon}</div>
                  </div>
                  <div>
                    <p>{item.title}</p>
                    <h3>{item.description}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default contact;
