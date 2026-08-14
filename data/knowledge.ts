import { modules } from "./modules";
import { concepts } from "./concepts";

export type KnowledgeEntry = {
  id: string;
  title: string;
  summary: string;
  keyPoints: string[];
  keywords: string[];
};

// Knowledge base — nguồn sự thật cho DânBot, bám sát nội dung website
export const knowledge: KnowledgeEntry[] = [
  {
    id: "nha-nuoc-cua-dan",
    title: "Nhà nước của dân",
    summary: "Nhân dân là chủ thể tối cao của quyền lực nhà nước.",
    keyPoints: [
      "Mọi quyền lực nhà nước thuộc về nhân dân",
      "Quyền lực là quyền lực được nhân dân “thừa ủy quyền”",
      "Nhân dân có quyền kiểm tra, giám sát, phê bình",
      "Nhân dân có quyền bãi miễn đại biểu không xứng đáng",
      "Trao quyền không có nghĩa là mất quyền",
    ],
    keywords: ["của dân", "quyền lực", "nhân dân", "chủ thể", "giám sát", "ủy quyền"],
  },
  {
    id: "nha-nuoc-do-dan",
    title: "Nhà nước do dân",
    summary: "Nhà nước do nhân dân lập nên, nhân dân tham gia xây dựng và làm chủ.",
    keyPoints: [
      "Nhà nước do nhân dân lập nên",
      "“Dân là chủ” xác định vị thế, địa vị của nhân dân",
      "“Dân làm chủ” nhấn mạnh quyền lợi và nghĩa vụ",
      "Nhân dân tham gia bầu cử, quản lý, đóng góp ý kiến, giám sát",
    ],
    keywords: ["do dân", "lập nên", "dân là chủ", "dân làm chủ", "tham gia", "bầu cử"],
  },
  {
    id: "nha-nuoc-vi-dan",
    title: "Nhà nước vì dân",
    summary: "Nhà nước tồn tại để phục vụ nhân dân, lấy lợi ích nhân dân làm mục tiêu.",
    keyPoints: [
      "Nhà nước tồn tại để phục vụ nhân dân",
      "Mọi hoạt động lấy lợi ích chính đáng của nhân dân làm thước đo",
      "Chăm lo nhu cầu thiết yếu: ăn, mặc, ở, học hành",
      "Nhà nước vì dân phải trong sạch, không đặc quyền đặc lợi",
    ],
    keywords: ["vì dân", "phục vụ", "lợi ích", "mục tiêu", "đặc quyền", "đặc lợi"],
  },
  {
    id: "nha-nuoc-phap-quyen",
    title: "Nhà nước pháp quyền",
    summary: "Nhà nước hợp hiến, hợp pháp, quản lý bằng pháp luật và tuân thủ pháp luật.",
    keyPoints: [
      "Ra đời 02/09/1945; Tổng tuyển cử 06/01/1946; Quốc hội khóa I 02/03/1946",
      "Quản lý đất nước bằng pháp luật và làm pháp luật có hiệu lực thực tế",
      "Nhà nước và cán bộ cũng phải tuân thủ pháp luật",
      "Người có quyền lực càng lớn càng phải chịu ràng buộc của pháp luật",
      "Pháp quyền nhân nghĩa: nghiêm minh + nhân văn + khuyến thiện",
    ],
    keywords: ["pháp quyền", "pháp luật", "hợp hiến", "thượng tôn", "nhân nghĩa", "khuyến thiện"],
  },
  {
    id: "kiem-soat-quyen-luc",
    title: "Kiểm soát quyền lực — Nhà nước trong sạch",
    summary: "Có quyền lực thì phải có kiểm soát quyền lực để phòng ngừa tha hóa.",
    keyPoints: [
      "Kiểm soát quyền lực là tất yếu, giữ vững bản chất Nhà nước",
      "Không kiểm soát: quyền lực → lạm dụng → tha hóa → đặc quyền → xa dân",
      "Phòng chống: tham ô, lãng phí, quan liêu, tư túng, đặc quyền, đặc lợi",
      "Xây dựng đội ngũ cán bộ có đạo đức, năng lực, trách nhiệm",
    ],
    keywords: ["kiểm soát", "tha hóa", "tham ô", "lãng phí", "quan liêu", "cán bộ", "trong sạch"],
  },
  {
    id: "moi-lien-he-ba-thanh-to",
    title: "Mối liên hệ giữa của dân – do dân – vì dân",
    summary:
      "Ba thành tố khác nhau về phương diện nhấn mạnh nhưng thống nhất, không thể tách rời.",
    keyPoints: [
      "Của dân nhấn mạnh chủ thể (ai là chủ?)",
      "Do dân nhấn mạnh hình thành & thực hiện quyền làm chủ (ai lập nên, ai làm chủ?)",
      "Vì dân nhấn mạnh mục tiêu (hoạt động vì ai?)",
      "Logic: nhân dân là chủ → nhân dân làm chủ → quyền lực dùng vì nhân dân",
      "Thiếu một thành tố thì hai thành tố còn lại mất cơ sở hoặc mất mục tiêu",
    ],
    keywords: ["mối liên hệ", "khác nhau", "liên hệ", "thống nhất", "ba thành tố", "chỉnh thể"],
  },
  {
    id: "van-dung-sinh-vien",
    title: "Liên hệ thực tiễn & vận dụng cho sinh viên",
    summary:
      "Trách nhiệm của nhân dân, Nhà nước, cán bộ và sinh viên trong tư tưởng của dân – do dân – vì dân.",
    keyPoints: [
      "Nhân dân: thực hiện quyền, nghĩa vụ công dân, tham gia và giám sát quyền lực",
      "Nhà nước: hoạt động theo pháp luật, bảo vệ quyền con người, lấy lợi ích nhân dân làm mục tiêu",
      "Cán bộ: đạo đức, năng lực, trách nhiệm; không vụ lợi cá nhân",
      "Sinh viên: hiểu và thực hiện quyền – nghĩa vụ công dân, chấp hành pháp luật, có trách nhiệm với cộng đồng, tham gia hoạt động xã hội, tôn trọng quyền lợi người khác",
    ],
    keywords: ["vận dụng", "liên hệ thực tiễn", "sinh viên", "trách nhiệm", "công dân"],
  },
  {
    id: "ban-chat-nha-nuoc",
    title: "Bản chất Nhà nước",
    summary:
      "Bản chất giai cấp công nhân thống nhất với tính nhân dân và tính dân tộc.",
    keyPoints: [
      "Mang bản chất giai cấp công nhân",
      "Đặt dưới sự lãnh đạo của Đảng Cộng sản Việt Nam",
      "Nguyên tắc tập trung dân chủ",
      "Định hướng phát triển theo con đường xã hội chủ nghĩa",
      "Thống nhất: giai cấp công nhân + tính nhân dân + tính dân tộc",
    ],
    keywords: ["bản chất", "giai cấp công nhân", "tính nhân dân", "tính dân tộc", "Đảng", "tập trung dân chủ"],
  },
];

