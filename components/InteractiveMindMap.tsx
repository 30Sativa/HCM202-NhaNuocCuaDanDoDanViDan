"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Check, ChevronRight } from "lucide-react";
import { mindRoot, mindNodes, type MindNode } from "@/data/mindmap";
import { useAI } from "./ai/AIProvider";

const left = mindNodes.filter((n) => n.tone === "primary");
const right = mindNodes.filter((n) => n.tone === "gold");

export default function InteractiveMindMap() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const { askAbout } = useAI();
  const active = mindNodes.find((n) => n.id === activeId) ?? null;

  return (
    <div>
      {/* Sơ đồ */}
      <div className="rounded-2xl border border-ink/10 bg-paper-2/40 p-5 md:p-10">
        {/* Desktop */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-x-4">
          <div className="flex flex-col items-end gap-4">
            {left.map((n) => (
              <Branch
                key={n.id}
                node={n}
                side="left"
                active={activeId === n.id}
                onClick={() => setActiveId(n.id)}
              />
            ))}
          </div>
          <Root />
          <div className="flex flex-col items-start gap-4">
            {right.map((n) => (
              <Branch
                key={n.id}
                node={n}
                side="right"
                active={activeId === n.id}
                onClick={() => setActiveId(n.id)}
              />
            ))}
          </div>
        </div>

        {/* Mobile / tablet */}
        <div className="lg:hidden">
          <div className="flex justify-center">
            <Root />
          </div>
          <div className="mt-5 space-y-2.5">
            {mindNodes.map((n) => (
              <Branch
                key={n.id}
                node={n}
                side="right"
                active={activeId === n.id}
                onClick={() => setActiveId(n.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Chi tiết mục đang chọn */}
      {active ? (
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 rounded-2xl border border-primary/20 bg-primary/[0.04] p-6 sm:p-7"
        >
          <span
            className={`font-mono text-xs uppercase tracking-[0.2em] ${
              active.tone === "primary" ? "text-primary" : "text-gold-dark"
            }`}
          >
            {active.short}
          </span>
          <h3 className="mt-1 font-serif text-3xl font-bold text-primary">
            {active.title}
          </h3>

          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {active.points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-2.5 rounded-lg border border-ink/10 bg-paper px-4 py-2.5 text-sm text-ink"
              >
                <Check size={15} className="mt-0.5 flex-none text-primary" />
                {p}
              </li>
            ))}
          </ul>

          <button
            onClick={() => askAbout(active.title, active.aiContext)}
            className="btn-primary mt-6"
          >
            <Sparkles size={16} /> Hỏi DânBot về mục này
          </button>
          <p className="mt-2 text-xs italic text-ink-soft">
            DânBot sẽ chỉ trả lời trong phạm vi mục “{active.title}”.
          </p>
        </motion.div>
      ) : (
        <p className="mt-6 text-center font-mono text-xs uppercase tracking-wider text-ink-soft">
          Nhấn vào một nhánh để mở chi tiết & hỏi AI
        </p>
      )}
    </div>
  );
}

function Root() {
  return (
    <div className="mx-auto max-w-[13rem] rounded-2xl bg-ink px-6 py-5 text-center text-paper shadow-lg">
      <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-gold-light">
        {mindRoot.title}
      </span>
      <p className="mt-1 font-serif text-xl font-bold leading-tight">
        {mindRoot.lines.map((l) => (
          <span key={l} className="block">
            {l}
          </span>
        ))}
      </p>
    </div>
  );
}

function Branch({
  node,
  side,
  active,
  onClick,
}: {
  node: MindNode;
  side: "left" | "right";
  active: boolean;
  onClick: () => void;
}) {
  const dot = node.tone === "primary" ? "bg-primary" : "bg-gold-dark";
  const titleColor = node.tone === "primary" ? "text-primary" : "text-gold-dark";
  const line = node.tone === "primary" ? "bg-primary/40" : "bg-gold-dark/40";

  return (
    <div
      className={`flex w-full max-w-sm items-center gap-2 ${
        side === "left" ? "flex-row-reverse text-right" : ""
      }`}
    >
      <span className={`hidden h-0.5 w-6 flex-none rounded-full lg:block ${line}`} />
      <button
        onClick={onClick}
        className={`group flex-1 rounded-xl border p-4 text-left transition-all ${
          active
            ? "border-primary bg-primary/[0.06] shadow-sm"
            : "border-ink/10 bg-paper hover:border-primary/40 hover:bg-paper-2/60"
        }`}
      >
        <div
          className={`flex items-center gap-2 ${
            side === "left" ? "flex-row-reverse" : ""
          }`}
        >
          <span className={`h-2.5 w-2.5 flex-none rounded-full ${dot}`} />
          <span className={`font-serif text-lg font-bold ${titleColor}`}>
            {node.title}
          </span>
          <ChevronRight
            size={15}
            className={`ml-auto text-ink-soft transition-transform group-hover:translate-x-0.5 ${
              side === "left" ? "rotate-180" : ""
            }`}
          />
        </div>
        <p
          className={`mt-1 text-xs text-ink-soft ${
            side === "left" ? "text-right" : ""
          }`}
        >
          {node.short}
        </p>
      </button>
    </div>
  );
}
