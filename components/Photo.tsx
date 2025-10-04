"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1.5, delay: 0.1, ease: "easeInOut" },
        }}
        className="relative w-[220px] xl:w-[420px] aspect-square flex justify-center items-center"
      >
        {/* image inside a smaller circle */}
        <div className="relative w-[200px] xl:w-[398px] aspect-square rounded-full overflow-hidden z-10">
          <Image
            src="/assets/images/Me.png"
            alt="Daniel Pilant"
            fill
            priority
            quality={100}
            className="object-cover rounded-full"
          />
        </div>

        {/* outer animated circle */}
        <motion.svg
          className="absolute w-full h-full"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="var(--accent)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 71", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
