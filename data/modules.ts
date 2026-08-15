export type ModuleSection = {
  heading: string;
  body: string[];
  list?: string[];
  quote?: string;
  part?: string; // tên phần để nhóm các mục (hiển thị đường phân cách)
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
        part: "Dân chủ",
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
        part: "Bản chất Nhà nước",
        heading: "Nhà nước thuộc về nhân dân",
        body: [
          "Nhà nước Việt Nam ra đời là kết quả của cuộc đấu tranh lâu dài, gian khổ của nhiều thế hệ người Việt Nam. Vì vậy, Nhà nước không phải của riêng một giai cấp hay tầng lớp nào mà thuộc về nhân dân — bảo vệ lợi ích của nhân dân và lấy lợi ích của nhân dân làm cơ bản.",
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
        part: "Ba thành tố",
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
          "Nhà nước tồn tại để phục vụ nhân dân. Mọi đường lối, chính sách phải hướng đến quyền lợi của nhân dân. Nhà nước vì dân phải trong sạch, không có bất kỳ đặc quyền, đặc lợi nào.",
        ],
        quote:
          "Phải làm cho dân có ăn, phải làm cho dân có mặc, phải làm cho dân có chỗ ở, và phải làm cho dân được học hành.",
      },
      {
        part: "Khác nhau & liên hệ",
        heading: "Ba thành tố khác nhau ở đâu?",
        body: [
          "Cả ba đều hướng tới nhân dân, nhưng mỗi thành tố nhấn mạnh một phương diện khác nhau — trả lời một câu hỏi khác nhau:",
        ],
        list: [
          "Của dân — nhấn mạnh CHỦ THỂ của quyền lực: Ai là chủ?",
          "Do dân — nhấn mạnh HÌNH THÀNH & THỰC HIỆN quyền làm chủ: Ai lập nên, ai làm chủ?",
          "Vì dân — nhấn mạnh MỤC TIÊU hoạt động: Nhà nước hoạt động vì ai?",
        ],
      },
      {
        heading: "Ba thành tố liên hệ với nhau thế nào?",
        body: [
          "Ba thành tố không đứng riêng rẽ mà tạo thành một chỉnh thể thống nhất. Vì nhân dân là chủ (của dân) nên nhân dân lập nên và làm chủ Nhà nước (do dân); và vì thế quyền lực phải được dùng để phục vụ nhân dân (vì dân).",
          "Nếu chỉ có “của dân” mà thiếu “do dân”, nhân dân mới là chủ về vị trí mà chưa thực hiện được quyền làm chủ. Nếu có “do dân” mà thiếu “vì dân”, quyền lực được thực hiện nhưng chưa rõ mục tiêu phục vụ. Nếu có “vì dân” mà thiếu “của dân, do dân” thì mục tiêu phục vụ lại thiếu cơ sở về chủ thể và quyền làm chủ.",
        ],
        quote:
          "Nhân dân là chủ → Nhân dân làm chủ → Quyền lực được sử dụng vì nhân dân.",
      },
      {
        part: "Quan hệ từng cặp",
        heading: "Quan hệ giữa “Của dân” và “Do dân”",
        body: [
          "“Của dân” khẳng định: dân là chủ. “Do dân” khẳng định: dân làm chủ. Hai nội dung này không thể tách rời.",
          "Nếu nhân dân là chủ thì nhân dân phải được thực hiện quyền làm chủ của mình. Nếu nhân dân làm chủ thì Nhà nước phải tạo điều kiện và cơ chế để quyền làm chủ đó được thực hiện. Đây chính là mối nối giữa “của dân” và “do dân”.",
        ],
        quote: "Dân là chủ → Dân làm chủ.",
      },
      {
        heading: "Quan hệ giữa “Do dân” và “Vì dân”",
        body: [
          "Nhân dân lập nên Nhà nước và thực hiện quyền làm chủ không phải là mục đích cuối cùng. Quyền lực được hình thành và thực hiện phải hướng tới việc lấy lợi ích chính đáng của nhân dân làm mục tiêu.",
          "“Do dân” nói về việc nhân dân thực hiện quyền làm chủ; “vì dân” nói về mục tiêu của việc sử dụng quyền lực đó.",
        ],
        quote: "Dân làm chủ → Quyền lực phải được sử dụng vì dân.",
      },
      {
        heading: "Quan hệ giữa “Của dân” và “Vì dân”",
        body: [
          "Nhà nước thuộc về nhân dân thì Nhà nước phải bảo vệ lợi ích của nhân dân, lấy lợi ích nhân dân làm cơ bản. Nhà nước thuộc về nhân dân thì mục tiêu hoạt động phải hướng đến nhân dân.",
        ],
        quote: "Của dân → Vì dân.",
      },
    ],
    takeaways: [
      "CỦA DÂN = chủ thể (nhân dân là chủ).",
      "DO DÂN = dân là chủ + dân làm chủ (thực hiện quyền làm chủ).",
      "VÌ DÂN = mục tiêu (lấy lợi ích chính đáng của nhân dân).",
      "Của dân ↔ Do dân: Dân là chủ → Dân làm chủ.",
      "Do dân ↔ Vì dân: Dân làm chủ → Quyền lực dùng vì dân.",
      "Của dân ↔ Vì dân: Thuộc về dân → Mục tiêu hướng đến dân.",
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
        part: "Nhà nước pháp quyền",
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
        heading: "Vai trò kép của pháp luật",
        body: [
          "Pháp luật là cơ sở để bảo đảm “của dân – do dân – vì dân”. Nó có vai trò kép: vừa là công cụ để Nhà nước quản lý xã hội, vừa là công cụ để nhân dân làm chủ, kiểm tra và giám sát quyền lực nhà nước.",
        ],
        list: [
          "Hoàn thiện hệ thống pháp luật",
          "Tôn trọng, bảo đảm và bảo vệ quyền con người",
          "Bảo đảm quyền và nghĩa vụ của công dân",
          "Có cơ chế phân công, phối hợp và kiểm soát quyền lực",
        ],
      },
      {
        part: "Pháp quyền nhân nghĩa",
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
        part: "Kiểm soát quyền lực",
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
          "Hách dịch, cửa quyền",
          "Đặc quyền, đặc lợi — dùng quyền lực tạo lợi ích riêng",
        ],
      },
      {
        part: "Xây dựng cán bộ",
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
        part: "Vận dụng hiện nay",
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
      {
        part: "Liên hệ thực tiễn",
        heading: "Liên hệ thực tiễn",
        body: [
          "Tư tưởng “của dân – do dân – vì dân” không chỉ là lý thuyết mà gắn với trách nhiệm của từng chủ thể:",
        ],
        list: [
          "Nhân dân: là chủ thể quyền lực — thực hiện quyền và nghĩa vụ công dân, tham gia đời sống xã hội và giám sát, kiểm soát quyền lực Nhà nước.",
          "Nhà nước: hoạt động trong khuôn khổ pháp luật, bảo vệ quyền con người và quyền công dân, chịu sự kiểm soát, lấy lợi ích chính đáng của nhân dân làm mục tiêu.",
          "Cán bộ, công chức: có đạo đức, bản lĩnh, năng lực và trách nhiệm; không biến quyền lực thành công cụ phục vụ lợi ích cá nhân.",
          "Sinh viên: hiểu và thực hiện quyền, nghĩa vụ công dân; chấp hành pháp luật; có trách nhiệm với tập thể, cộng đồng; tham gia hoạt động xã hội phù hợp và tôn trọng quyền, lợi ích của người khác.",
        ],
      },
    ],
    takeaways: [
      "Hoàn thiện pháp luật gắn với thi hành nghiêm minh.",
      "Kiểm soát quyền lực và tăng trách nhiệm giải trình.",
      "Xây dựng cán bộ có đạo đức, năng lực, trách nhiệm.",
      "Sinh viên vận dụng: sống, học tập và hành động theo tinh thần “dân là chủ”.",
    ],
  },
];

export function getModule(slug: string) {
  return modules.find((m) => m.slug === slug);
}
