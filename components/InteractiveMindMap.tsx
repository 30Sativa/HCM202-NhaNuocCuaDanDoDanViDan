"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";
import { mindTree, type TreeNode } from "@/data/mindmap";
import { useAI } from "./ai/AIProvider";

export default function InteractiveMindMap() {
  return (
    <div className="rounded-2xl border border-ink/10 bg-paper-2/40 p-3 sm:p-5">
      <div className="overflow-x-auto pb-3">
        <div className="min-w-max py-2">
          <Node node={mindTree} depth={0} tone="primary" inherited="" defaultOpen />
        </div>
      </div>
      <p className="mt-1 flex flex-wrap items-center gap-1.5 px-1 font-mono text-[0.7rem] uppercase tracking-wider text-ink-soft">
        <ChevronRight size={12} /> Nhấn để mở nhánh sang phải ·{" "}
        <Sparkles size={12} className="text-primary" /> hỏi AI riêng từng mục ·
        có thể kéo ngang
      </p>
    </div>
  );
}

function Node({
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
  const context = node.aiContext || inherited;
  const canAsk = depth > 0 && (hasChildren || !!node.aiContext);

  const dot = effTone === "gold" ? "bg-gold-dark" : "bg-primary";
  const line = effTone === "gold" ? "border-gold-dark/30" : "border-primary/25";

  function ask() {
    const content = node.aiContext
      ? node.aiContext
      : `${inherited}\n\n(Tập trung vào ý: ${node.label})`;
    askAbout(node.label, content);
  }

  // Kiểu nút theo cấp
  const pill =
    depth === 0
      ? "bg-ink text-paper shadow-md"
      : depth === 1
        ? `border-2 bg-paper ${
            effTone === "gold" ? "border-gold-dark/50" : "border-primary/50"
          } ${open ? "" : "hover:shadow-sm"}`
        : "border border-ink/12 bg-paper hover:border-primary/30";

  const labelClass =
    depth === 0
      ? "font-serif text-lg font-bold leading-tight"
      : depth === 1
        ? `font-serif text-base font-bold ${
            effTone === "gold" ? "text-gold-dark" : "text-primary"
          }`
        : depth === 2
          ? "text-sm font-semibold text-ink"
          : "text-sm text-ink-soft";

  return (
    <div className="flex items-center">
      {/* Nút của node */}
      <div
        className={`flex flex-none items-center gap-2 rounded-xl px-3.5 py-2.5 transition-colors ${pill}`}
      >
        <button
          onClick={() => hasChildren && setOpen((v) => !v)}
          className={`flex items-center gap-2 text-left ${
            hasChildren ? "" : "cursor-default"
          }`}
          aria-expanded={hasChildren ? open : undefined}
        >
          {hasChildren && depth > 0 && (
            <ChevronRight
              size={16}
              className={`flex-none transition-transform ${
                open ? "rotate-90" : ""
              } ${effTone === "gold" ? "text-gold-dark" : "text-primary"}`}
            />
          )}
          {depth > 0 && (
            <span className={`h-2 w-2 flex-none rounded-full ${dot}`} />
          )}
          <span className={`max-w-[15rem] ${labelClass}`}>{node.label}</span>
        </button>

        {canAsk && (
          <button
            onClick={ask}
            title={`Hỏi DânBot về "${node.label}"`}
            className="flex flex-none items-center justify-center rounded-full bg-primary p-1.5 text-paper transition-colors hover:bg-primary-dark"
          >
            <Sparkles size={13} />
          </button>
        )}
      </div>

      {/* Nhánh con — tỏa sang phải */}
      {hasChildren && open && (
        <div className="flex items-center">
          <span className={`h-px w-6 flex-none border-t border-dashed ${line}`} />
          <motion.div
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className={`flex flex-col gap-3 border-l border-dashed py-1 pl-6 ${line}`}
          >
            {node.children!.map((c) => (
              <Node
                key={c.id}
                node={c}
                depth={depth + 1}
                tone={effTone}
                inherited={context}
              />
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
}
