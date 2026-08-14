"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  Sparkles,
  X,
  Send,
  Loader2,
  MessageSquare,
  PenLine,
  RotateCcw,
} from "lucide-react";
import { useAI } from "./AIProvider";
import ConnectForm from "./ConnectForm";
import { streamChat, complete, type ChatMessage } from "@/lib/ai";
import { buildSystemPrompt } from "@/data/knowledge";

type Mode = "chat" | "grade";

// Chuyển **đậm** và xuống dòng thành HTML đơn giản.
function rich(text: string) {
  return text.split("\n").map((line, i) => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g).map((p, j) =>
      p.startsWith("**") && p.endsWith("**") ? (
        <strong key={j}>{p.slice(2, -2)}</strong>
      ) : (
        <span key={j}>{p}</span>
      )
    );
    return (
      <span key={i}>
        {parts}
        <br />
      </span>
    );
  });
}

export default function DanBot() {
  const { apiKey, ready, topic, open, setOpen } = useAI();
  const [mode, setMode] = useState<Mode>("chat");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);

  // Chấm tự luận
  const [essay, setEssay] = useState("");
  const [grade, setGrade] = useState<string | null>(null);

  const abortRef = useRef<AbortController | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const suggestions = topic
    ? [
        `Giải thích phần "${topic}"`,
        `Cho ví dụ dễ hiểu`,
        `Kiểm tra mình 3 câu`,
        `Dạy mình kiểu hỏi–đáp`,
      ]
    : [
        `"Của dân" nghĩa là gì?`,
        `Phân biệt của dân và do dân`,
        `Vì sao phải kiểm soát quyền lực?`,
        `Tạo cho mình 3 câu quiz`,
      ];

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, busy]);

  const send = useCallback(
    async (text: string) => {
      if (!apiKey || busy || !text.trim()) return;
      const userMsg: ChatMessage = { role: "user", content: text.trim() };
      const history = [...messages, userMsg];
      setMessages([...history, { role: "assistant", content: "" }]);
      setInput("");
      setBusy(true);

      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;

      try {
        await streamChat(
          apiKey,
          buildSystemPrompt(topic ?? undefined),
          history,
          (delta) => {
            setMessages((prev) => {
              const next = [...prev];
              const last = next[next.length - 1];
              next[next.length - 1] = { ...last, content: last.content + delta };
              return next;
            });
          },
          { maxTokens: 2048, signal: controller.signal }
        );
      } catch (e) {
        if ((e as Error).name !== "AbortError") {
          setMessages((prev) => {
            const next = [...prev];
            next[next.length - 1] = {
              role: "assistant",
              content: `⚠️ ${(e as Error).message}`,
            };
            return next;
          });
        }
      } finally {
        setBusy(false);
      }
    },
    [apiKey, busy, messages, topic]
  );

  async function gradeEssay() {
    if (!apiKey || busy || !essay.trim()) return;
    setBusy(true);
    setGrade(null);
    const sys = `${buildSystemPrompt(topic ?? undefined)}

## NHIỆM VỤ ĐẶC BIỆT: CHẤM BÀI TỰ LUẬN
Hãy chấm bài tự luận của người học theo rubric. Trả lời theo cấu trúc:
- **Điểm tham khảo: X / 10**
- **Ý đã có:** liệt kê các ý đúng người học đã nêu.
- **Còn thiếu:** liệt kê ý quan trọng còn thiếu (bám sát nguồn kiến thức).
- **Gợi ý cải thiện:** 2-3 gợi ý cụ thể.
Nhận xét khách quan, mang tính xây dựng, khích lệ.`;
    try {
      const result = await complete(
        apiKey,
        sys,
        [
          {
            role: "user",
            content: `Đề bài: Phân tích tư tưởng Hồ Chí Minh về Nhà nước của dân, do dân, vì dân${
              topic ? ` (trọng tâm: ${topic})` : ""
            }.\n\nBài làm của mình:\n"""\n${essay.trim()}\n"""`,
          },
        ],
        2048
      );
      setGrade(result);
    } catch (e) {
      setGrade(`⚠️ ${(e as Error).message}`);
    } finally {
      setBusy(false);
    }
  }

  function reset() {
    abortRef.current?.abort();
    setMessages([]);
    setBusy(false);
  }

  return (
    <>
      {/* Nút nổi */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 text-paper shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:gap-3"
          aria-label="Mở DânBot"
        >
          <Sparkles size={18} />
          <span className="font-mono text-sm uppercase tracking-wider">DânBot</span>
        </button>
      )}

      {/* Panel */}
      {open && (
        <div className="fixed inset-x-0 bottom-0 z-50 flex h-[85vh] flex-col rounded-t-2xl border border-ink/10 bg-paper shadow-2xl sm:inset-x-auto sm:bottom-5 sm:right-5 sm:h-[36rem] sm:w-[26rem] sm:rounded-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-ink/10 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-paper">
                <Sparkles size={16} />
              </div>
              <div className="leading-tight">
                <p className="font-serif text-lg font-bold text-ink">DânBot</p>
                <p className="font-mono text-[0.6rem] uppercase tracking-wider text-ink-soft">
                  AI Study Tutor
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {ready && messages.length > 0 && mode === "chat" && (
                <button
                  onClick={reset}
                  className="rounded-full p-2 text-ink-soft hover:bg-paper-2 hover:text-primary"
                  aria-label="Làm mới"
                >
                  <RotateCcw size={16} />
                </button>
              )}
              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-2 text-ink-soft hover:bg-paper-2"
                aria-label="Đóng"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {!ready ? (
            /* Chưa cấu hình */
            <div className="flex-1 overflow-y-auto p-5">
              <p className="font-serif text-xl font-bold text-ink">
                Kết nối AI để bắt đầu
              </p>
              <p className="mt-1.5 text-sm text-ink-soft">
                DânBot là trợ giảng AI dùng key của chính bạn để giải thích, hỏi
                đáp, tạo quiz và chấm bài tự luận.
              </p>
              <div className="mt-5">
                <ConnectForm compact />
              </div>
            </div>
          ) : (
            <>
              {/* Tabs */}
              <div className="flex gap-1 border-b border-ink/10 px-3 py-2">
                <TabButton active={mode === "chat"} onClick={() => setMode("chat")} icon={<MessageSquare size={14} />}>
                  Hỏi &amp; Học
                </TabButton>
                <TabButton active={mode === "grade"} onClick={() => setMode("grade")} icon={<PenLine size={14} />}>
                  Chấm tự luận
                </TabButton>
              </div>

              {mode === "chat" ? (
                <>
                  {/* Ngữ cảnh */}
                  {topic && (
                    <div className="border-b border-ink/10 bg-paper-2/40 px-4 py-2">
                      <span className="font-mono text-[0.65rem] uppercase tracking-wider text-ink-soft">
                        Đang học
                      </span>
                      <p className="text-sm font-semibold text-primary">{topic}</p>
                    </div>
                  )}

                  {/* Nội dung chat */}
                  <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
                    {messages.length === 0 && (
                      <div className="text-sm text-ink-soft">
                        <p className="font-medium text-ink">👋 Chào bạn!</p>
                        <p className="mt-1">
                          Mình có thể giúp bạn hiểu bài, cho ví dụ, kiểm tra kiến
                          thức. Thử hỏi mình:
                        </p>
                      </div>
                    )}
                    {messages.map((m, i) => (
                      <div
                        key={i}
                        className={`max-w-[88%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                          m.role === "user"
                            ? "ml-auto bg-primary text-paper"
                            : "bg-paper-2 text-ink"
                        }`}
                      >
                        {m.content ? (
                          rich(m.content)
                        ) : (
                          <Loader2 size={15} className="animate-spin text-ink-soft" />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Gợi ý */}
                  {messages.length === 0 && (
                    <div className="flex flex-wrap gap-1.5 px-4 pb-2">
                      {suggestions.map((s) => (
                        <button
                          key={s}
                          onClick={() => send(s)}
                          className="rounded-full border border-ink/15 bg-paper px-3 py-1.5 text-xs text-ink-soft transition-colors hover:border-primary hover:text-primary"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Ô nhập */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      send(input);
                    }}
                    className="flex items-end gap-2 border-t border-ink/10 p-3"
                  >
                    <textarea
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          send(input);
                        }
                      }}
                      rows={1}
                      placeholder="Hỏi DânBot…"
                      className="max-h-24 flex-1 resize-none rounded-xl border border-ink/15 bg-paper px-3 py-2.5 text-sm outline-none focus:border-primary"
                    />
                    <button
                      type="submit"
                      disabled={busy || !input.trim()}
                      className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-primary text-paper transition-colors hover:bg-primary-dark disabled:opacity-40"
                      aria-label="Gửi"
                    >
                      {busy ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                    </button>
                  </form>
                </>
              ) : (
                /* Chấm tự luận */
                <div className="flex-1 overflow-y-auto p-4">
                  <p className="font-serif text-lg font-bold text-ink">
                    Luyện viết tự luận
                  </p>
                  <p className="mt-1 text-sm text-ink-soft">
                    Đề: Phân tích tư tưởng Hồ Chí Minh về Nhà nước của dân, do
                    dân, vì dân{topic ? ` (trọng tâm: ${topic})` : ""}.
                  </p>
                  <textarea
                    value={essay}
                    onChange={(e) => setEssay(e.target.value)}
                    rows={7}
                    placeholder="Nhập câu trả lời của bạn…"
                    className="mt-3 w-full resize-y rounded-xl border border-ink/15 bg-paper px-3 py-2.5 text-sm outline-none focus:border-primary"
                  />
                  <button
                    onClick={gradeEssay}
                    disabled={busy || !essay.trim()}
                    className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-paper transition-all hover:bg-primary-dark disabled:opacity-50"
                  >
                    {busy ? (
                      <>
                        <Loader2 size={14} className="animate-spin" /> Đang chấm…
                      </>
                    ) : (
                      <>Nộp bài</>
                    )}
                  </button>

                  {grade && (
                    <div className="mt-5 rounded-xl border border-primary/20 bg-primary/[0.04] p-4 text-sm leading-relaxed text-ink">
                      {rich(grade)}
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
}

function TabButton({
  active,
  onClick,
  icon,
  children,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg px-3 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
        active ? "bg-primary text-paper" : "text-ink-soft hover:bg-paper-2"
      }`}
    >
      {icon}
      {children}
    </button>
  );
}
