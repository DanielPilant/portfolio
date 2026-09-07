"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BsArrowLeft,
  BsGithub,
  BsBoxArrowUpRight,
} from "react-icons/bs";

// ─── Animation variants ────────────────────────────────────────────────────────

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function VisualTextEditorCaseStudy() {
  return (
    <article className="container mx-auto py-12 xl:py-16 max-w-[920px]">
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-white/55 hover:text-accent transition-colors"
        >
          <BsArrowLeft />
          Back to projects
        </Link>
      </motion.div>

      {/* ── Header ───────────────────────────────────────────────────────────── */}
      <motion.header
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-4 mb-12"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-3 flex-wrap">
          <span className="text-[10px] xl:text-xs uppercase tracking-[0.14em] text-accent/85 border border-accent/30 rounded-full px-3 py-1 bg-accent/[0.08] font-semibold">
            React / front-end app
          </span>
          <span className="text-[11px] text-white/35 font-medium tracking-wide">
            Full-Stack Development course · Project 4 of 7
          </span>
        </motion.div>

        <motion.h1 variants={fadeUp} className="leading-[1.05]">
          Visual{" "}
          <span
            style={{
              background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Text Editor
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-white/60 text-base xl:text-lg max-w-[680px] leading-relaxed"
        >
          A multi-document rich-text editor — and my first React project. The
          brief was &quot;build an editor.&quot; The deeper goal was to internalize
          component thinking after months of vanilla JS, where every problem
          looked like a DOM mutation.
        </motion.p>

        <motion.div variants={fadeUp} className="flex items-center gap-3 flex-wrap mt-2">
          <Link
            href="https://github.com/DanielPilant/project_4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-white/70 hover:text-accent border border-white/10 hover:border-accent/40 rounded-full px-4 py-2 bg-white/[0.04] hover:bg-accent/[0.08] transition-all duration-300 font-medium"
          >
            <BsGithub className="text-sm" />
            View source
          </Link>
        </motion.div>
      </motion.header>

      {/* ── Hero image ──────────────────────────────────────────────────────── */}
      <motion.figure
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/[0.08] mb-14"
      >
        <Image
          src="/assets/images/FS_proj_4/4.png"
          alt="Visual Text Editor screenshot"
          fill
          className="object-cover"
        />
      </motion.figure>

      {/* ── TL;DR callout ───────────────────────────────────────────────────── */}
      <Section title="The challenge" eyebrow="TL;DR">
        <Callout>
          A multi-tab editor with undo/redo, find/replace, virtual-keyboard
          input, and localStorage persistence has at least four sources of
          truth that want to lie to each other. The whole project, viewed from
          the right angle, is a single question:{" "}
          <span className="text-accent font-medium">
            where does state actually live?
          </span>
        </Callout>
      </Section>

      {/* ── Stack ───────────────────────────────────────────────────────────── */}
      <Section title="Stack">
        <div className="flex flex-wrap gap-2">
          {["React 19", "Vite", "CSS Modules", "localStorage", "TypeScript"].map((s) => (
            <span
              key={s}
              className="text-[11px] px-3 py-1 rounded-full bg-white/[0.05] text-white/60 border border-white/[0.07] font-mono tracking-tight"
            >
              {s}
            </span>
          ))}
        </div>
      </Section>

      {/* ── Architecture ────────────────────────────────────────────────────── */}
      <Section title="Architecture" eyebrow="System design">
        <p className="text-white/60 leading-relaxed mb-8">
          React&apos;s unidirectional flow gave me the answer: state lives at
          the highest component that needs it. For this editor, that meant
          <code className="font-mono text-accent/90 px-1">App.jsx</code> owns
          documents, the active tab, and per-document undo/redo stacks.
          Everything below is a controlled component reading props.
        </p>

        <ArchitectureDiagram />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6 text-xs">
          <LegendItem color="#00c3ff" label="Props down — state from App reaches each child as props." />
          <LegendItem color="#9359ff" label="Events up — every change is an event, never a direct mutation." dashed />
          <LegendItem color="#71717a" label="Persistence — localStorage rehydrates on mount, debounced writes." />
        </div>
      </Section>

      {/* ── Key decisions ───────────────────────────────────────────────────── */}
      <Section title="Key engineering decisions" eyebrow="Why this, not that">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DecisionCard
            title="Single source of truth for documents"
            body="Documents could have lived inside EditorPane as local state — but TabBar and the title bar both need to see them. State lives in App; children receive a slice as props."
          />
          <DecisionCard
            title="Per-document undo stack, not global"
            body="A naive global undo would let Cmd+Z in Document B revert a change in Document A. Each document carries its own snapshot stack, keyed by document ID."
          />
          <DecisionCard
            title="CSS Modules over a utility framework"
            body="A deliberate constraint to learn the idiomatic React way before reaching for shortcuts. Every style is component-scoped — the discipline forces component thinking."
          />
          <DecisionCard
            title="Virtual keyboard as data, not three components"
            body="EN, HE, and Emoji aren't three separate keyboards. They're three layout definitions consumed by one component. Switching language is a state change, not a remount."
          />
        </div>
      </Section>

      {/* ── Deep dives ──────────────────────────────────────────────────────── */}
      <Section title="Problem deep-dives" eyebrow="The hard parts">
        <DeepDive
          title="Undo history that survives a tab switch"
          problem="First version used a single undo stack with snapshot pushes on every change. Bug: switching to Document B and pressing Cmd+Z reverted Document A — the stack didn't know which document the snapshot belonged to."
          fix="Change the stack from Snapshot[] to Record<DocumentId, Snapshot[]> and key every push/pop on the active document."
          code={`// Before
const [undo, setUndo] = useState<Snapshot[]>([]);

// After
const [undo, setUndo] = useState<Record<DocumentId, Snapshot[]>>({});

const pushSnapshot = (docId: DocumentId, snap: Snapshot) =>
  setUndo(u => ({ ...u, [docId]: [...(u[docId] ?? []), snap] }));`}
        />

        <DeepDive
          title="Switching keyboard layouts without losing focus"
          problem="Tapping the layout-switch key would unmount the keyboard's key grid and remount it with the new layout. That dropped focus from the editor surface — the contenteditable selection vanished mid-typing."
          fix="Keep the grid mounted; only swap the key data. Nothing in the editor's tree re-renders on layout change, so the selection survives."
        />

        <DeepDive
          title="The rehydrate-vs-write race on first paint"
          problem="A useEffect that wrote documents to localStorage on every change ran on first mount before the rehydrate effect finished — persisting an empty documents[] over the saved state. The bug only appeared on hard reload."
          fix="A hydrated flag gates all writes until the read finishes. localStorage is treated as the source of truth on mount, the React state is the source of truth thereafter."
          code={`const [docs, setDocs]         = useState<Doc[]>([]);
const [hydrated, setHydrated] = useState(false);

useEffect(() => {
  const saved = localStorage.getItem("docs");
  if (saved) setDocs(JSON.parse(saved));
  setHydrated(true);
}, []);

useEffect(() => {
  if (!hydrated) return;            // ← the fix
  localStorage.setItem("docs", JSON.stringify(docs));
}, [docs, hydrated]);`}
        />
      </Section>

      {/* ── What I'd do differently ─────────────────────────────────────────── */}
      <Section title="What I'd do differently" eyebrow="In retrospect">
        <ul className="flex flex-col gap-4 text-white/60 leading-relaxed">
          <RetroItem
            title="Move state to a reducer"
            body="App's setState calls grew into a list of bespoke handlers (addDoc, removeDoc, updateContent, undo, redo). A typed useReducer would consolidate these into one switch — and make undo trivial, since every action becomes a snapshottable event."
          />
          <RetroItem
            title="Replace localStorage with IndexedDB"
            body="localStorage caps at ~5 MB and serializes synchronously, which blocks the main thread on large documents. IndexedDB removes both limits and lets me drop the debounce entirely."
          />
          <RetroItem
            title="Build a real document model instead of contenteditable"
            body="Browser contenteditable behaves differently in every browser. A real editor (ProseMirror, Lexical) maintains its own document model and selection. Way more work, but the only path to behavior I can reason about across browsers."
          />
        </ul>
      </Section>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16 pt-8 border-t border-white/[0.07] flex items-center justify-between flex-wrap gap-4"
      >
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-white/55 hover:text-accent transition-colors"
        >
          <BsArrowLeft />
          All projects
        </Link>
        <Link
          href="https://github.com/DanielPilant/project_4"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs text-white/70 hover:text-accent border border-white/10 hover:border-accent/40 rounded-full px-4 py-2 bg-white/[0.04] hover:bg-accent/[0.08] transition-all duration-300 font-medium"
        >
          <BsGithub />
          Source on GitHub
          <BsBoxArrowUpRight className="text-[10px]" />
        </Link>
      </motion.footer>
    </article>
  );
}

// ─── Reusable bits ─────────────────────────────────────────────────────────────

function Section({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mb-14"
    >
      {eyebrow && (
        <p className="text-[10px] uppercase tracking-[0.18em] text-accent/70 font-semibold mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-[28px] xl:text-[34px] leading-tight font-semibold mb-5 text-white/90">
        {title}
      </h2>
      {children}
    </motion.section>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-2xl border border-accent/20 bg-accent/[0.04] p-6 xl:p-7 text-white/75 leading-relaxed">
      <div
        className="absolute left-0 top-4 bottom-4 w-[2px] rounded-full"
        style={{
          background: "linear-gradient(180deg, var(--accent) 0%, var(--accent-hover) 100%)",
        }}
      />
      <div className="pl-2">{children}</div>
    </div>
  );
}

function DecisionCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 hover:border-accent/25 hover:bg-white/[0.05] transition-colors duration-300">
      <h3 className="text-sm font-semibold text-white/90 mb-2">{title}</h3>
      <p className="text-white/55 text-sm leading-relaxed">{body}</p>
    </div>
  );
}

function DeepDive({
  title,
  problem,
  fix,
  code,
}: {
  title: string;
  problem: string;
  fix: string;
  code?: string;
}) {
  return (
    <div className="mb-8 last:mb-0">
      <h3 className="text-lg xl:text-xl font-semibold text-white/90 mb-3">{title}</h3>
      <p className="text-white/55 text-sm leading-relaxed mb-3">
        <span className="text-white/40 uppercase text-[10px] tracking-[0.14em] mr-2">Problem</span>
        {problem}
      </p>
      <p className="text-white/55 text-sm leading-relaxed mb-4">
        <span className="text-accent uppercase text-[10px] tracking-[0.14em] mr-2">Fix</span>
        {fix}
      </p>
      {code && (
        <pre className="rounded-xl border border-white/[0.08] bg-[#0c0c10] p-4 overflow-x-auto text-[12px] leading-relaxed font-mono text-white/75">
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
}

function RetroItem({ title, body }: { title: string; body: string }) {
  return (
    <li className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-5">
      <strong className="block text-white/85 text-sm mb-1.5 font-semibold">{title}</strong>
      <span className="text-white/55 text-sm leading-relaxed">{body}</span>
    </li>
  );
}

function LegendItem({
  color,
  label,
  dashed,
}: {
  color: string;
  label: string;
  dashed?: boolean;
}) {
  return (
    <div className="flex items-start gap-2 text-white/55">
      <svg width="36" height="14" className="shrink-0 mt-1">
        <line
          x1="2"
          y1="7"
          x2="32"
          y2="7"
          stroke={color}
          strokeWidth="2"
          strokeDasharray={dashed ? "5,4" : "0"}
        />
        <polygon points="32,3 36,7 32,11" fill={color} />
      </svg>
      <span>{label}</span>
    </div>
  );
}

// ─── Architecture diagram (inline SVG) ─────────────────────────────────────────

function ArchitectureDiagram() {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#0b0b10] p-4 xl:p-6 overflow-x-auto">
      <svg
        viewBox="0 0 880 500"
        className="w-full h-auto min-w-[640px]"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Component architecture diagram showing App as the root state owner with TabBar, EditorPane, Toolbar, and VirtualKeyboard as children, plus localStorage as a persistence layer."
      >
        <defs>
          <marker id="ah-cyan" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#00c3ff" />
          </marker>
          <marker id="ah-purple" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#9359ff" />
          </marker>
          <marker id="ah-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#71717a" />
          </marker>
        </defs>

        {/* App box */}
        <rect x="340" y="20" width="200" height="100" rx="14" fill="rgba(0,195,255,0.08)" stroke="#00c3ff" strokeWidth="1.5" />
        <text x="440" y="50" fill="#00c3ff" fontFamily="Geist Mono, monospace" fontSize="15" fontWeight="600" textAnchor="middle">App.jsx</text>
        <text x="440" y="74" fill="rgba(244,244,245,0.6)" fontFamily="Geist Mono, monospace" fontSize="11" textAnchor="middle">documents[]   activeId</text>
        <text x="440" y="92" fill="rgba(244,244,245,0.6)" fontFamily="Geist Mono, monospace" fontSize="11" textAnchor="middle">undoStacks   redoStacks</text>
        <text x="440" y="110" fill="rgba(244,244,245,0.4)" fontFamily="Geist Mono, monospace" fontSize="10" textAnchor="middle" fontStyle="italic">single source of truth</text>

        {/* TabBar */}
        <rect x="40" y="220" width="180" height="80" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
        <text x="130" y="248" fill="#f4f4f5" fontFamily="Geist Mono, monospace" fontSize="14" fontWeight="600" textAnchor="middle">TabBar</text>
        <text x="130" y="270" fill="rgba(244,244,245,0.5)" fontFamily="Geist Mono, monospace" fontSize="11" textAnchor="middle">switch · close</text>
        <text x="130" y="287" fill="rgba(244,244,245,0.5)" fontFamily="Geist Mono, monospace" fontSize="11" textAnchor="middle">rename</text>

        {/* EditorPane */}
        <rect x="340" y="220" width="200" height="80" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
        <text x="440" y="248" fill="#f4f4f5" fontFamily="Geist Mono, monospace" fontSize="14" fontWeight="600" textAnchor="middle">EditorPane</text>
        <text x="440" y="270" fill="rgba(244,244,245,0.5)" fontFamily="Geist Mono, monospace" fontSize="11" textAnchor="middle">contenteditable surface</text>
        <text x="440" y="287" fill="rgba(244,244,245,0.5)" fontFamily="Geist Mono, monospace" fontSize="11" textAnchor="middle">selection · cursor</text>

        {/* Toolbar */}
        <rect x="660" y="220" width="180" height="80" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
        <text x="750" y="248" fill="#f4f4f5" fontFamily="Geist Mono, monospace" fontSize="14" fontWeight="600" textAnchor="middle">Toolbar</text>
        <text x="750" y="270" fill="rgba(244,244,245,0.5)" fontFamily="Geist Mono, monospace" fontSize="11" textAnchor="middle">format · find</text>
        <text x="750" y="287" fill="rgba(244,244,245,0.5)" fontFamily="Geist Mono, monospace" fontSize="11" textAnchor="middle">files · undo</text>

        {/* VirtualKeyboard */}
        <rect x="340" y="380" width="200" height="80" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
        <text x="440" y="408" fill="#f4f4f5" fontFamily="Geist Mono, monospace" fontSize="14" fontWeight="600" textAnchor="middle">VirtualKeyboard</text>
        <text x="440" y="430" fill="rgba(244,244,245,0.5)" fontFamily="Geist Mono, monospace" fontSize="11" textAnchor="middle">EN · HE · Emoji</text>
        <text x="440" y="447" fill="rgba(244,244,245,0.5)" fontFamily="Geist Mono, monospace" fontSize="11" textAnchor="middle">layout = data</text>

        {/* localStorage cylinder */}
        <ellipse cx="130" cy="380" rx="70" ry="10" fill="rgba(147,89,255,0.12)" stroke="#9359ff" strokeWidth="1" />
        <path d="M 60 380 L 60 440 A 70 10 0 0 0 200 440 L 200 380" fill="rgba(147,89,255,0.12)" stroke="#9359ff" strokeWidth="1" />
        <ellipse cx="130" cy="440" rx="70" ry="10" fill="rgba(147,89,255,0.18)" stroke="#9359ff" strokeWidth="1" />
        <text x="130" y="410" fill="#c5a8ff" fontFamily="Geist Mono, monospace" fontSize="13" fontWeight="600" textAnchor="middle">localStorage</text>
        <text x="130" y="428" fill="rgba(244,244,245,0.5)" fontFamily="Geist Mono, monospace" fontSize="10" textAnchor="middle">debounced 250ms</text>

        {/* Arrows: App → children (props down, cyan solid) */}
        <path d="M 380 122 Q 280 170 215 220" stroke="#00c3ff" strokeWidth="1.6" fill="none" markerEnd="url(#ah-cyan)" />
        <path d="M 430 122 L 430 220" stroke="#00c3ff" strokeWidth="1.6" fill="none" markerEnd="url(#ah-cyan)" />
        <path d="M 500 122 Q 600 170 665 220" stroke="#00c3ff" strokeWidth="1.6" fill="none" markerEnd="url(#ah-cyan)" />

        {/* Arrows: children → App (events up, dashed purple) */}
        <path d="M 220 230 Q 320 175 388 130" stroke="#9359ff" strokeWidth="1.6" fill="none" strokeDasharray="5,4" markerEnd="url(#ah-purple)" />
        <path d="M 450 220 L 450 130" stroke="#9359ff" strokeWidth="1.6" fill="none" strokeDasharray="5,4" markerEnd="url(#ah-purple)" />
        <path d="M 660 230 Q 560 175 492 130" stroke="#9359ff" strokeWidth="1.6" fill="none" strokeDasharray="5,4" markerEnd="url(#ah-purple)" />

        {/* EditorPane ↔ VirtualKeyboard */}
        <path d="M 432 300 L 432 380" stroke="#00c3ff" strokeWidth="1.6" fill="none" markerEnd="url(#ah-cyan)" />
        <path d="M 448 380 L 448 300" stroke="#9359ff" strokeWidth="1.6" fill="none" strokeDasharray="5,4" markerEnd="url(#ah-purple)" />

        {/* App ↔ localStorage (persistence, gray) */}
        <path d="M 130 370 Q 130 200 340 95" stroke="#71717a" strokeWidth="1.4" fill="none" markerEnd="url(#ah-gray)" />
        <path d="M 340 75 Q 130 165 130 370" stroke="#71717a" strokeWidth="1.4" fill="none" strokeDasharray="3,3" markerEnd="url(#ah-gray)" />

        {/* Annotations */}
        <text x="245" y="170" fill="rgba(0,195,255,0.7)" fontFamily="Geist Mono, monospace" fontSize="10" fontStyle="italic">props</text>
        <text x="595" y="170" fill="rgba(147,89,255,0.7)" fontFamily="Geist Mono, monospace" fontSize="10" fontStyle="italic">onChange</text>
        <text x="240" y="280" fill="rgba(113,113,122,0.85)" fontFamily="Geist Mono, monospace" fontSize="10" fontStyle="italic">rehydrate / persist</text>
      </svg>
    </div>
  );
}
