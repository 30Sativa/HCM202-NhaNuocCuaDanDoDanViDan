import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { AiTopic } from "@/components/ai/AIProvider";
import ConceptCards from "@/components/ConceptCards";
import ConceptMap from "@/components/ConceptMap";
import PowerFlow from "@/components/PowerFlow";

export const metadata = {
  title: "Khái niệm · 3D — DÂN • DO • VÌ",
  description: "Sơ đồ khái niệm tương tác: của dân, do dân, vì dân và dòng quyền lực.",
};

export default function ConceptsPage() {
  return (
    <>
      <AiTopic title="Của dân – Do dân – Vì dân (bản đồ khái niệm)" />
      <PageHeader
        kicker="3D — Dân • Do • Vì"
        title="Bản đồ khái niệm"
        intro="Toàn bộ tư tưởng xoay quanh một chủ thể duy nhất: Nhân dân. Khám phá mối quan hệ giữa của dân, do dân và vì dân qua các thành phần tương tác."
      />

      <section className="mx-auto max-w-content px-5 py-16 md:px-8">
        <Reveal>
          <span className="kicker">Ba tấm thẻ</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-ink md:text-4xl">
            Di chuột để lật ý nghĩa
          </h2>
        </Reveal>
        <div className="mt-10">
          <ConceptCards />
        </div>
      </section>

      <section className="bg-paper-2/30 py-16">
        <div className="mx-auto max-w-content px-5 md:px-8">
          <Reveal>
            <span className="kicker">Sơ đồ tương tác</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-ink md:text-4xl">
              Dòng quyền lực chuyển động
            </h2>
          </Reveal>
          <div className="mt-10">
            <ConceptMap />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-5 py-16 md:px-8">
        <div className="mx-auto max-w-3xl">
          <PowerFlow />
        </div>
      </section>

      {/* Knowledge graph (static, styled) */}
      <section className="mx-auto max-w-content px-5 pb-16 md:px-8">
        <Reveal>
          <span className="kicker">Knowledge Graph</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-ink md:text-4xl">
            Toàn cảnh hệ thống
          </h2>
        </Reveal>
        <Reveal>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-ink/10 bg-paper-2/40 p-8">
            <div className="mx-auto flex min-w-[36rem] flex-col items-center gap-3 font-mono text-xs uppercase tracking-wider">
              <GraphNode tone="ink">Nhân dân</GraphNode>
              <Down />
              <div className="flex gap-3">
                <GraphNode tone="primary">Của dân</GraphNode>
                <GraphNode tone="primary">Do dân</GraphNode>
                <GraphNode tone="primary">Vì dân</GraphNode>
              </div>
              <Down />
              <GraphNode tone="ink">Nhà nước dân chủ</GraphNode>
              <Down />
              <div className="flex gap-3">
                <GraphNode tone="gold">Pháp quyền</GraphNode>
                <GraphNode tone="gold">Kiểm soát quyền lực</GraphNode>
              </div>
              <Down />
              <GraphNode tone="primary">Nhà nước trong sạch, vững mạnh</GraphNode>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function GraphNode({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone: "ink" | "primary" | "gold";
}) {
  const styles = {
    ink: "bg-ink text-paper",
    primary: "bg-primary text-paper",
    gold: "border border-gold-dark bg-gold/15 text-primary",
  }[tone];
  return (
    <div className={`rounded-lg px-4 py-2.5 text-center font-semibold ${styles}`}>
      {children}
    </div>
  );
}

function Down() {
  return <div className="h-5 w-px bg-ink/25" />;
}
