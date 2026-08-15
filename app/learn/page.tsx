import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { modules } from "@/data/modules";

export const metadata = {
  title: "Học · Tư tưởng Hồ Chí Minh",
  description: "Sáu module về tư tưởng Hồ Chí Minh: Nhà nước của dân, do dân, vì dân và vận dụng.",
};

export default function LearnPage() {
  return (
    <>
      <PageHeader
        kicker="Nội dung học tập"
        title="Học theo module"
        intro="Kiến thức được chia thành 5 chặng, dẫn bạn đi từ dân chủ → của dân, do dân, vì dân → pháp quyền → kiểm soát quyền lực → vận dụng."
      />

      <div className="mx-auto max-w-content px-5 py-16 md:px-8">
        <div className="space-y-5">
          {modules.map((m, i) => (
            <Reveal key={m.slug} delay={i * 0.06}>
              <Link
                href={`/learn/${m.slug}`}
                className="group grid gap-4 rounded-2xl border border-ink/10 bg-paper-2/40 p-7 transition-all hover:border-primary/40 md:grid-cols-[6rem_1fr_auto] md:items-center"
              >
                <span className="font-serif text-5xl font-bold text-primary/25 group-hover:text-primary/50">
                  {m.index}
                </span>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-ink group-hover:text-primary md:text-3xl">
                    {m.title}
                  </h2>
                  <p className="mt-1 text-ink-soft">{m.summary}</p>
                </div>
                <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary md:justify-self-end">
                  Khám phá
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
