export type QuizOption = {
  key: string;
  label: string;
};

export type QuizQuestion = {
  id: string;
  scenario?: string;
  question: string;
  options: QuizOption[];
  correct: string;
  concept: string; // nhãn khái niệm liên quan
  explanation: string;
};

export const quiz: QuizQuestion[] = [
  {
    id: "q1",
    scenario:
      "Một cán bộ được giao quyền giải quyết công việc cho người dân nhưng thường xuyên gây khó dễ và sử dụng vị trí của mình để tạo lợi ích cá nhân.",
    question: "Hành vi này đi ngược lại nội dung nào?",
    options: [
      { key: "A", label: "Nhà nước của dân" },
      { key: "B", label: "Nhà nước vì dân" },
      { key: "C", label: "Nhà nước pháp quyền" },
      { key: "D", label: "Cả B và C" },
    ],
    correct: "D",
    concept: "Vì dân + Pháp quyền",
    explanation:
      "Nhà nước phải lấy lợi ích chính đáng của nhân dân làm mục tiêu (vì dân), đồng thời cán bộ phải tuân thủ pháp luật (pháp quyền). Đặc quyền, đặc lợi và lạm dụng chức vụ đi ngược cả hai tinh thần này.",
  },
  {
    id: "q2",
    scenario:
      "Trong một cuộc họp, người dân muốn đóng góp ý kiến, phê bình và giám sát hoạt động của cơ quan nhà nước tại địa phương.",
    question: "Quyền này thể hiện rõ nhất nội dung nào?",
    options: [
      { key: "A", label: "Nhà nước của dân" },
      { key: "B", label: "Nhà nước pháp quyền nhân nghĩa" },
      { key: "C", label: "Bản chất giai cấp công nhân" },
      { key: "D", label: "Định hướng xã hội chủ nghĩa" },
    ],
    correct: "A",
    concept: "Của dân",
    explanation:
      "Nhân dân là chủ thể tối cao của quyền lực nên có quyền kiểm tra, giám sát, phê bình Nhà nước và cán bộ. Trao quyền không có nghĩa là mất quyền — đây chính là tinh thần “của dân”.",
  },
  {
    id: "q3",
    question:
      "“Dân là chủ” và “dân làm chủ” khác nhau ở điểm nào?",
    options: [
      { key: "A", label: "Hoàn toàn giống nhau" },
      { key: "B", label: "“Dân là chủ” chỉ vị thế; “dân làm chủ” nhấn mạnh quyền lợi và nghĩa vụ" },
      { key: "C", label: "“Dân làm chủ” chỉ áp dụng cho cán bộ" },
      { key: "D", label: "Không nội dung nào đúng" },
    ],
    correct: "B",
    concept: "Do dân",
    explanation:
      "“Dân là chủ” xác định vị trí, địa vị của nhân dân đối với quyền lực; “dân làm chủ” nhấn mạnh quyền lợi và nghĩa vụ của nhân dân với tư cách người chủ. Đây là điểm hay bị hỏi trong đề thi.",
  },
  {
    id: "q4",
    scenario:
      "Một quan chức cho rằng vì mình nắm quyền lực lớn nên không cần bị ràng buộc bởi pháp luật như người dân bình thường.",
    question: "Quan điểm này sai ở đâu?",
    options: [
      { key: "A", label: "Không sai, quyền lực lớn thì được ưu tiên" },
      { key: "B", label: "Người có quyền lực càng lớn càng phải chịu ràng buộc của pháp luật" },
      { key: "C", label: "Chỉ cán bộ cấp thấp mới phải tuân thủ" },
      { key: "D", label: "Pháp luật chỉ dùng để quản lý người dân" },
    ],
    correct: "B",
    concept: "Pháp quyền",
    explanation:
      "Trong Nhà nước pháp quyền, Nhà nước và cán bộ, công chức cũng phải tuân thủ pháp luật. Người có quyền lực càng lớn thì càng phải chịu sự ràng buộc của pháp luật.",
  },
  {
    id: "q5",
    question:
      "Vì sao kiểm soát quyền lực nhà nước là tất yếu?",
    options: [
      { key: "A", label: "Để tăng quyền cho cán bộ" },
      { key: "B", label: "Để phòng ngừa sự tha hóa quyền lực" },
      { key: "C", label: "Để giảm vai trò của nhân dân" },
      { key: "D", label: "Vì pháp luật yêu cầu hình thức" },
    ],
    correct: "B",
    concept: "Kiểm soát quyền lực",
    explanation:
      "Kiểm soát quyền lực nhằm giữ vững bản chất Nhà nước, bảo đảm hiệu quả và phòng ngừa tha hóa. Nếu không kiểm soát: quyền lực → lạm dụng → tha hóa → đặc quyền, đặc lợi → xa dân.",
  },
  {
    id: "q6",
    question:
      "“Pháp quyền nhân nghĩa” trong tư tưởng Hồ Chí Minh nhấn mạnh điều gì?",
    options: [
      { key: "A", label: "Chỉ trừng phạt thật nặng" },
      { key: "B", label: "Bỏ qua kỷ cương để nhân đạo" },
      { key: "C", label: "Nghiêm minh nhưng nhân văn, khuyến thiện" },
      { key: "D", label: "Pháp luật chỉ mang tính hình thức" },
    ],
    correct: "C",
    concept: "Pháp quyền nhân nghĩa",
    explanation:
      "Pháp quyền nhân nghĩa gắn với tính nhân văn, bảo vệ quyền con người, công bằng và khuyến thiện. Pháp luật phải nghiêm nhưng không vô nhân đạo; có kỷ cương nhưng hướng con người đến điều tốt.",
  },
];
