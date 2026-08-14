"use client";

import { motion } from "framer-motion";
import { concepts } from "@/data/concepts";

export default function ConceptCards() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {concepts.map((c, i) => (
        <motion.article
          key={c.id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.12 }}
          whileHover={{ y: -6 }}
          className="group relative flex min-h-[19rem] flex-col justify-between overflow-hidden rounded-2xl border border-ink/10 bg-paper-2/50 p-7"
        >
          {/* index watermark */}
          <span className="pointer-events-none absolute -right-2 -top-6 font-serif text-[7rem] font-bold leading-none text-primary/[0.06] transition-colors group-hover:text-primary/10">
            {c.index}
          </span>

          <div className="relative">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold-dark">
              {c.index} · {c.keyword}
            </span>
            <h3 className="mt-4 font-serif text-4xl font-bold text-primary">
              {c.title}
            </h3>
            <p className="mt-4 text-sm font-medium text-ink">{c.question}</p>
          </div>

          <div className="relative mt-6">
            {/* default answer */}
            <div className="transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-0">
              <span className="font-mono text-xs uppercase tracking-wider text-ink-soft">
                Trả lời
              </span>
              <p className="font-serif text-2xl font-semibold text-ink">
                {c.answer}
              </p>
            </div>
            {/* hover reveal */}
            <div className="pointer-events-none absolute inset-0 flex flex-col justify-end opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <div className="rule mb-3" />
              <span className="font-mono text-[0.7rem] uppercase tracking-wider text-gold-dark">
                {c.role}
              </span>
              <p className="mt-1 text-sm leading-snug text-ink">{c.hover}</p>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
