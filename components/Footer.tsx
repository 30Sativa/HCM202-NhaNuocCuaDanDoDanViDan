import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/10 bg-paper-2/40">
      <div className="mx-auto max-w-content px-5 py-12 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Tư tưởng Hồ Chí Minh"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover object-[center_30%] ring-1 ring-ink/10"
              />
              <span className="leading-tight">
                <span className="block font-serif text-xl font-bold text-primary">
                  Tư tưởng Hồ Chí Minh
                </span>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink-soft">
                  Của dân · Do dân · Vì dân
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Một hành trình tương tác về tư tưởng Hồ Chí Minh: Nhà nước của dân,
              do dân, vì dân.
            </p>
            <p className="mt-3 font-mono text-xs italic text-primary">
              “Đừng đọc lý thuyết. Hãy trải nghiệm nó.”
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-2">
            <Link href="/learn" className="font-mono text-xs uppercase tracking-wider text-ink-soft hover:text-primary">Học</Link>
            <Link href="/#khai-niem" className="font-mono text-xs uppercase tracking-wider text-ink-soft hover:text-primary">Khái niệm</Link>
            <Link href="/#timeline" className="font-mono text-xs uppercase tracking-wider text-ink-soft hover:text-primary">Timeline</Link>
            <Link href="/quiz" className="font-mono text-xs uppercase tracking-wider text-ink-soft hover:text-primary">Quiz</Link>
            <Link href="/flashcards" className="font-mono text-xs uppercase tracking-wider text-ink-soft hover:text-primary">Flashcards</Link>
            <Link href="/settings/ai" className="font-mono text-xs uppercase tracking-wider text-ink-soft hover:text-primary">DânBot AI</Link>
            <Link href="/#ve-du-an" className="font-mono text-xs uppercase tracking-wider text-ink-soft hover:text-primary">Giới thiệu</Link>
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
