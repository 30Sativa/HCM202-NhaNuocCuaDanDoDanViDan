import PageHeader from "@/components/PageHeader";
import InteractiveMindMap from "@/components/InteractiveMindMap";
import { AiTopic } from "@/components/ai/AIProvider";

export const metadata = {
  title: "Sơ đồ tư duy · Tư tưởng Hồ Chí Minh",
  description:
    "Mindmap tương tác học phần — nhấn vào từng mục để xem chi tiết và hỏi DânBot riêng về mục đó.",
};

export default function MindMapPage() {
  return (
    <>
      <AiTopic title="Sơ đồ tư duy học phần" />
      <PageHeader
        kicker="Mindmap tương tác"
        title="Sơ đồ tư duy học phần"
        intro="Toàn bộ nội dung tỏa ra từ một gốc: Nhà nước của dân, do dân, vì dân. Nhấn vào một nhánh để mở chi tiết — và hỏi DânBot riêng về đúng mục đó."
      />
      <section className="mx-auto max-w-content px-5 py-16 md:px-8">
        <InteractiveMindMap />
      </section>
    </>
  );
}
