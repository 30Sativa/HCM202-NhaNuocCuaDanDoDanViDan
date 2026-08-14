"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, RotateCcw, ArrowRight } from "lucide-react";
import { quiz } from "@/data/quiz";

export default function QuizRunner() {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [wrong, setWrong] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  const q = quiz[idx];
  const answered = picked !== null;
  const isCorrect = picked === q.correct;

  function choose(key: string) {
    if (answered) return;
    setPicked(key);
    if (key === q.correct) setScore((s) => s + 1);
    else setWrong((w) => [...w, q.concept]);
  }

  function next() {
    if (idx + 1 >= quiz.length) {
      setDone(true);
      return;
    }
    setIdx((i) => i + 1);
    setPicked(null);
  }

  function reset() {
    setIdx(0);
    setPicked(null);
    setScore(0);
    setWrong([]);
    setDone(false);
  }

  if (done) {
    const total = quiz.length;
    const pct = Math.round((score / total) * 100);
    const grade = ((score / total) * 10).toFixed(1);
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mx-auto max-w-xl rounded-2xl border border-primary/20 bg-primary/[0.04] p-8 text-center"
      >
        <span className="kicker">Kết quả</span>
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
          Bạn trả lời đúng {score}/{total} câu.
        </p>

        {wrong.length > 0 ? (
          <div className="mt-6 rounded-xl border border-ink/10 bg-paper p-5 text-left">
            <span className="font-mono text-xs uppercase tracking-wider text-ink-soft">
              Cần ôn thêm
            </span>
            <ul className="mt-2 flex flex-wrap gap-2">
              {Array.from(new Set(wrong)).map((c) => (
                <li
                  key={c}
                  className="rounded-full bg-gold/20 px-3 py-1 text-sm text-primary"
                >
                  → {c}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="mt-6 font-serif text-lg text-primary">
            Xuất sắc! Bạn đã nắm vững toàn bộ nội dung.
          </p>
        )}

        <button onClick={reset} className="btn-primary mt-7">
          <RotateCcw size={16} /> Làm lại
        </button>
      </motion.div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      {/* progress */}
      <div className="mb-6 flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-wider text-ink-soft">
          Câu {idx + 1} / {quiz.length}
        </span>
        <div className="h-1.5 w-40 overflow-hidden rounded-full bg-ink/10">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${((idx + (answered ? 1 : 0)) / quiz.length) * 100}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={q.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl border border-ink/10 bg-paper-2/50 p-7"
        >
          {q.scenario && (
            <div className="mb-5 rounded-xl border-l-2 border-gold bg-paper p-4">
              <span className="font-mono text-xs uppercase tracking-wider text-gold-dark">
                Tình huống
              </span>
              <p className="mt-1.5 text-sm leading-relaxed text-ink">
                {q.scenario}
              </p>
            </div>
          )}

          <h3 className="font-serif text-2xl font-semibold text-ink">
            {q.question}
          </h3>

          <div className="mt-5 space-y-2.5">
            {q.options.map((opt) => {
              const chosen = picked === opt.key;
              const correct = opt.key === q.correct;
              let style =
                "border-ink/15 bg-paper hover:border-primary hover:bg-primary/5";
              if (answered) {
                if (correct)
                  style = "border-green-600/50 bg-green-600/10";
                else if (chosen)
                  style = "border-primary/50 bg-primary/10";
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
                  {answered && correct && (
                    <Check size={18} className="text-green-700" />
                  )}
                  {answered && chosen && !correct && (
                    <X size={18} className="text-primary" />
                  )}
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
                <div
                  className={`rounded-xl p-5 ${
                    isCorrect ? "bg-green-600/10" : "bg-primary/[0.06]"
                  }`}
                >
                  <p
                    className={`font-serif text-lg font-semibold ${
                      isCorrect ? "text-green-800" : "text-primary"
                    }`}
                  >
                    {isCorrect ? "✓ Chính xác" : "✗ Chưa đúng"} — {q.concept}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink">
                    {q.explanation}
                  </p>
                </div>
                <div className="mt-4 flex justify-end">
                  <button onClick={next} className="btn-primary">
                    {idx + 1 >= quiz.length ? "Xem kết quả" : "Câu tiếp"}
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
