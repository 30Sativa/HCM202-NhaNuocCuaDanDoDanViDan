export type ModuleSection = {
  heading: string;
  body: string[];
  list?: string[];
  quote?: string;
};

export type LearnModule = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  question: string;
  color: string; // tailwind text color token for accent
  summary: string;
  sections: ModuleSection[];
  takeaways: string[];
};

export const modules: LearnModule[] = [
  {
    slug: "nha-nuoc-dan-chu",
    index: "01",
    title: "Nhà nước dân chủ",
    subtitle: "Dân chủ là bản chất của Nhà nước",
    question: "Vì sao dân chủ là gốc rễ?",
    color: "text-primary",
    summary:
      "Nhà nước của dân, do dân, vì dân trước hết phải là một Nhà nước dân chủ — nơi nhân dân là chủ thể của quyền lực.",
    sections: [
      {
        heading: "Dân chủ nghĩa là gì?",
        body: [
          "Dân chủ có nghĩa cơ bản là nhân dân là chủ thể của quyền lực. Nhưng dân chủ không chỉ nằm trên giấy tờ — nó phải được thể hiện bằng những cơ chế cụ thể.",
        ],
      },
      {
        heading: "Dân chủ được thể hiện bằng gì?",
        body: ["Dân chủ vừa là quyền của nhân dân, vừa là phương thức để nhân dân thực hiện quyền làm chủ:"],
        list: [
          "Cơ chế bầu cử",
          "Quyền tham gia quản lý nhà nước",
          "Quyền đóng góp ý kiến",
          "Quyền kiểm tra, giám sát",
          "Quyền khiếu nại, tố cáo theo quy định pháp luật",
          "Quyền tham gia xây dựng chính sách, pháp luật",
          "Trách nhiệm thực hiện nghĩa vụ công dân",
        ],
      },
      {
        heading: "Bản chất Nhà nước",
        body: [
          "Nhà nước Việt Nam mang bản chất giai cấp công nhân, gắn với tính nhân dân và tính dân tộc, đặt dưới sự lãnh đạo của Đảng và định hướng phát triển theo con đường xã hội chủ nghĩa. Ba yếu tố này thống nhất chứ không tách rời.",
        ],
        quote:
          "Bản chất giai cấp công nhân + Tính nhân dân + Tính dân tộc → tạo thành bản chất thống nhất của Nhà nước Việt Nam.",
      },
    ],
    takeaways: [
      "Nhân dân là chủ thể của quyền lực.",
      "Dân chủ phải có cơ chế thực thi, không chỉ trên giấy.",
      "Bản chất Nhà nước là sự thống nhất giai cấp – nhân dân – dân tộc.",
    ],
  },
  {
    slug: "cua-dan-do-dan-vi-dan",
    index: "02",
    title: "Của dân – Do dân – Vì dân",
    subtitle: "Quyền lực bắt nguồn từ đâu?",
    question: "Ba chữ, một chỉnh thể",
    color: "text-primary",
    summary:
      "Ba khái niệm của dân – do dân – vì dân tạo thành một logic thống nhất về nguồn gốc, chủ thể và mục tiêu của quyền lực nhà nước.",
    sections: [
      {
        heading: "Của dân — Ai là chủ?",
        body: [
          "Mọi quyền lực nhà nước thuộc về nhân dân. Nhân dân là chủ thể tối cao, thực hiện quyền làm chủ qua dân chủ trực tiếp và đại diện, bầu ra đại diện, kiểm tra giám sát, phê bình và bãi miễn theo quy định.",
        ],
        quote: "Trao quyền không có nghĩa là mất quyền.",
      },
      {
        heading: "Do dân — Nhà nước từ đâu mà có?",
        body: [
          "Nhà nước do nhân dân lập nên. “Dân là chủ” xác định vị trí, địa vị; “dân làm chủ” nhấn mạnh quyền lợi và nghĩa vụ. Nhân dân tham gia xây dựng, vận hành và kiểm soát Nhà nước.",
        ],
        list: [
          "Bầu cử",
          "Tham gia quản lý nhà nước và xã hội",
          "Đóng góp ý kiến xây dựng chính sách, pháp luật",
          "Giám sát hoạt động của cơ quan nhà nước",
          "Phê bình cán bộ, công chức",
          "Thực hiện quyền và nghĩa vụ công dân",
        ],
      },
      {
        heading: "Vì dân — Nhà nước tồn tại để làm gì?",
        body: [
          "Nhà nước tồn tại để phục vụ nhân dân. Mọi đường lối, chính sách phải hướng đến quyền lợi của nhân dân, chăm lo những nhu cầu thiết yếu như ăn, mặc, ở, học hành. Nhà nước vì dân phải trong sạch, không có bất kỳ đặc quyền, đặc lợi nào.",
        ],
      },
    ],
    takeaways: [
      "CỦA DÂN = nguồn gốc quyền lực (chủ thể).",
      "DO DÂN = cách thức hình thành và thực hiện (nguồn gốc + tham gia).",
      "VÌ DÂN = mục đích sử dụng quyền lực (mục tiêu).",
    ],
  },
  {
    slug: "nha-nuoc-phap-quyen",
    index: "03",
    title: "Nhà nước pháp quyền",
    subtitle: "Thượng tôn pháp luật & pháp quyền nhân nghĩa",
    question: "Quyền lực bị ràng buộc bởi điều gì?",
    color: "text-primary",
    summary:
      "Nhà nước hợp hiến, hợp pháp, quản lý xã hội bằng pháp luật — và chính Nhà nước cũng phải tuân thủ pháp luật.",
    sections: [
      {
        heading: "Hợp hiến, hợp pháp",
        body: [
          "Nhà nước Việt Nam Dân chủ Cộng hòa ra đời 02/09/1945. Ngày 06/01/1946 Tổng tuyển cử bầu Quốc hội; ngày 02/03/1946 Quốc hội khóa I họp phiên đầu tiên. Đây là nỗ lực xây dựng Nhà nước có cơ sở pháp lý và chính danh.",
        ],
      },
      {
        heading: "Thượng tôn pháp luật",
        body: [
          "Nhà nước quản lý đất nước bằng pháp luật và làm cho pháp luật có hiệu lực thực tế. Không chỉ xây dựng mà phải tổ chức thực hiện pháp luật. Đặc biệt: Nhà nước và cán bộ, công chức cũng phải tuân thủ pháp luật.",
        ],
        quote:
          "Người có quyền lực càng lớn thì càng phải chịu sự ràng buộc của pháp luật.",
      },
      {
        heading: "Pháp quyền nhân nghĩa",
        body: [
          "Nét đặc sắc trong tư tưởng Hồ Chí Minh: kết hợp pháp luật với tính nhân văn. Pháp luật phải nghiêm minh nhưng không vô nhân đạo, phải hướng con người đến điều tốt.",
        ],
        list: [
          "Ghi nhận và bảo vệ quyền con người",
          "Bảo đảm tính công bằng",
          "Áp dụng nghiêm minh nhưng khách quan",
          "Khuyến thiện: giáo dục, cảm hóa, thức tỉnh con người",
        ],
      },
    ],
    takeaways: [
      "Nhà nước hợp hiến, hợp pháp, quản lý bằng pháp luật.",
      "Nhà nước cũng phải tuân thủ pháp luật.",
      "Pháp quyền nhân nghĩa = nghiêm minh + nhân văn + khuyến thiện.",
    ],
  },
  {
    slug: "nha-nuoc-trong-sach",
    index: "04",
    title: "Nhà nước trong sạch, vững mạnh",
    subtitle: "Kiểm soát quyền lực & phòng chống tiêu cực",
    question: "Làm sao để quyền lực không tha hóa?",
    color: "text-primary",
    summary:
      "Có quyền lực thì phải có kiểm soát quyền lực. Nhân dân là chủ thể tối cao nên phải có quyền kiểm soát Nhà nước.",
    sections: [
      {
        heading: "Vì sao phải kiểm soát quyền lực?",
        body: [
          "Kiểm soát quyền lực là tất yếu nhằm giữ vững bản chất Nhà nước, bảo đảm hiệu quả hoạt động và phòng ngừa sự tha hóa quyền lực.",
        ],
        quote:
          "Quyền lực → lạm dụng → tha hóa → đặc quyền, đặc lợi → xa rời nhân dân.",
      },
      {
        heading: "Các biểu hiện tiêu cực cần phòng chống",
        body: ["Slide xác định những biểu hiện đi ngược lại bản chất Nhà nước vì dân:"],
        list: [
          "Tham ô — chiếm đoạt tài sản của Nhà nước và nhân dân",
          "Lãng phí — sử dụng nguồn lực công không hiệu quả",
          "Quan liêu — xa rời thực tế, xa rời nhân dân",
          "Tư túng, chia rẽ, kiêu ngạo",
          "Đặc quyền, đặc lợi — dùng quyền lực tạo lợi ích riêng",
        ],
      },
      {
        heading: "Xây dựng đội ngũ cán bộ",
        body: [
          "Muốn xây dựng Nhà nước tốt phải xây dựng đội ngũ cán bộ tốt: có phẩm chất đạo đức, năng lực chuyên môn, trách nhiệm, gắn bó với nhân dân, tôn trọng pháp luật và có tinh thần phục vụ nhân dân.",
        ],
      },
    ],
    takeaways: [
      "Có quyền lực → phải có kiểm soát quyền lực.",
      "Tham ô, lãng phí, quan liêu, đặc quyền là biểu hiện xa dân.",
      "Cán bộ tốt là điều kiện của Nhà nước trong sạch.",
    ],
  },
  {
    slug: "van-dung-tu-tuong",
    index: "05",
    title: "Vận dụng tư tưởng",
    subtitle: "Xây dựng Nhà nước hiện nay",
    question: "Từ tư tưởng đến thực tiễn",
    color: "text-primary",
    summary:
      "Vận dụng tư tưởng Hồ Chí Minh vào xây dựng Nhà nước trong sạch, vững mạnh, pháp quyền và phục vụ nhân dân.",
    sections: [
      {
        heading: "Năm phương hướng lớn",
        body: ["Từ các slide, có thể hệ thống thành những phương hướng lớn sau:"],
        list: [
          "Xây dựng Nhà nước thực sự trong sạch, vững mạnh",
          "Hoàn thiện hệ thống pháp luật gắn với tổ chức thi hành",
          "Kiểm soát quyền lực nhà nước",
          "Đẩy mạnh dân chủ trong công tác cán bộ",
          "Kiên quyết phòng, chống tham nhũng, lãng phí, quan liêu",
        ],
      },
      {
        heading: "Đảng và Nhà nước",
        body: [
          "Nhà nước đặt dưới sự lãnh đạo của Đảng, nhưng Đảng và Nhà nước không phải là một. Đảng lãnh đạo bằng đường lối; Nhà nước thể chế hóa thành pháp luật và tổ chức thực hiện; nhân dân là chủ thể tham gia và kiểm soát.",
        ],
        quote:
          "Đảng lãnh đạo → Nhà nước thể chế hóa → Nhân dân tham gia & kiểm soát → Phục vụ lợi ích nhân dân.",
      },
    ],
    takeaways: [
      "Hoàn thiện pháp luật gắn với thi hành nghiêm minh.",
      "Kiểm soát quyền lực và tăng trách nhiệm giải trình.",
      "Xây dựng cán bộ có đạo đức, năng lực, trách nhiệm.",
    ],
  },
];

export function getModule(slug: string) {
  return modules.find((m) => m.slug === slug);
}
