"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Loader2, Check, X, ArrowRight, RotateCcw, Wand2 } from "lucide-react";
import { useAI } from "./AIProvider";
import ConnectForm from "./ConnectForm";
import { generateQuiz, type AiQuizQuestion } from "@/lib/ai";
import { buildSystemPrompt } from "@/data/knowledge";
import { modules } from "@/data/modules";

type Phase = "config" | "loading" | "playing" | "done";

const TOPICS = [
  "Toàn bộ chương",
  ...modules.map((m) => m.title),
  "Kiểm soát quyền lực",
  "Pháp quyền nhân nghĩa",
];
const COUNTS = [3, 5, 10];

export default function AiQuizRunner() {
  const { apiKey, ready } = useAI();
  const [phase, setPhase] = useState<Phase>("config");
  const [topic, setTopic] = useState(TOPICS[0]);
  const [count, setCount] = useState(5);
  const [error, setError] = useState<string | null>(null);

  const [questions, setQuestions] = useState<AiQuizQuestion[]>([]);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [wrong, setWrong] = useState<string[]>([]);

  async function start() {
    if (!apiKey) return;
    setPhase("loading");
    setError(null);
    try {
      const qs = await generateQuiz(apiKey, buildSystemPrompt(topic), topic, count);
      setQuestions(qs);
      setIdx(0);
      setPicked(null);
      setScore(0);
      setWrong([]);
      setPhase("playing");
    } catch (e) {
      setError((e as Error).message);
      setPhase("config");
    }
  }

  function choose(key: string) {
    if (picked !== null) return;
    setPicked(key);
    const q = questions[idx];
    if (key === q.correct) setScore((s) => s + 1);
    else setWrong((w) => [...w, q.concept]);
  }

  function next() {
    if (idx + 1 >= questions.length) {
      setPhase("done");
      return;
    }
    setIdx((i) => i + 1);
    setPicked(null);
  }

  // Chưa kết nối AI
  if (!ready) {
    return (
      <div className="mx-auto max-w-xl">
        <div className="rounded-2xl border border-primary/20 bg-primary/[0.04] p-6 text-center">
          <Sparkles size={24} className="mx-auto text-primary" />
          <h2 className="mt-3 font-serif text-2xl font-bold text-ink">
            Kết nối DânBot để tạo đề
          </h2>
          <p className="mt-1.5 text-sm text-ink-soft">
            AI Quiz dùng API key của bạn để tự sinh câu hỏi và chấm điểm ngay.
          </p>
        </div>
        <div className="mt-5">
          <ConnectForm />
        </div>
      </div>
    );
  }

  // Đang sinh đề
  if (phase === "loading") {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center py-16 text-center">
        <div className="relative">
          <Wand2 size={40} className="text-primary" />
          <Loader2 size={40} className="absolute inset-0 animate-spin text-primary/30" />
        </div>
        <p className="mt-5 font-serif text-xl font-bold text-ink">
          DânBot đang soạn đề…
        </p>
        <p className="mt-1 text-sm text-ink-soft">
          {count} câu về “{topic}”
        </p>
      </div>
    );
  }

  // Kết quả
  if (phase === "done") {
    const total = questions.length;
    const pct = Math.round((score / total) * 100);
    const grade = ((score / total) * 10).toFixed(1);
    const weak = Array.from(new Set(wrong));
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mx-auto max-w-xl rounded-2xl border border-primary/20 bg-primary/[0.04] p-8 text-center"
      >
        <span className="kicker">Kết quả · AI Quiz</span>
        <p className="mt-4 font-serif text-6xl font-bold text-primary">
          {grade}
          <span className="text-2xl text-ink-soft"> / 10</span>
        </p>
        <div className="mx-auto mt-5 h-3 max-w-sm overflow-hidden rounded-full bg-ink/10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full rounded-full bg-primary"
          />
        </div>
        <p className="mt-4 text-ink-soft">
          Đúng {score}/{total} câu về “{topic}”.
        </p>

        {weak.length > 0 ? (
          <div className="mt-6 rounded-xl border border-ink/10 bg-paper p-5 text-left">
            <span className="font-mono text-xs uppercase tracking-wider text-ink-soft">
              Cần ôn thêm
            </span>
            <ul className="mt-2 flex flex-wrap gap-2">
              {weak.map((c) => (
                <li key={c} className="rounded-full bg-gold/20 px-3 py-1 text-sm text-primary">
                  → {c}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="mt-6 font-serif text-lg text-primary">
            Xuất sắc! Bạn nắm rất chắc phần này.
          </p>
        )}

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <button onClick={() => setPhase("config")} className="btn-ghost">
            <RotateCcw size={16} /> Đề khác
          </button>
          <button onClick={start} className="btn-primary">
            <Wand2 size={16} /> Sinh lại đề mới
          </button>
        </div>
      </motion.div>
    );
  }

  // Làm bài
  if (phase === "playing") {
    const q = questions[idx];
    const answered = picked !== null;
    const isCorrect = picked === q.correct;
    const opts = [
      { key: "A", label: q.options.A },
      { key: "B", label: q.options.B },
      { key: "C", label: q.options.C },
      { key: "D", label: q.options.D },
    ];
    return (
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-primary">
            <Sparkles size={13} /> AI Quiz · Câu {idx + 1}/{questions.length}
          </span>
          <div className="h-1.5 w-40 overflow-hidden rounded-full bg-ink/10">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${((idx + (answered ? 1 : 0)) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-ink/10 bg-paper-2/50 p-7"
          >
            <h3 className="font-serif text-2xl font-semibold text-ink">{q.question}</h3>

            <div className="mt-5 space-y-2.5">
              {opts.map((opt) => {
                const chosen = picked === opt.key;
                const correct = opt.key === q.correct;
                let style = "border-ink/15 bg-paper hover:border-primary hover:bg-primary/5";
                if (answered) {
                  if (correct) style = "border-green-600/50 bg-green-600/10";
                  else if (chosen) style = "border-primary/50 bg-primary/10";
                  else style = "border-ink/10 bg-paper opacity-60";
                }
                return (
                  <button
                    key={opt.key}
                    onClick={() => choose(opt.key)}
                    disabled={answered}
                    className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all ${style}`}
                  >
                    <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full border border-ink/20 font-mono text-sm">
                      {opt.key}
                    </span>
                    <span className="flex-1 text-sm text-ink">{opt.label}</span>
                    {answered && correct && <Check size={18} className="text-green-700" />}
                    {answered && chosen && !correct && <X size={18} className="text-primary" />}
                  </button>
                );
              })}
            </div>

            <AnimatePresence>
              {answered && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-5 overflow-hidden"
                >
                  <div className={`rounded-xl p-5 ${isCorrect ? "bg-green-600/10" : "bg-primary/[0.06]"}`}>
                    <p className={`font-serif text-lg font-semibold ${isCorrect ? "text-green-800" : "text-primary"}`}>
                      {isCorrect ? "✓ Chính xác" : "✗ Chưa đúng"} — {q.concept}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink">{q.explanation}</p>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button onClick={next} className="btn-primary">
                      {idx + 1 >= questions.length ? "Xem kết quả" : "Câu tiếp"}
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  // Cấu hình
  return (
    <div className="mx-auto max-w-xl">
      <div className="rounded-2xl border border-ink/10 bg-paper-2/50 p-7">
        <div className="flex items-center gap-2">
          <Sparkles size={18} className="text-primary" />
          <h2 className="font-serif text-2xl font-bold text-ink">Tạo đề bằng AI</h2>
        </div>
        <p className="mt-1.5 text-sm text-ink-soft">
          DânBot sẽ tự soạn câu hỏi bám sát bài học rồi chấm điểm cho bạn.
        </p>

        <div className="mt-6">
          <span className="font-mono text-xs uppercase tracking-wider text-ink-soft">Chủ đề</span>
          <div className="mt-2 flex flex-wrap gap-2">
            {TOPICS.map((t) => (
              <button
                key={t}
                onClick={() => setTopic(t)}
                className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                  topic === t
                    ? "border-primary bg-primary text-paper"
                    : "border-ink/15 bg-paper text-ink-soft hover:border-primary hover:text-primary"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <span className="font-mono text-xs uppercase tracking-wider text-ink-soft">Số câu</span>
          <div className="mt-2 flex gap-2">
            {COUNTS.map((c) => (
              <button
                key={c}
                onClick={() => setCount(c)}
                className={`rounded-xl border px-5 py-2 font-serif text-lg font-semibold transition-colors ${
                  count === c
                    ? "border-primary bg-primary text-paper"
                    : "border-ink/15 bg-paper text-ink hover:border-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {error && (
          <p className="mt-5 rounded-lg bg-primary/[0.06] px-3 py-2 text-sm text-primary">{error}</p>
        )}

        <button onClick={start} className="btn-primary mt-7 w-full justify-center">
          <Wand2 size={16} /> Bắt đầu tạo đề
        </button>
      </div>
    </div>
  );
}
