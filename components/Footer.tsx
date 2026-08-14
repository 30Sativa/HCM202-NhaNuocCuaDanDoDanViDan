import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/10 bg-paper-2/40">
      <div className="mx-auto max-w-content px-5 py-12 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl font-bold text-primary">3D</span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">
                DÂN • DO • VÌ
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Một hành trình tương tác về tư tưởng Hồ Chí Minh: Nhà nước của dân,
              do dân, vì dân.
            </p>
            <p className="mt-3 font-mono text-xs italic text-primary">
              “Don&apos;t read the theory. Experience it.”
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-2">
            <Link href="/learn" className="font-mono text-xs uppercase tracking-wider text-ink-soft hover:text-primary">Học</Link>
            <Link href="/concepts" className="font-mono text-xs uppercase tracking-wider text-ink-soft hover:text-primary">Khái niệm</Link>
            <Link href="/timeline" className="font-mono text-xs uppercase tracking-wider text-ink-soft hover:text-primary">Timeline</Link>
            <Link href="/quiz" className="font-mono text-xs uppercase tracking-wider text-ink-soft hover:text-primary">Quiz</Link>
            <Link href="/flashcards" className="font-mono text-xs uppercase tracking-wider text-ink-soft hover:text-primary">Flashcards</Link>
            <Link href="/settings/ai" className="font-mono text-xs uppercase tracking-wider text-ink-soft hover:text-primary">DânBot AI</Link>
            <Link href="/about" className="font-mono text-xs uppercase tracking-wider text-ink-soft hover:text-primary">Giới thiệu</Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-ink/10 pt-6 text-xs text-ink-soft md:flex-row md:items-center md:justify-between">
          <span className="font-mono uppercase tracking-wider">
            HCM202 · Tư tưởng Hồ Chí Minh
          </span>
          <span className="font-mono">
            Nội dung tổng hợp từ Session 13–17 · Frontend học tập tương tác
          </span>
        </div>
      </div>
    </footer>
  );
}
