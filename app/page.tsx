import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import ConceptCards from "@/components/ConceptCards";
import ConceptMap from "@/components/ConceptMap";
import PowerFlow from "@/components/PowerFlow";
import KnowledgeGraph from "@/components/KnowledgeGraph";
import MindMap from "@/components/MindMap";
import Reveal from "@/components/Reveal";
import TeamCarousel from "@/components/TeamCarousel";
import Timeline from "@/components/Timeline";
import { modules } from "@/data/modules";
import { coreChain } from "@/data/knowledge";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Scroll flow: 3 questions */}
      <section className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <span className="kicker">Ba câu hỏi cốt lõi</span>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl font-bold leading-tight text-ink md:text-5xl">
            Đừng đọc ngay một đống lý thuyết. Hãy đi qua từng câu hỏi.
          </h2>
        </Reveal>

        <div className="mt-12 space-y-10">
          {[
            { k: "CỦA DÂN", q: "Ai là chủ thể quyền lực?" },
            { k: "DO DÂN", q: "Ai lập nên Nhà nước?" },
            { k: "VÌ DÂN", q: "Nhà nước tồn tại để làm gì?" },
          ].map((item, i) => (
            <Reveal key={item.k} delay={i * 0.1}>
              <div className="flex flex-col gap-1 border-l-2 border-gold pl-6 md:flex-row md:items-baseline md:gap-6">
                <span className="font-serif text-3xl font-bold text-primary md:w-56">
                  {item.k}
                </span>
                <span className="font-serif text-2xl text-ink-soft">
                  ↓ {item.q}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Concept cards */}
      <section id="khai-niem" className="scroll-mt-24 bg-paper-2/30 py-20 md:py-28">
        <div className="mx-auto max-w-content px-5 md:px-8">
          <Reveal>
            <span className="kicker">Của dân · Do dân · Vì dân</span>
            <h2 className="mt-4 font-serif text-4xl font-bold text-ink md:text-5xl">
              Ba chữ, một chỉnh thể
            </h2>
          </Reveal>
          <div className="mt-12">
            <ConceptCards />
          </div>
        </div>
      </section>

      {/* Interactive concept map */}
      <section className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <span className="kicker">Sơ đồ tương tác</span>
          <h2 className="mt-4 font-serif text-4xl font-bold text-ink md:text-5xl">
            Bản đồ khái niệm quyền lực
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft">
            Nhấn vào <strong>Của dân</strong>, <strong>Do dân</strong> hoặc{" "}
            <strong>Vì dân</strong> để xem dòng quyền lực chuyển động.
          </p>
        </Reveal>
        <div className="mt-12">
          <ConceptMap />
        </div>
      </section>

      {/* Power flow simulation */}
      <section className="bg-paper-2/30 py-20 md:py-28">
        <div className="mx-auto max-w-content px-5 md:px-8">
          <div className="mx-auto max-w-3xl">
            <PowerFlow />
          </div>
        </div>
      </section>

      {/* Knowledge Graph */}
      <section className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <span className="kicker">Knowledge Graph</span>
          <h2 className="mt-3 font-serif text-4xl font-bold text-ink md:text-5xl">
            Toàn cảnh hệ thống
          </h2>
        </Reveal>
        <Reveal>
          <div className="mt-10">
            <KnowledgeGraph />
          </div>
        </Reveal>
      </section>

      {/* Mindmap */}
      <section className="bg-paper-2/30 py-20 md:py-28">
        <div className="mx-auto max-w-content px-5 md:px-8">
          <Reveal>
            <span className="kicker">Sơ đồ tư duy</span>
            <h2 className="mt-3 font-serif text-4xl font-bold text-ink md:text-5xl">
              Mindmap học phần
            </h2>
            <p className="mt-4 max-w-2xl text-ink-soft">
              Toàn bộ nội dung tỏa ra từ một gốc: Nhà nước của dân, do dân, vì
              dân — cùng các nhánh pháp quyền, kiểm soát quyền lực và vận dụng.
            </p>
          </Reveal>
          <Reveal>
            <div className="mt-10">
              <MindMap />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Modules preview */}
      <section className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <span className="kicker">Nội dung học tập</span>
          <h2 className="mt-4 font-serif text-4xl font-bold text-ink md:text-5xl">
            Năm chặng của hành trình
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => (
            <Reveal key={m.slug} delay={i * 0.08}>
              <Link
                href={`/learn/${m.slug}`}
                className="group flex h-full flex-col justify-between rounded-2xl border border-ink/10 bg-paper-2/40 p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-gold-dark">
                    Module {m.index}
                  </span>
                  <h3 className="mt-3 font-serif text-2xl font-bold text-ink group-hover:text-primary">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft">{m.subtitle}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-primary">
                  Khám phá <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="mx-auto max-w-content scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <span className="kicker">Nhà nước hợp hiến, hợp pháp</span>
          <h2 className="mt-4 font-serif text-4xl font-bold text-ink md:text-5xl">
            Timeline lịch sử
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft">
            Những mốc son cho thấy nỗ lực xây dựng một Nhà nước có cơ sở pháp lý
            và chính danh. Nhấn vào từng mốc để xem chi tiết.
          </p>
        </Reveal>
        <div className="mt-12">
          <Timeline />
        </div>
      </section>

      {/* Logic cốt lõi */}
      <section className="bg-paper-2/30 py-20 md:py-28">
        <div className="mx-auto max-w-content px-5 md:px-8">
          <Reveal>
            <span className="kicker">Logic cốt lõi</span>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl font-bold text-ink md:text-5xl">
              Cô đọng thành một chuỗi thống nhất
            </h2>
          </Reveal>
          <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-4">
            {coreChain.map((step, i) => (
              <Reveal key={step} delay={i * 0.06}>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-paper px-4 py-2.5">
                    <span className="font-serif text-lg font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium text-ink">{step}</span>
                  </span>
                  {i < coreChain.length - 1 && (
                    <ArrowRight size={16} className="text-gold-dark" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Thành viên nhóm */}
      <section className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <div className="text-center">
            <span className="kicker">Nhóm thực hiện</span>
            <h2 className="mt-4 font-serif text-4xl font-bold text-ink md:text-5xl">
              Thành viên nhóm
            </h2>
            <p className="mx-auto mt-3 max-w-md text-ink-soft">
              Bốn thành viên cùng xây dựng dự án. Rê chuột để tạm dừng, nhấn thẻ
              hoặc mũi tên để xoay.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="mt-12">
            <TeamCarousel />
          </div>
        </Reveal>
      </section>

      {/* Về dự án */}
      <section id="ve-du-an" className="bg-paper-2/30 scroll-mt-24 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Reveal>
            <span className="kicker">Về dự án</span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-ink md:text-4xl">
              Nguồn nội dung
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Nội dung được tổng hợp từ giáo trình Tư tưởng Hồ Chí Minh và các
              Session 13–17: Nhà nước của dân – do dân – vì dân (Session 15), Nhà
              nước pháp quyền, kiểm soát quyền lực và phòng chống tiêu cực
              (Session 16), cùng phần vận dụng vào xây dựng Nhà nước hiện nay.
            </p>
            <p className="mt-4 font-mono text-sm italic text-primary">
              “Đừng đọc lý thuyết. Hãy trải nghiệm nó.”
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-content px-5 pb-8 pt-20 md:px-8 md:pt-28">
        <div className="overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center text-paper md:py-20">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold-light">
            Sẵn sàng kiểm tra?
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-4xl font-bold leading-tight md:text-5xl">
            Học sinh hiểu bản chất, không học thuộc đáp án.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 font-mono text-sm uppercase tracking-widest text-primary transition-all hover:gap-3"
            >
              Làm Quiz tình huống <ArrowRight size={16} />
            </Link>
            <Link
              href="/flashcards"
              className="inline-flex items-center gap-2 rounded-full border border-paper/40 px-6 py-3 font-mono text-sm uppercase tracking-widest text-paper transition-all hover:border-paper hover:gap-3"
            >
              Ôn Flashcards
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
