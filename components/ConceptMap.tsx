"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { concepts, conceptMap } from "@/data/concepts";

export default function ConceptMap() {
  const [active, setActive] = useState(concepts[0].id);
  const current = concepts.find((c) => c.id === active)!;
  const map = conceptMap[active];

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr] lg:items-start">
      {/* Trái: bộ chọn khái niệm */}
      <div className="rounded-2xl border border-ink/10 bg-paper-2/40 p-4 sm:p-6">
        <div className="mb-4 flex items-center justify-center">
          <span className="rounded-full bg-ink px-5 py-2 font-mono text-xs font-semibold uppercase tracking-widest text-paper">
            Nhà nước
          </span>
        </div>
        <p className="mb-4 text-center font-mono text-[0.7rem] uppercase tracking-wider text-ink-soft">
          Quyền lực thuộc về ai?
        </p>

        <div className="space-y-2.5">
          {concepts.map((c) => {
            const isActive = active === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all ${
                  isActive
                    ? "border-primary bg-primary/[0.06] shadow-sm"
                    : "border-ink/10 bg-paper hover:border-primary/40 hover:bg-paper-2/60"
                }`}
              >
                <span
                  className={`flex h-11 w-11 flex-none items-center justify-center rounded-lg font-serif text-lg font-bold transition-colors ${
                    isActive ? "bg-primary text-paper" : "bg-ink/5 text-ink-soft"
                  }`}
                >
                  {c.index}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-2">
                    <span
                      className={`font-serif text-lg font-bold ${
                        isActive ? "text-primary" : "text-ink"
                      }`}
                    >
                      {c.title}
                    </span>
                    <span className="hidden rounded-full bg-gold/15 px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-gold-dark sm:inline">
                      {c.answer}
                    </span>
                  </span>
                  <span className="mt-0.5 block text-xs leading-snug text-ink-soft">
                    {c.question}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Phải: chi tiết + sơ đồ dòng quyền lực */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-2xl border border-primary/20 bg-primary/[0.04] p-6 sm:p-7"
      >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold-dark">
            {current.index} · {current.role}
          </span>
          <h3 className="mt-2 font-serif text-4xl font-bold text-primary">
            {current.title}
          </h3>
          <p className="mt-4 leading-relaxed text-ink">{current.description}</p>

          {/* Sơ đồ dòng quyền lực */}
          <div className="mt-6 rounded-xl border border-ink/10 bg-paper p-5">
            <span className="font-mono text-[0.7rem] uppercase tracking-wider text-ink-soft">
              Dòng quyền lực
            </span>

            <div className="relative mt-4 pl-1">
              {/* đường nối dọc */}
              <span className="absolute bottom-4 left-[0.6rem] top-2 w-0.5 bg-gradient-to-b from-gold-dark via-primary/40 to-primary" />

              <div className="space-y-3">
                {map.flow.map((step, i) => {
                  const isLast = i === map.flow.length - 1;
                  return (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                      className="relative flex items-center gap-3.5"
                    >
                      <span
                        className={`relative z-10 flex h-5 w-5 flex-none items-center justify-center rounded-full ring-4 ring-paper ${
                          isLast ? "bg-primary" : "bg-gold-dark"
                        }`}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-paper" />
                      </span>
                      <span
                        className={`rounded-lg px-4 py-2 font-serif text-lg font-semibold ${
                          isLast
                            ? "bg-primary text-paper"
                            : "border border-ink/10 bg-paper-2/60 text-ink"
                        }`}
                      >
                        {step}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <p className="mt-5 flex items-start gap-2 border-t border-ink/10 pt-4 text-sm italic leading-snug text-ink-soft">
              <ArrowRight size={15} className="mt-0.5 flex-none text-primary" />
              {map.note}
            </p>
          </div>
        </motion.div>
    </div>
  );
}