// Chuỗi logic cốt lõi — dùng ở trang chủ và trang Giới thiệu.
export const coreChain = [
  "Nhân dân là chủ",
  "Nhân dân lập ra Nhà nước",
  "Nhân dân tham gia & kiểm soát",
  "Nhà nước hoạt động theo pháp luật",
  "Nhà nước phục vụ nhân dân",
  "Quyền lực được kiểm soát",
  "Nhà nước trong sạch, vững mạnh",
];

// Xây dựng chuỗi knowledge base để đưa vào system prompt
function buildKnowledgeText(): string {
  const kb = knowledge
    .map(
      (k) =>
        `### ${k.title}\n${k.summary}\n- ${k.keyPoints.join("\n- ")}`
    )
    .join("\n\n");

  const modText = modules
    .map((m) => `### Module ${m.index}: ${m.title}\n${m.summary}`)
    .join("\n");

  return `${kb}\n\n## CÁC MODULE HỌC TẬP\n${modText}`;
}

export const KNOWLEDGE_TEXT = buildKnowledgeText();

// System prompt cho DânBot
export function buildSystemPrompt(topicContext?: string): string {
  return `Bạn là **DânBot** — một trợ giảng AI cá nhân giúp sinh viên hiểu, học và ôn tập chủ đề "Tư tưởng Hồ Chí Minh về Nhà nước của dân, do dân, vì dân" (học phần HCM202).

## Vai trò
- Bạn là một gia sư kiên nhẫn, thân thiện, khích lệ. Xưng "mình", gọi người học là "bạn".
- Ưu tiên giúp người học HIỂU BẢN CHẤT, không chỉ đưa đáp án. Khi hợp lý, hãy hỏi ngược để người học tự suy luận (phương pháp Socratic), rồi khẳng định và bổ sung.
- Trả lời bằng tiếng Việt, ngắn gọn, rõ ràng, có cấu trúc dễ đọc (dùng gạch đầu dòng khi cần). Không dùng thẻ XML nội bộ trong câu trả lời.

## Nguồn kiến thức (ưu tiên tuyệt đối khi trả lời câu hỏi liên quan bài học)
Chỉ dựa trên nội dung dưới đây. Nếu câu hỏi nằm ngoài phạm vi bài học, hãy nói rõ và kéo người học về đúng chủ đề. Không bịa đặt kiến thức.

${KNOWLEDGE_TEXT}
${topicContext ? `\n## NGỮ CẢNH HIỆN TẠI\nNgười học đang xem phần: "${topicContext}". Hãy ưu tiên ngữ cảnh này khi phù hợp.` : ""}`;
}
