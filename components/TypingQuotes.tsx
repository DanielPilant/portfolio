"use client";

import { useEffect, useState } from "react";

const QUOTES = [
  "Where logic meets myth, and systems come alive.",
  "Building realities from code and consciousness.",
  "Engineering order from chaos.",
  "Rendering light, matter, and meaning.",
  "Designing worlds that think.",
  "Between science and story, I build truth.",
  "Code is my language, creation is my goal.",
  "From linear algebra, light learns to dream.",
  "Every framework I trust, I rebuilt by hand first.",
  "Translating human intent into deterministic action.",
  "Curiosity is my compiler; rigor is my runtime.",
  "Decoupling complexity until it can be reasoned about.",
  "Below every interface lives a system worth understanding.",
  "Latency is the tax on every promise we make.",
  "What I cannot measure, I cannot keep alive.",
  "Three layers, three truths, one system.",
  "I build for the failure modes no one wanted to imagine.",
];

const TYPE_MS  = 38;
const ERASE_MS = 18;
const HOLD_MS  = 1800;

type Phase = "typing" | "holding" | "erasing";

export function TypingQuotes() {
  const [index, setIndex] = useState(0);
  const [text,  setText]  = useState("");
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => {
    const quote = QUOTES[index];

    if (phase === "typing") {
      if (text.length < quote.length) {
        const t = setTimeout(() => setText(quote.slice(0, text.length + 1)), TYPE_MS);
        return () => clearTimeout(t);
      }
      setPhase("holding");
      return;
    }

    if (phase === "holding") {
      const t = setTimeout(() => setPhase("erasing"), HOLD_MS);
      return () => clearTimeout(t);
    }

    if (text.length > 0) {
      const t = setTimeout(() => setText(quote.slice(0, text.length - 1)), ERASE_MS);
      return () => clearTimeout(t);
    }
    setIndex((i) => (i + 1) % QUOTES.length);
    setPhase("typing");
  }, [text, phase, index]);

  return (
    <p
      aria-live="polite"
      className="font-mono text-sm xl:text-base text-white/75 min-h-[1.6em] tracking-wide"
    >
      <span
        style={{
          background:
            "linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {text}
      </span>
      <span className="tq-cursor inline-block w-[2px] h-[1.05em] bg-accent ml-1 align-[-0.15em]" />
    </p>
  );
}
