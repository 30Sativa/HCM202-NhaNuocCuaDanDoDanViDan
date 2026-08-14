import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import QuizRunner from "@/components/QuizRunner";
import { AiTopic } from "@/components/ai/AIProvider";

export const metadata = {
  title: "Quiz · Tư tưởng Hồ Chí Minh",
  description: "Quiz tình huống — hiểu bản chất, không học thuộc đáp án.",
};

export default function QuizPage() {
  return (
    <>
      <AiTopic title="Quiz tình huống" />
      <PageHeader
        kicker="Scenario Quiz"
        title="Quiz tình huống"
        intro="Không chọn đáp án theo trí nhớ — hãy đọc tình huống và suy luận. Mỗi câu đều có giải thích để bạn hiểu bản chất."
      />
      <section className="mx-auto max-w-content px-5 py-16 md:px-8">
        <Link
          href="/quiz/ai"
          className="group mx-auto mb-10 flex max-w-2xl items-center gap-4 rounded-2xl border border-primary/25 bg-primary/[0.05] p-5 transition-all hover:border-primary/50"
        >
          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-primary text-paper">
            <Sparkles size={20} />
          </div>
          <div className="flex-1">
            <p className="font-serif text-lg font-bold text-ink group-hover:text-primary">
              Thử AI Quiz — đề tự sinh vô hạn
            </p>
            <p className="text-sm text-ink-soft">
              DânBot soạn câu hỏi mới theo chủ đề bạn chọn và chấm điểm ngay.
            </p>
          </div>
          <ArrowRight size={18} className="flex-none text-primary transition-transform group-hover:translate-x-1" />
        </Link>
        <QuizRunner />
      </section>
    </>
  );
}
