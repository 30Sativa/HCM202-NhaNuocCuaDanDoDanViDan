"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { timeline } from "@/data/timeline";

export default function Timeline() {
  const [active, setActive] = useState(0);
  const event = timeline[active];

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,20rem)_1fr] lg:items-start">
      {/* Rail */}
      <ol className="relative border-l-2 border-ink/15 pl-6">
        {timeline.map((e, i) => (
          <li key={i} className="relative mb-7 last:mb-0">
            <button
              onClick={() => setActive(i)}
              className="group text-left"
            >
              <span
                className={`absolute -left-[1.72rem] top-1 h-4 w-4 rounded-full border-2 transition-all ${
                  active === i
                    ? "border-primary bg-primary"
                    : "border-ink/30 bg-paper group-hover:border-primary"
                }`}
              />
              <span
                className={`block font-mono text-xs uppercase tracking-wider ${
                  active === i ? "text-primary" : "text-ink-soft"
                }`}
              >
                {e.date}
              </span>
              <span
                className={`mt-0.5 block font-serif text-lg font-semibold leading-tight ${
                  active === i ? "text-ink" : "text-ink-soft group-hover:text-ink"
                }`}
              >
                {e.title}
              </span>
            </button>
          </li>
        ))}
      </ol>

      {/* Detail */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
          className="rounded-2xl border border-ink/10 bg-paper-2/50 p-8"
        >
          <span className="font-serif text-6xl font-bold text-primary/15">
            {event.year}
          </span>
          <div className="mt-2">
            <span className="kicker">{event.date}</span>
            <h3 className="mt-2 font-serif text-3xl font-bold text-ink">
              {event.title}
            </h3>
            <p className="mt-4 leading-relaxed text-ink-soft">
              {event.description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
