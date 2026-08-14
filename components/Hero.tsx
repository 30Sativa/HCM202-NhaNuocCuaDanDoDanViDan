"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[58vh] w-full items-end overflow-hidden md:min-h-[70vh]">
      {/* Banner nền — full viền */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/banner.png"
          alt="Tư tưởng Hồ Chí Minh về Nhà nước của dân, do dân, vì dân"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Lớp tối để chữ nổi */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/45 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/50 to-transparent" />

      {/* Chữ đè lên banner */}
      <div className="relative mx-auto w-full max-w-content px-5 pb-12 md:px-8 md:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-gold-light"
        >
          Tư tưởng Hồ Chí Minh · Học phần HCM202
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-2xl font-serif text-4xl font-bold leading-[0.98] tracking-tight text-paper drop-shadow-lg sm:text-5xl md:text-6xl"
        >
          Đừng đọc lý thuyết.
          <span className="block text-gold-light">Hãy trải nghiệm nó.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="mt-5 max-w-xl text-base leading-relaxed text-paper/85 md:text-lg"
        >
          Một hành trình tương tác để hiểu tư tưởng Hồ Chí Minh về Nhà nước của
          dân, do dân, vì dân — bằng sơ đồ, mô phỏng, quiz và trợ giảng AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 font-mono text-sm uppercase tracking-widest text-primary transition-all duration-200 hover:-translate-y-0.5 hover:gap-3 hover:shadow-lg active:translate-y-0 active:scale-[0.97]"
          >
            Bắt đầu khám phá <ArrowRight size={16} />
          </Link>
          <Link
            href="/concepts"
            className="inline-flex items-center gap-2 rounded-full border border-paper/50 px-6 py-3 font-mono text-sm uppercase tracking-widest text-paper transition-all duration-200 hover:-translate-y-0.5 hover:border-paper hover:gap-3 active:translate-y-0 active:scale-[0.97]"
          >
            Sơ đồ khái niệm
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
