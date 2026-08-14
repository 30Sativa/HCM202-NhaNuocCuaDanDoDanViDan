"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, RotateCw } from "lucide-react";
import { flashcards } from "@/data/flashcards";

export default function Flashcards() {
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card = flashcards[idx];

  function go(dir: 1 | -1) {
    setFlipped(false);
    setIdx((i) => (i + dir + flashcards.length) % flashcards.length);
  }

  return (
    <div className="mx-auto max-w-xl">
      <div
        className="relative h-72 cursor-pointer [perspective:1400px]"
        onClick={() => setFlipped((f) => !f)}
      >
        <motion.div
          className="relative h-full w-full [transform-style:preserve-3d]"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Front */}
          <div className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-ink/10 bg-paper-2/60 p-8 [backface-visibility:hidden]">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold-dark">
              {card.topic}
            </span>
            <p className="font-serif text-2xl font-semibold leading-snug text-ink">
              {card.front}
            </p>
            <span className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-ink-soft">
              <RotateCw size={13} /> Nhấn để lật · Hiện đáp án
            </span>
          </div>
          {/* Back */}
          <div className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-primary/25 bg-primary/[0.05] p-8 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Đáp án
            </span>
            <p className="font-serif text-xl font-medium leading-relaxed text-ink">
              {card.back}
            </p>
            <span className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-ink-soft">
              <RotateCw size={13} /> Nhấn để lật lại
            </span>
          </div>
        </motion.div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={() => go(-1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 transition-colors hover:border-primary hover:text-primary"
          aria-label="Thẻ trước"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="font-mono text-sm tracking-wider text-ink-soft">
          {String(idx + 1).padStart(2, "0")} / {flashcards.length}
        </span>
        <button
          onClick={() => go(1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 transition-colors hover:border-primary hover:text-primary"
          aria-label="Thẻ sau"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
