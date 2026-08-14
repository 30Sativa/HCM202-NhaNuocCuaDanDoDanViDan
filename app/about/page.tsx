import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import TeamCarousel from "@/components/TeamCarousel";
import { coreChain } from "@/data/knowledge";

export const metadata = {
  title: "Giới thiệu · Tư tưởng Hồ Chí Minh",
  description: "Về dự án học tập tương tác này.",
};

const formula = coreChain;

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="Về dự án"
        title="Đừng đọc lý thuyết. Hãy trải nghiệm nó."
        intro="Website này biến một chương lý thuyết thành một hành trình tương tác, giúp người học hiểu được logic quyền lực nhà nước theo tư tưởng Hồ Chí Minh về Nhà nước của dân, do dân, vì dân."
      />

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8">
        <Reveal>
          <h2 className="font-serif text-2xl font-bold text-ink md:text-3xl">
            Logic cốt lõi
          </h2>
          <p className="mt-3 text-ink-soft">
            Toàn bộ nội dung có thể cô đọng thành một chuỗi thống nhất:
          </p>
          <ol className="mt-6 space-y-2">
            {formula.map((f, i) => (
              <li
                key={i}
                className="flex items-center gap-3 rounded-lg border border-ink/10 bg-paper-2/40 px-4 py-3"
              >
                <span className="font-serif text-lg font-bold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-ink">{f}</span>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal>
          <h2 className="mt-14 font-serif text-2xl font-bold text-ink md:text-3xl">
            Nguồn nội dung
          </h2>
          <p className="mt-3 leading-relaxed text-ink-soft">
            Nội dung được tổng hợp từ giáo trình Tư tưởng Hồ Chí Minh và các
            Session 13–17: Nhà nước của dân – do dân – vì dân (Session 15), Nhà
            nước pháp quyền, kiểm soát quyền lực và phòng chống tiêu cực (Session
            16), cùng phần vận dụng vào xây dựng Nhà nước hiện nay.
          </p>
        </Reveal>

        <Reveal>
          <h2 className="mt-14 font-serif text-2xl font-bold text-ink md:text-3xl">
            Công nghệ
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide"].map(
              (t) => (
                <span
                  key={t}
                  className="rounded-full border border-ink/15 bg-paper px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-ink-soft"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </Reveal>

        <Reveal>
          <div id="team" className="mt-16 scroll-mt-24">
            <span className="kicker">Nhóm thực hiện</span>
            <h2 className="mt-3 font-serif text-2xl font-bold text-ink md:text-3xl">
              Thành viên nhóm
            </h2>
            <p className="mt-2 text-ink-soft">
              Bốn thành viên cùng xây dựng dự án. Rê chuột để tạm dừng, nhấn thẻ
              hoặc mũi tên để xoay.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="mt-8">
            <TeamCarousel />
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16 rounded-2xl bg-primary px-7 py-10 text-center text-paper">
            <p className="font-serif text-2xl font-bold">
              Sẵn sàng bắt đầu hành trình?
            </p>
            <Link
              href="/learn"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 font-mono text-sm uppercase tracking-widest text-primary transition-all hover:gap-3"
            >
              Bắt đầu học <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
