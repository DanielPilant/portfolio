"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

interface Props {
  src: string;
  alt: string;
  onClose: () => void;
}

export function ImageLightbox({ src, alt, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-8"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

        {/* Image card */}
        <motion.div
          key="lightbox-image"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative z-10 max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 95vw, (max-width: 1024px) 80vw, 60vw"
              priority
            />
          </div>
        </motion.div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-xl bg-white/[0.08] border border-white/[0.12] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.15] transition-all duration-200"
          aria-label="Close image"
        >
          <IoClose className="text-xl" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
