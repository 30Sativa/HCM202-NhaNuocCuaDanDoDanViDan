import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import AiQuizRunner from "@/components/ai/AiQuizRunner";
import { AiTopic } from "@/components/ai/AIProvider";

export const metadata = {
  title: "AI Quiz · DânBot",
  description: "Quiz tự sinh bằng AI — chọn chủ đề, AI soạn đề và chấm điểm ngay.",
};

export default function AiQuizPage() {
  return (
    <>
      <AiTopic title="AI Quiz tự sinh" />
      <PageHeader
        kicker="DânBot · AI Quiz"
        title="Quiz tự sinh bằng AI"
        intro="Chọn chủ đề và số câu — DânBot tự soạn đề trắc nghiệm bám sát bài học, chấm điểm và chỉ ra phần bạn cần ôn thêm."
      />
      <section className="mx-auto max-w-content px-5 py-16 md:px-8">
        <Link
          href="/quiz"
          className="mb-8 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-ink-soft hover:text-primary"
        >
          <ArrowLeft size={14} /> Quiz tình huống (đề cố định)
        </Link>
        <AiQuizRunner />
      </section>
    </>
  );
}
