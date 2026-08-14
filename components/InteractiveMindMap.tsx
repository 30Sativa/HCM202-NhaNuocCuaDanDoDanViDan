"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";
import { mindRoot, mindNodes, type MindNode } from "@/data/mindmap";
import { useAI } from "./ai/AIProvider";

export default function InteractiveMindMap() {
  const { askAbout } = useAI();
  const [openIds, setOpenIds] = useState<Set<string>>(new Set([mindNodes[0].id]));

  const toggle = (id: string) =>
    setOpenIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  return (
    <div className="rounded-2xl border border-ink/10 bg-paper-2/40 p-5 sm:p-8">
      {/* Nút gốc */}
      <div className="rounded-xl bg-ink px-5 py-3.5 text-paper shadow-md">
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-gold-light">
          {mindRoot.title}
        </span>
        <p className="font-serif text-xl font-bold leading-tight">
          {mindRoot.lines.join(" · ")}
        </p>
      </div>

      {/* Cây nhánh */}
      <div className="ml-3 mt-2 space-y-2 border-l border-dashed border-ink/20 pl-4 sm:ml-5 sm:pl-6">
        {mindNodes.map((node) => (
          <NodeRow
            key={node.id}
            node={node}
            open={openIds.has(node.id)}
            onToggle={() => toggle(node.id)}
            onAsk={() => askAbout(node.title, node.aiContext)}
          />
        ))}
      </div>

      <p className="mt-5 flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-wider text-ink-soft">
        <ChevronRight size={12} /> Nhấn để mở nhánh ·{" "}
        <Sparkles size={12} className="text-primary" /> hỏi AI riêng từng mục
      </p>
    </div>
  );
}

function NodeRow({
  node,
  open,
  onToggle,
  onAsk,
}: {
  node: MindNode;
  open: boolean;
  onToggle: () => void;
  onAsk: () => void;
}) {
  const dot = node.tone === "primary" ? "bg-primary" : "bg-gold-dark";
  const titleColor = node.tone === "primary" ? "text-primary" : "text-gold-dark";

  return (
    <div>
      <div
        className={`flex items-center gap-2 rounded-xl border p-2.5 transition-colors ${
          open
            ? "border-primary/30 bg-primary/[0.05]"
            : "border-ink/10 bg-paper hover:border-primary/30"
        }`}
      >
        {/* Mở/đóng nhánh */}
        <button
          onClick={onToggle}
          className="flex flex-1 items-center gap-2.5 text-left"
          aria-expanded={open}
        >
          <ChevronRight
            size={18}
            className={`flex-none text-ink-soft transition-transform ${
              open ? "rotate-90 text-primary" : ""
            }`}
          />
          <span className={`h-2.5 w-2.5 flex-none rounded-full ${dot}`} />
          <span className="min-w-0">
            <span className={`font-serif text-lg font-bold ${titleColor}`}>
              {node.title}
            </span>
            <span className="ml-2 text-xs text-ink-soft">{node.short}</span>
          </span>
        </button>

        {/* Hỏi AI riêng mục này */}
        <button
          onClick={onAsk}
          title={`Hỏi DânBot về "${node.title}"`}
          className="flex flex-none items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-wider text-paper transition-all hover:bg-primary-dark hover:gap-2"
        >
          <Sparkles size={13} />
          <span className="hidden sm:inline">Hỏi AI</span>
        </button>
      </div>

      {/* Nhánh con */}
      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="ml-5 mt-2 space-y-1.5 border-l border-dashed border-ink/20 pl-4 sm:ml-7 sm:pl-6"
        >
          {node.points.map((p) => (
            <li
              key={p}
              className="flex items-start gap-2 rounded-lg bg-paper px-3 py-2 text-sm text-ink"
            >
              <span className={`mt-1.5 h-1.5 w-1.5 flex-none rounded-full ${dot}`} />
              {p}
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}
