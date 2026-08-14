"use client";

import { useState } from "react";
import { Loader2, Check, Lock, Trash2 } from "lucide-react";
import { useAI } from "./AIProvider";

export default function ConnectForm({ compact = false }: { compact?: boolean }) {
  const { status, errorMsg, ready, connect, disconnect } = useAI();
  const [value, setValue] = useState("");
  const testing = status === "testing";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const ok = await connect(value);
    if (ok) setValue("");
  }

  if (ready) {
    return (
      <div className={compact ? "" : "rounded-2xl border border-green-600/30 bg-green-600/[0.06] p-6"}>
        <div className="flex items-center gap-2 text-green-800">
          <Check size={18} />
          <span className="font-semibold">DânBot đã sẵn sàng</span>
        </div>
        <p className="mt-2 text-sm text-ink-soft">
          Key của bạn được lưu trong trình duyệt này và chỉ dùng để gọi AI trực
          tiếp từ máy bạn. Website không lưu key.
        </p>
        <button
          onClick={disconnect}
          className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-ink/20 px-4 py-2 font-mono text-xs uppercase tracking-wider text-ink-soft transition-colors hover:border-primary hover:text-primary"
        >
          <Trash2 size={13} /> Xóa API key
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "" : "rounded-2xl border border-ink/10 bg-paper-2/50 p-6"}>
      <label className="font-mono text-xs uppercase tracking-wider text-ink-soft">
        Google Gemini API Key
      </label>
      <input
        type="password"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="AIza..."
        autoComplete="off"
        className="mt-2 w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 font-mono text-sm outline-none transition-colors focus:border-primary"
      />
      <button
        type="submit"
        disabled={testing || !value.trim()}
        className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-paper transition-all hover:bg-primary-dark disabled:opacity-50"
      >
        {testing ? (
          <>
            <Loader2 size={14} className="animate-spin" /> Đang kiểm tra…
          </>
        ) : (
          <>Kết nối</>
        )}
      </button>

      {status === "error" && errorMsg && (
        <p className="mt-3 rounded-lg bg-primary/[0.06] px-3 py-2 text-sm text-primary">
          {errorMsg}
        </p>
      )}

      <div className="mt-4 flex items-start gap-2 border-t border-ink/10 pt-4 text-xs leading-relaxed text-ink-soft">
        <Lock size={14} className="mt-0.5 flex-none" />
        <span>
          Key được trình duyệt của bạn dùng để gọi AI trực tiếp — không gửi qua
          máy chủ của website. Lấy key miễn phí tại{" "}
          <a
            href="https://aistudio.google.com/apikey"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            aistudio.google.com/apikey
          </a>
          .
        </span>
      </div>
    </form>
  );
}
