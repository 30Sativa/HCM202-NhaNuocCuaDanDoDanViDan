import PageHeader from "@/components/PageHeader";
import Timeline from "@/components/Timeline";
import { AiTopic } from "@/components/ai/AIProvider";

export const metadata = {
  title: "Timeline · 3D — DÂN • DO • VÌ",
  description: "Các mốc lịch sử: 02/09/1945, 06/01/1946, 02/03/1946 — Nhà nước hợp hiến, hợp pháp.",
};

export default function TimelinePage() {
  return (
    <>
      <AiTopic title="Nhà nước pháp quyền — các mốc lịch sử" />
      <PageHeader
        kicker="Nhà nước hợp hiến, hợp pháp"
        title="Timeline lịch sử"
        intro="Những mốc son cho thấy nỗ lực xây dựng một Nhà nước có cơ sở pháp lý và chính danh. Nhấn vào từng mốc để xem chi tiết."
      />
      <section className="mx-auto max-w-content px-5 py-16 md:px-8">
        <Timeline />
      </section>
    </>
  );
}
