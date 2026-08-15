"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Briefcase, GraduationCap } from "lucide-react";
import { team, initials } from "@/data/team";

const AUTO_MS = 2500;
const len = team.length;

// Khoảng cách vòng (wrap) từ index i tới thẻ đang active, trả về trong [-len/2, len/2].
function wrappedOffset(i: number, active: number) {
  let d = i - active;
  if (d > len / 2) d -= len;
  if (d < -len / 2) d += len;
  return d;
}

// Vị trí 3D theo offset (coverflow).
function styleFor(offset: number) {
  const abs = Math.abs(offset);
  if (offset === 0) return { x: 0, rotateY: 0, scale: 1, opacity: 1, z: 30 };
  if (abs === 1)
    return {
      x: offset * 230,
      rotateY: offset > 0 ? -42 : 42,
      scale: 0.82,
      opacity: 0.55,
      z: 20,
    };
  // thẻ phía sau (offset = ±2)
  return { x: 0, rotateY: 0, scale: 0.65, opacity: 0, z: 10 };
}

export default function TeamCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((dir: 1 | -1) => {
    setActive((a) => (a + dir + len) % len);
  }, []);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => setActive((a) => (a + 1) % len), AUTO_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused]);

  const current = team[active];

  return (
    <div
      className="select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Sân khấu 3D */}
      <div
        className="relative mx-auto h-[22rem] w-full max-w-3xl"
        style={{ perspective: "1200px" }}
      >
        {team.map((m, i) => {
          const offset = wrappedOffset(i, active);
          const s = styleFor(offset);
          const isActive = offset === 0;
          return (
            <motion.button
              key={m.id}
              type="button"
              onClick={() => setActive(i)}
              aria-label={m.name}
              className="absolute left-1/2 top-1/2 w-72 cursor-pointer"
              style={{
                transformStyle: "preserve-3d",
                zIndex: s.z,
                marginLeft: "-9rem",
                pointerEvents: s.opacity === 0 ? "none" : "auto",
              }}
              initial={false}
              animate={{
                x: s.x,
                y: "-50%",
                rotateY: s.rotateY,
                scale: s.scale,
                opacity: s.opacity,
              }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
            >
              <div
                className={`flex h-80 flex-col items-center rounded-3xl border p-7 text-center shadow-xl backdrop-blur-sm ${
                  isActive
                    ? "border-primary/30 bg-paper"
                    : "border-ink/10 bg-paper-2/70"
                }`}
              >
                {/* Avatar chữ cái */}
                <div
                  className={`flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br ${m.accent} font-serif text-3xl font-bold text-paper shadow-lg`}
                >
                  {initials(m.name)}
                </div>

                <h3 className="mt-5 font-serif text-2xl font-bold text-ink">
                  {m.name}
                </h3>

                <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-gold-dark">
                  <GraduationCap size={13} /> {m.major}
                </span>

                <div className="mt-4 flex items-start gap-2 text-left">
                  <Briefcase size={15} className="mt-0.5 flex-none text-primary" />
                  <p className="text-sm leading-snug text-ink-soft">{m.role}</p>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Điều khiển */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={() => go(-1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 transition-colors hover:border-primary hover:text-primary"
          aria-label="Thành viên trước"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex items-center gap-2">
          {team.map((m, i) => (
            <button
              key={m.id}
              onClick={() => setActive(i)}
              aria-label={`Tới ${m.name}`}
              className={`h-2.5 rounded-full transition-all ${
                i === active ? "w-7 bg-primary" : "w-2.5 bg-ink/25 hover:bg-ink/40"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => go(1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 transition-colors hover:border-primary hover:text-primary"
          aria-label="Thành viên sau"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <p className="mt-3 text-center font-mono text-xs uppercase tracking-wider text-ink-soft">
        {active + 1} / {len} · {current.name}
      </p>
    </div>
  );
}
