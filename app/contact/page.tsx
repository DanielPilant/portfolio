"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

// ─── Contact info ──────────────────────────────────────────────────────────────

const info = [
  {
    icon: <FaPhoneAlt />,
    label: "Phone",
    value: "(+972) 584-216-328",
    href: "tel:+972584216328",
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "doubledan148@gmail.com",
    href: "mailto:doubledan148@gmail.com",
  },
];

// ─── Animation variants ────────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function Contact() {
  return (
    <section className="min-h-[80vh] py-12 xl:py-16">
      <div className="container mx-auto">

        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="mb-10"
        >
          <h2 className="text-white mb-3">
            Get in{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Touch
            </span>
          </h2>
          <p className="text-white/50 text-sm xl:text-base max-w-xl leading-relaxed">
            Open to freelance work, collaborations, and entry-level opportunities
            — reach out and I&apos;ll get back to you quickly.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-8"
        >

          {/* ── Form ──────────────────────────────────────────────────────── */}
          <motion.div variants={itemVariants}>
            <form
              className="flex flex-col gap-6 p-8 xl:p-10 bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="firstname" className="text-xs text-white/45 font-medium tracking-wide uppercase">
                    First name
                  </label>
                  <Input id="firstname" type="text" placeholder="Daniel" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="lastname" className="text-xs text-white/45 font-medium tracking-wide uppercase">
                    Last name
                  </label>
                  <Input id="lastname" type="text" placeholder="Pilant" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs text-white/45 font-medium tracking-wide uppercase">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="you@example.com" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs text-white/45 font-medium tracking-wide uppercase">
                    Phone <span className="normal-case text-white/25">(optional)</span>
                  </label>
                  <Input id="phone" type="tel" placeholder="+1 555 000 0000" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs text-white/45 font-medium tracking-wide uppercase">
                  Message
                </label>
                <Textarea
                  id="message"
                  className="h-[180px] resize-none"
                  placeholder="Tell me about your project or opportunity…"
                />
              </div>

              <Button
                type="submit"
                className="uppercase tracking-widest text-xs font-semibold rounded-xl px-6 h-12 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 self-start"
              >
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* ── Info sidebar ──────────────────────────────────────────────── */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4"
          >
            {info.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-center gap-5 p-5 bg-white/[0.03] border border-white/[0.08] rounded-2xl hover:bg-white/[0.06] hover:border-accent/25 hover:shadow-[0_4px_24px_rgba(0,195,255,0.07)] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/[0.08] border border-accent/20 flex items-center justify-center text-accent text-base shrink-0 group-hover:bg-accent/[0.14] transition-colors duration-300">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-[0.12em] text-white/35 font-semibold mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-200 truncate font-medium">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Note */}
            <p className="text-xs text-white/25 leading-relaxed px-1 mt-2">
              This form is currently a UI prototype. Reach out directly via email or phone in the meantime.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
