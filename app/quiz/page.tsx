import PageHeader from "@/components/PageHeader";
import QuizRunner from "@/components/QuizRunner";
import { AiTopic } from "@/components/ai/AIProvider";

export const metadata = {
  title: "Quiz · 3D — DÂN • DO • VÌ",
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
        <QuizRunner />
      </section>
    </>
  );
}
