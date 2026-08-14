"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

const words = ["CỦA DÂN.", "DO DÂN.", "VÌ DÂN."];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-grain">
      {/* decorative flow on the right */}
      <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex">
        {["CỦA DÂN", "DO DÂN", "VÌ DÂN"].map((w, i) => (
          <div key={w} className="flex flex-col items-center gap-3">
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.25 }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-ink-soft"
            >
              {w}
            </motion.span>
            {i < 2 && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.95 + i * 0.25 }}
              >
                <ArrowDown size={14} className="text-gold-dark" />
              </motion.span>
            )}
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-content px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-block overflow-hidden rounded-full ring-1 ring-ink/10 shadow-sm"
        >
          <Image
            src="/logo.png"
            alt="Tư tưởng Hồ Chí Minh — Nhà nước của dân, do dân, vì dân"
            width={96}
            height={96}
            priority
            className="h-20 w-20 object-cover object-[center_30%] md:h-24 md:w-24"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="kicker"
        >
          Tư tưởng Hồ Chí Minh · Học phần HCM202
        </motion.p>

        <h1 className="mt-6 font-serif text-[15vw] font-bold leading-[0.92] tracking-tight sm:text-7xl md:text-8xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="block text-ink"
          >
            NHÀ NƯỚC
          </motion.span>
          {words.map((w, i) => (
            <motion.span
              key={w}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.15 }}
              className="block text-primary"
            >
              {w}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 max-w-md text-lg leading-relaxed text-ink-soft"
        >
          Một hành trình tương tác để hiểu tư tưởng Hồ Chí Minh về Nhà nước —
          không đọc lý thuyết, mà{" "}
          <span className="font-semibold text-ink">trải nghiệm nó</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Link href="/learn" className="btn-primary">
            Bắt đầu khám phá <ArrowRight size={16} />
          </Link>
          <Link href="/concepts" className="btn-ghost">
            Sơ đồ khái niệm
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
