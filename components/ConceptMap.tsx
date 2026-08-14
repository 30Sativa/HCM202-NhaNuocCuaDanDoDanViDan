"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { concepts, conceptMap } from "@/data/concepts";

export default function ConceptMap() {
  const [active, setActive] = useState(concepts[0].id);
  const current = concepts.find((c) => c.id === active)!;
  const map = conceptMap[active];

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
      {/* Left: the tree */}
      <div className="rounded-2xl border border-ink/10 bg-paper-2/40 p-7">
        <div className="flex flex-col items-center">
          <Node label="NHÀ NƯỚC" tone="ink" />
          <Connector />
          <div className="grid w-full grid-cols-3 gap-2">
            {concepts.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`rounded-xl border px-2 py-3 text-center font-mono text-xs uppercase tracking-wide transition-all ${
                  active === c.id
                    ? "border-primary bg-primary text-paper shadow-sm"
                    : "border-ink/15 bg-paper text-ink-soft hover:border-primary hover:text-primary"
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>
          <div className="grid w-full grid-cols-3 gap-2 pt-1">
            {concepts.map((c) => (
              <div key={c.id} className="flex flex-col items-center">
                <ArrowDown size={13} className="my-1 text-gold-dark" />
                <span className="text-center text-[0.7rem] leading-tight text-ink-soft">
                  {c.question.replace("?", "")}
                </span>
              </div>
            ))}
          </div>
          <div className="grid w-full grid-cols-3 gap-2 pt-2">
            {concepts.map((c) => (
              <div
                key={c.id}
                className="rounded-lg bg-gold/15 py-2 text-center font-serif text-sm font-semibold text-primary"
              >
                {c.answer}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: detail panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.35 }}
          className="rounded-2xl border border-primary/20 bg-primary/[0.04] p-7"
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold-dark">
            {current.index} · {current.role}
          </span>
          <h3 className="mt-3 font-serif text-4xl font-bold text-primary">
            {current.title}
          </h3>
          <p className="mt-4 leading-relaxed text-ink">{current.description}</p>

          <div className="mt-7 rounded-xl border border-ink/10 bg-paper p-5">
            <span className="font-mono text-[0.7rem] uppercase tracking-wider text-ink-soft">
              Dòng quyền lực
            </span>
            <div className="mt-3 flex flex-col items-start gap-1.5">
              {map.flow.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="font-serif text-lg font-semibold text-ink">
                    {step}
                  </span>
                  {i < map.flow.length - 1 && (
                    <ArrowDown size={14} className="text-primary" />
                  )}
                </div>
              ))}
            </div>
            <p className="mt-4 border-t border-ink/10 pt-3 text-sm italic text-ink-soft">
              {map.note}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function Node({ label, tone }: { label: string; tone: "ink" | "primary" }) {
  return (
    <div
      className={`rounded-xl px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wider ${
        tone === "ink" ? "bg-ink text-paper" : "bg-primary text-paper"
      }`}
    >
      {label}
    </div>
  );
}

function Connector() {
  return <div className="my-3 h-6 w-px bg-ink/25" />;
}
