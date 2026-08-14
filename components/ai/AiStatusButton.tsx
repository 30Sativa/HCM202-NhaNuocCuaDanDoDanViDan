"use client";

import { Sparkles } from "lucide-react";
import { useAI } from "./AIProvider";

export default function AiStatusButton() {
  const { status, ready, setOpen } = useAI();

  const dot =
    status === "error"
      ? "bg-red-500"
      : ready
        ? "bg-green-500"
        : "bg-ink/30";

  return (
    <button
      onClick={() => setOpen(true)}
      className="flex items-center gap-1.5 rounded-full border border-ink/15 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-ink-soft transition-colors hover:border-primary hover:text-primary"
      title={ready ? "DânBot đã sẵn sàng" : "Kết nối DânBot"}
    >
      <Sparkles size={13} />
      <span className="hidden sm:inline">AI</span>
      <span className={`h-2 w-2 rounded-full ${dot}`} />
    </button>
  );
}
