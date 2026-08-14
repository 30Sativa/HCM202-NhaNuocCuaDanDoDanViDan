import PageHeader from "@/components/PageHeader";
import Flashcards from "@/components/Flashcards";
import { AiTopic } from "@/components/ai/AIProvider";

export const metadata = {
  title: "Flashcards · Tư tưởng Hồ Chí Minh",
  description: "Ôn thi nhanh với thẻ ghi nhớ lật hai mặt.",
};

export default function FlashcardsPage() {
  return (
    <>
      <AiTopic title="Flashcards ôn tập" />
      <PageHeader
        kicker="Ôn thi nhanh"
        title="Flashcards"
        intro="Lật thẻ để hiện đáp án. Dùng để ôn nhanh các ý chính trước khi thi."
      />
      <section className="mx-auto max-w-content px-5 py-16 md:px-8">
        <Flashcards />
      </section>
    </>
  );
}
