export type Concept = {
  id: string;
  index: string;
  title: string;
  keyword: string;
  question: string;
  answer: string;
  role: string; // vai trò trong logic quyền lực
  hover: string; // dòng hiện khi hover
  description: string;
};

export const concepts: Concept[] = [
  {
    id: "cua-dan",
    index: "01",
    title: "CỦA DÂN",
    keyword: "Chủ thể",
    question: "Ai là chủ thể của quyền lực?",
    answer: "Nhân dân",
    role: "Nguồn gốc quyền lực",
    hover: "Nhân dân là chủ thể tối cao của quyền lực",
    description:
      "Mọi quyền lực nhà nước thuộc về nhân dân. Nhân dân không phải là đối tượng bị cai trị thụ động mà là chủ thể của quyền lực. Quyền lực nhà nước là quyền lực được “thừa ủy quyền” của nhân dân — trao quyền không có nghĩa là mất quyền.",
  },
  {
    id: "do-dan",
    index: "02",
    title: "DO DÂN",
    keyword: "Nguồn gốc",
    question: "Nhà nước từ đâu mà có?",
    answer: "Nhân dân",
    role: "Cách thức hình thành & thực hiện",
    hover: "Nhân dân lập nên và tham gia xây dựng",
    description:
      "Nhà nước do nhân dân lập nên, nhân dân làm chủ và dân là chủ. “Dân là chủ” xác định vị thế; “dân làm chủ” xác định quyền lợi và nghĩa vụ. Nhân dân tham gia bầu cử, quản lý, đóng góp ý kiến, giám sát và kiểm soát Nhà nước.",
  },
  {
    id: "vi-dan",
    index: "03",
    title: "VÌ DÂN",
    keyword: "Mục tiêu",
    question: "Nhà nước tồn tại để làm gì?",
    answer: "Phục vụ nhân dân",
    role: "Mục đích sử dụng quyền lực",
    hover: "Nhà nước tồn tại để phục vụ nhân dân",
    description:
      "Nhà nước tồn tại để phục vụ nhân dân. Mọi hoạt động của bộ máy nhà nước phải lấy lợi ích chính đáng của nhân dân làm mục tiêu và thước đo. Nhà nước vì dân phải trong sạch, không có bất kỳ đặc quyền, đặc lợi nào.",
  },
];

// Bản đồ khái niệm mở rộng dùng cho ConceptMap
export const conceptMap: Record<
  string,
  { flow: string[]; note: string }
> = {
  "cua-dan": {
    flow: ["Quyền lực", "DÂN", "Nhà nước", "Phục vụ dân"],
    note: "Quyền lực bắt nguồn từ nhân dân, được ủy quyền cho Nhà nước và phải phục vụ trở lại nhân dân.",
  },
  "do-dan": {
    flow: ["Nhân dân", "Lập nên", "Nhà nước", "Tham gia & kiểm soát"],
    note: "Nhân dân lập nên Nhà nước, lựa chọn đại diện, tham gia quản lý và kiểm soát quyền lực.",
  },
  "vi-dan": {
    flow: ["Nhà nước", "Lợi ích nhân dân", "Chăm lo đời sống", "Không đặc quyền"],
    note: "Nhà nước lấy lợi ích chính đáng của nhân dân làm mục tiêu, chống đặc quyền đặc lợi.",
  },
};
