"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ShieldCheck, ShieldAlert } from "lucide-react";
import { controlledFlow, uncontrolledFlow } from "@/data/powerflow";

type Mode = "controlled" | "uncontrolled";

export default function PowerFlow() {
  const [mode, setMode] = useState<Mode>("controlled");
  const flow = mode === "controlled" ? controlledFlow : uncontrolledFlow;
  const good = mode === "controlled";

  return (
    <div className="rounded-2xl border border-ink/10 bg-paper-2/40 p-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="kicker">Mô phỏng</span>
          <h3 className="mt-1 font-serif text-2xl font-bold text-ink">
            Quyền lực có thể bị tha hóa như thế nào?
          </h3>
        </div>
        <div className="inline-flex rounded-full border border-ink/15 bg-paper p-1">
          <button
            onClick={() => setMode("controlled")}
            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all ${
              good ? "bg-primary text-paper" : "text-ink-soft"
            }`}
          >
            <ShieldCheck size={14} /> Có kiểm soát
          </button>
          <button
            onClick={() => setMode("uncontrolled")}
            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all ${
              !good ? "bg-ink text-paper" : "text-ink-soft"
            }`}
          >
            <ShieldAlert size={14} /> Không kiểm soát
          </button>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col items-center"
          >
            {flow.map((step, i) => {
              const isLast = i === flow.length - 1;
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.12 }}
                  className="flex flex-col items-center"
                >
                  <div
                    className={`rounded-xl px-6 py-3 text-center font-serif text-lg font-semibold ${
                      isLast
                        ? good
                          ? "bg-primary text-paper"
                          : "bg-ink text-paper"
                        : "border border-ink/15 bg-paper text-ink"
                    }`}
                  >
                    {step.label}
                  </div>
                  {!isLast && (
                    <ArrowDown
                      size={16}
                      className={`my-1.5 ${good ? "text-gold-dark" : "text-primary"}`}
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        <p
          className={`mt-6 max-w-md text-center text-sm leading-relaxed ${
            good ? "text-ink-soft" : "text-primary"
          }`}
        >
          {good
            ? "Khi quyền lực được kiểm soát, nó minh bạch, gắn với trách nhiệm và cuối cùng phục vụ nhân dân."
            : "Khi quyền lực không được kiểm soát, nó bị lạm dụng, dẫn tới quan liêu, đặc quyền, tham nhũng và xa rời nhân dân."}
        </p>
      </div>
    </div>
  );
}
