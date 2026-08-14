"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-grain">
      {/* Khối nền chuyển động */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-40 h-80 w-80 rounded-full bg-gold/15 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-content px-5 pb-20 pt-10 md:px-8 md:pb-28 md:pt-14">
        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-2xl border border-ink/10 shadow-lg shadow-ink/5"
        >
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/banner.png"
              alt="Tư tưởng Hồ Chí Minh về Nhà nước của dân, do dân, vì dân"
              width={1983}
              height={793}
              priority
              sizes="(max-width: 1152px) 100vw, 1152px"
              className="h-auto w-full"
            />
          </motion.div>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="kicker"
            >
              Tư tưởng Hồ Chí Minh · Học phần HCM202
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-4 font-serif text-5xl font-bold leading-[0.98] tracking-tight text-ink sm:text-6xl"
            >
              Đừng đọc lý thuyết.
              <span className="block text-primary">Hãy trải nghiệm nó.</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-lg leading-relaxed text-ink-soft">
              Một hành trình tương tác để hiểu tư tưởng Hồ Chí Minh về Nhà nước
              của dân, do dân, vì dân — bằng sơ đồ, mô phỏng, quiz và trợ giảng AI.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="/learn" className="btn-primary">
                Bắt đầu khám phá <ArrowRight size={16} />
              </Link>
              <Link href="/concepts" className="btn-ghost">
                Sơ đồ khái niệm
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
