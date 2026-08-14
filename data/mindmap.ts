export type MindNode = {
  id: string;
  title: string;
  short: string; // câu hỏi/ý ngắn hiển thị trên nhánh
  tone: "primary" | "gold";
  points: string[]; // các ý chính hiện khi mở
  aiContext: string; // nội dung để AI trả lời (chỉ trong phạm vi mục này)
};

export const mindRoot = {
  title: "Nhà nước",
  lines: ["Của dân", "Do dân", "Vì dân"],
};

export const mindNodes: MindNode[] = [
  {
    id: "cua-dan",
    title: "Của dân",
    short: "Ai là chủ?",
    tone: "primary",
    points: [
      "Nhân dân là chủ thể tối cao của quyền lực nhà nước",
      "Quyền lực là “thừa ủy quyền” của nhân dân",
      "Nhân dân kiểm tra, giám sát, phê bình, bãi miễn",
      "Trao quyền không có nghĩa là mất quyền",
    ],
    aiContext:
      "“Nhà nước của dân” khẳng định mọi quyền lực nhà nước thuộc về nhân dân; nhân dân là chủ thể tối cao của quyền lực. Quyền lực nhà nước không phải quyền lực tự thân của bộ máy mà có nguồn gốc từ nhân dân — là quyền lực được “thừa ủy quyền” của nhân dân. Vì là chủ thể, nhân dân có quyền kiểm soát, phê bình Nhà nước và bãi miễn những đại biểu do mình bầu ra khi không còn xứng đáng. Pháp luật dân chủ là công cụ để nhân dân thực hiện quyền lực. Cốt lõi: Của dân = nhân dân là chủ; trao quyền không có nghĩa là mất quyền.",
  },
  {
    id: "do-dan",
    title: "Do dân",
    short: "Ai lập nên & làm chủ?",
    tone: "primary",
    points: [
      "Nhà nước do nhân dân lập nên",
      "“Dân là chủ” xác định vị thế",
      "“Dân làm chủ” là quyền lợi & nghĩa vụ",
      "Bầu cử, tham gia quản lý, giám sát",
    ],
    aiContext:
      "“Nhà nước do dân” nhấn mạnh nguồn gốc hình thành và việc thực hiện quyền làm chủ: Nhà nước do nhân dân lập nên, nhân dân là chủ và làm chủ. Phân biệt: “dân là chủ” xác định vị thế, địa vị của nhân dân đối với quyền lực; “dân làm chủ” nhấn mạnh quyền lợi và nghĩa vụ của nhân dân với tư cách người chủ. Nhân dân tham gia qua bầu cử, quản lý nhà nước và xã hội, đóng góp ý kiến, giám sát, phê bình cán bộ. Cốt lõi: Do dân = dân là chủ + dân làm chủ.",
  },
  {
    id: "vi-dan",
    title: "Vì dân",
    short: "Vì ai?",
    tone: "primary",
    points: [
      "Nhà nước tồn tại để phục vụ nhân dân",
      "Lấy lợi ích chính đáng của dân làm mục tiêu",
      "Chăm lo ăn, mặc, ở, học hành",
      "Không đặc quyền, đặc lợi",
    ],
    aiContext:
      "“Nhà nước vì dân” xác định mục tiêu hoạt động của Nhà nước là phục vụ nhân dân, lấy lợi ích chính đáng của nhân dân làm mục tiêu và thước đo. Hồ Chí Minh nêu rất cụ thể: phải làm cho dân có ăn, có mặc, có chỗ ở và được học hành. Nhà nước vì dân phải là nhà nước hoàn toàn trong sạch, không có bất kỳ đặc quyền, đặc lợi nào; cán bộ là người phục vụ nhân dân, không lợi dụng chức vụ để vụ lợi. Cốt lõi: Vì dân = lấy lợi ích nhân dân làm mục tiêu.",
  },
  {
    id: "phap-quyen",
    title: "Nhà nước pháp quyền",
    short: "Ràng buộc bởi pháp luật",
    tone: "gold",
    points: [
      "Hợp hiến, hợp pháp (1945–1946)",
      "Thượng tôn pháp luật",
      "Nhà nước & cán bộ cũng phải tuân thủ",
      "Pháp quyền nhân nghĩa: nghiêm minh + nhân văn",
    ],
    aiContext:
      "Nhà nước pháp quyền: Nhà nước Việt Nam Dân chủ Cộng hòa ra đời 02/09/1945; Tổng tuyển cử 06/01/1946; Quốc hội khóa I họp phiên đầu 02/03/1946 — thể hiện Nhà nước hợp hiến, hợp pháp, chính danh. Nhà nước quản lý xã hội bằng pháp luật và làm cho pháp luật có hiệu lực thực tế; đặc biệt chính Nhà nước và cán bộ, công chức cũng phải tuân thủ pháp luật (người có quyền lực càng lớn càng phải chịu ràng buộc của pháp luật). Pháp quyền nhân nghĩa: pháp luật nghiêm minh nhưng nhân văn, bảo vệ quyền con người, công bằng và khuyến thiện (giáo dục, cảm hóa, thức tỉnh con người).",
  },
  {
    id: "kiem-soat",
    title: "Kiểm soát quyền lực",
    short: "Chống tha hóa",
    tone: "gold",
    points: [
      "Có quyền lực → phải có kiểm soát",
      "Nhân dân kiểm soát quyền lực nhà nước",
      "Chống tham ô, lãng phí, quan liêu",
      "Chống đặc quyền, đặc lợi",
    ],
    aiContext:
      "Kiểm soát quyền lực nhà nước là tất yếu nhằm giữ vững bản chất Nhà nước, bảo đảm hiệu quả và phòng ngừa sự tha hóa. Nhân dân là chủ thể tối cao nên nhân dân có quyền kiểm soát quyền lực nhà nước. Nếu quyền lực không được kiểm soát: quyền lực → lạm dụng → tha hóa → đặc quyền, đặc lợi → xa rời nhân dân. Cần tập trung phòng, chống: tham ô, lãng phí, quan liêu, tư túng, chia rẽ, kiêu ngạo, đặc quyền, đặc lợi. Đây là điều kiện để Nhà nước thực sự trong sạch, vững mạnh và vì dân.",
  },
  {
    id: "ban-chat-van-dung",
    title: "Bản chất & vận dụng",
    short: "Nền tảng & thực tiễn",
    tone: "gold",
    points: [
      "Giai cấp công nhân + nhân dân + dân tộc",
      "Đặt dưới sự lãnh đạo của Đảng",
      "Hoàn thiện pháp luật, xây dựng cán bộ",
      "Sinh viên: sống & hành động theo “dân là chủ”",
    ],
    aiContext:
      "Bản chất Nhà nước Việt Nam là sự thống nhất giữa bản chất giai cấp công nhân với tính nhân dân và tính dân tộc, đặt dưới sự lãnh đạo của Đảng, theo nguyên tắc tập trung dân chủ và định hướng xã hội chủ nghĩa. Vận dụng hiện nay: xây dựng Nhà nước trong sạch, vững mạnh; hoàn thiện pháp luật gắn với thi hành; kiểm soát quyền lực; xây dựng đội ngũ cán bộ có đạo đức và năng lực; phòng, chống tham nhũng, lãng phí, quan liêu. Liên hệ sinh viên: hiểu và thực hiện quyền, nghĩa vụ công dân; chấp hành pháp luật; có trách nhiệm với cộng đồng; tham gia hoạt động xã hội phù hợp và tôn trọng quyền lợi của người khác.",
  },
];

export function getMindNode(id: string) {
  return mindNodes.find((n) => n.id === id);
}
