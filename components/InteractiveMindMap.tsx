"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";
import { mindTree, type TreeNode } from "@/data/mindmap";
import { useAI } from "./ai/AIProvider";

export default function InteractiveMindMap() {
  return (
    <div className="rounded-2xl border border-ink/10 bg-paper-2/40 p-4 sm:p-8">
      {/* Gốc */}
      <div className="rounded-xl bg-ink px-5 py-3.5 text-paper shadow-md">
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-gold-light">
          Sơ đồ tư duy
        </span>
        <p className="font-serif text-xl font-bold leading-tight">
          {mindTree.label}
        </p>
      </div>

      {/* Nhánh cấp 1 trở đi (đệ quy) */}
      <div className="ml-2 mt-2 space-y-2 border-l border-dashed border-ink/20 pl-3 sm:ml-4 sm:pl-5">
        {mindTree.children!.map((child, i) => (
          <Item
            key={child.id}
            node={child}
            depth={1}
            tone={child.tone ?? "primary"}
            inherited=""
            defaultOpen={i === 0}
          />
        ))}
      </div>

      <p className="mt-5 flex flex-wrap items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-wider text-ink-soft">
        <ChevronRight size={12} /> Nhấn để mở nhánh, mở tiếp nhánh con ·{" "}
        <Sparkles size={12} className="text-primary" /> hỏi AI riêng từng mục
      </p>
    </div>
  );
}

function Item({
  node,
  depth,
  tone,
  inherited,
  defaultOpen = false,
}: {
  node: TreeNode;
  depth: number;
  tone: "primary" | "gold";
  inherited: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const { askAbout } = useAI();

  const hasChildren = !!node.children?.length;
  const effTone = node.tone ?? tone;
  const dot = effTone === "gold" ? "bg-gold-dark" : "bg-primary";
  const context = node.aiContext || inherited;
  const canAsk = hasChildren || !!node.aiContext;

  const titleColor =
    depth === 1
      ? effTone === "gold"
        ? "text-gold-dark"
        : "text-primary"
      : "text-ink";
  const titleClass =
    depth === 1
      ? "font-serif text-lg font-bold"
      : depth === 2
        ? "text-sm font-semibold"
        : "text-sm";

  function ask() {
    const content = node.aiContext
      ? node.aiContext
      : `${inherited}\n\n(Tập trung vào ý: ${node.label})`;
    askAbout(node.label, content);
  }

  return (
    <div>
      <div
        className={`flex items-center gap-2 rounded-xl border p-2 transition-colors ${
          open && hasChildren
            ? "border-primary/30 bg-primary/[0.05]"
            : "border-ink/10 bg-paper hover:border-primary/30"
        }`}
      >
        <button
          onClick={() => hasChildren && setOpen((v) => !v)}
          className={`flex flex-1 items-center gap-2 text-left ${
            hasChildren ? "" : "cursor-default"
          }`}
          aria-expanded={hasChildren ? open : undefined}
        >
          {hasChildren ? (
            <ChevronRight
              size={17}
              className={`flex-none text-ink-soft transition-transform ${
                open ? "rotate-90 text-primary" : ""
              }`}
            />
          ) : (
            <span className="w-[17px] flex-none" />
          )}
          <span className={`h-2 w-2 flex-none rounded-full ${dot}`} />
          <span className={`min-w-0 ${titleClass} ${titleColor}`}>
            {node.label}
          </span>
        </button>

        {canAsk && (
          <button
            onClick={ask}
            title={`Hỏi DânBot về "${node.label}"`}
            className="flex flex-none items-center gap-1.5 rounded-full bg-primary px-2.5 py-1.5 font-mono text-[0.6rem] uppercase tracking-wider text-paper transition-all hover:bg-primary-dark"
          >
            <Sparkles size={12} />
            <span className="hidden sm:inline">Hỏi AI</span>
          </button>
        )}
      </div>

      {hasChildren && open && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="ml-4 mt-1.5 space-y-1.5 border-l border-dashed border-ink/20 pl-3 sm:ml-6 sm:pl-5"
        >
          {node.children!.map((c) => (
            <Item
              key={c.id}
              node={c}
              depth={depth + 1}
              tone={effTone}
              inherited={context}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}
