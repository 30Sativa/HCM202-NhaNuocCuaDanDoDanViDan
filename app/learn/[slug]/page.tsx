import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import { AiTopic } from "@/components/ai/AIProvider";
import { modules, getModule } from "@/data/modules";

export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const m = getModule(params.slug);
  return {
    title: m ? `${m.title} · Tư tưởng Hồ Chí Minh` : "Không tìm thấy",
    description: m?.summary,
  };
}

export default function ModulePage({ params }: { params: { slug: string } }) {
  const m = getModule(params.slug);
  if (!m) notFound();

  const idx = modules.findIndex((x) => x.slug === m.slug);
  const prev = modules[idx - 1];
  const next = modules[idx + 1];

  return (
    <article>
      <AiTopic title={m.title} />
      {/* header */}
      <div className="border-b border-ink/10 bg-grain">
        <div className="mx-auto max-w-content px-5 py-14 md:px-8 md:py-20">
          <Link
            href="/learn"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-ink-soft hover:text-primary"
          >
            <ArrowLeft size={14} /> Tất cả module
          </Link>
          <div className="mt-6 flex items-baseline gap-5">
            <span className="font-serif text-7xl font-bold text-primary/20">
              {m.index}
            </span>
            <div>
              <span className="kicker">{m.question}</span>
              <h1 className="mt-2 font-serif text-4xl font-bold leading-tight text-ink md:text-5xl">
                {m.title}
              </h1>
            </div>
          </div>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {m.summary}
          </p>
        </div>
      </div>

      {/* body */}
      <div className="mx-auto max-w-3xl px-5 py-16 md:px-8">
        <div className="space-y-12">
          {m.sections.map((s, i) => (
            <Reveal key={i}>
              <section>
                <h2 className="font-serif text-2xl font-bold text-ink md:text-3xl">
                  <span className="mr-3 font-mono text-base text-gold-dark">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {s.body.map((p, j) => (
                    <p key={j} className="leading-relaxed text-ink-soft">
                      {p}
                    </p>
                  ))}
                </div>
                {s.list && (
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {s.list.map((li, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 rounded-lg border border-ink/10 bg-paper-2/40 px-4 py-2.5 text-sm text-ink"
                      >
                        <Check size={15} className="mt-0.5 flex-none text-primary" />
                        {li}
                      </li>
                    ))}
                  </ul>
                )}
                {s.quote && (
                  <blockquote className="mt-5 rounded-r-xl border-l-4 border-primary bg-primary/[0.05] py-4 pl-5 pr-4 font-serif text-lg italic leading-relaxed text-ink">
                    {s.quote}
                  </blockquote>
                )}
              </section>
            </Reveal>
          ))}
        </div>

        {/* takeaways */}
        <Reveal>
          <div className="mt-14 rounded-2xl border border-gold/40 bg-gold/[0.08] p-7">
            <span className="kicker text-gold-dark">Ghi nhớ nhanh</span>
            <ul className="mt-4 space-y-2.5">
              {m.takeaways.map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-ink">
                  <span className="font-serif text-lg font-bold text-primary">
                    {i + 1}.
                  </span>
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* prev / next */}
        <nav className="mt-12 flex items-stretch justify-between gap-4 border-t border-ink/10 pt-8">
          {prev ? (
            <Link
              href={`/learn/${prev.slug}`}
              className="group flex flex-1 flex-col rounded-xl border border-ink/10 p-4 transition-colors hover:border-primary/40"
            >
              <span className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-ink-soft">
                <ArrowLeft size={13} /> Module {prev.index}
              </span>
              <span className="mt-1 font-serif text-lg font-semibold text-ink group-hover:text-primary">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span className="flex-1" />
          )}
          {next ? (
            <Link
              href={`/learn/${next.slug}`}
              className="group flex flex-1 flex-col rounded-xl border border-ink/10 p-4 text-right transition-colors hover:border-primary/40"
            >
              <span className="flex items-center justify-end gap-1.5 font-mono text-xs uppercase tracking-wider text-ink-soft">
                Module {next.index} <ArrowRight size={13} />
              </span>
              <span className="mt-1 font-serif text-lg font-semibold text-ink group-hover:text-primary">
                {next.title}
              </span>
            </Link>
          ) : (
            <Link
              href="/quiz"
              className="group flex flex-1 flex-col rounded-xl border border-primary/30 bg-primary/[0.05] p-4 text-right transition-colors hover:border-primary"
            >
              <span className="flex items-center justify-end gap-1.5 font-mono text-xs uppercase tracking-wider text-primary">
                Kiểm tra <ArrowRight size={13} />
              </span>
              <span className="mt-1 font-serif text-lg font-semibold text-primary">
                Làm Quiz tình huống
              </span>
            </Link>
          )}
        </nav>
      </div>
    </article>
  );
}
