import PageHeader from "@/components/PageHeader";
import ConnectForm from "@/components/ai/ConnectForm";
import { Sparkles, MessageSquare, PenLine, Lightbulb, Target } from "lucide-react";

export const metadata = {
  title: "AI Settings · DânBot",
  description: "Kết nối DânBot — AI Study Tutor bằng API key của bạn.",
};

const features = [
  { icon: MessageSquare, title: "Hỏi & Học", desc: "Hỏi tự do và được giải thích, cho ví dụ, tóm tắt theo đúng nội dung bài học." },
  { icon: Lightbulb, title: "Hỏi–đáp Socratic", desc: "DânBot hỏi ngược để bạn tự suy luận, thay vì đưa đáp án ngay." },
  { icon: Target, title: "AI Quiz", desc: "Tạo câu hỏi kiểm tra theo phần bạn đang học và chấm ngay." },
  { icon: PenLine, title: "Chấm tự luận", desc: "Nộp bài viết, nhận điểm tham khảo, ý còn thiếu và gợi ý cải thiện." },
];

export default function AiSettingsPage() {
  return (
    <>
      <PageHeader
        kicker="DânBot · AI Study Tutor"
        title="Kết nối AI của bạn"
        intro="DânBot dùng API key của chính bạn để gọi AI trực tiếp từ trình duyệt. Website không có backend và không lưu key của bạn."
      />

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8">
        <ConnectForm />

        <div className="mt-12">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-primary" />
            <h2 className="font-serif text-2xl font-bold text-ink">
              DânBot làm được gì?
            </h2>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-ink/10 bg-paper-2/40 p-5">
                <f.icon size={20} className="text-gold-dark" />
                <h3 className="mt-3 font-serif text-lg font-bold text-ink">{f.title}</h3>
                <p className="mt-1 text-sm text-ink-soft">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-gold/40 bg-gold/[0.08] p-6">
          <h2 className="font-serif text-lg font-bold text-ink">🔒 Quyền riêng tư</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            API key được lưu trong <code>localStorage</code> của trình duyệt này và
            chỉ được dùng để gửi yêu cầu trực tiếp tới nhà cung cấp AI. Nó không đi
            qua bất kỳ máy chủ nào của website. Bạn có thể xóa key bất cứ lúc nào ở
            trên.
          </p>
        </div>
      </section>
    </>
  );
}
