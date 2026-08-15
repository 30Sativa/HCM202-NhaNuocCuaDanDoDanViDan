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
    slug: "nha-nuoc-cua-dan",
    index: "01",
    title: "Nhà nước của dân",
    subtitle: "Nhân dân là chủ thể của quyền lực",
    question: "Ai là chủ?",
    color: "text-primary",
    summary:
      "Mọi quyền lực nhà nước thuộc về nhân dân — nhân dân là chủ thể tối cao của quyền lực nhà nước.",
    sections: [
      {
        part: "Quyền lực thuộc về nhân dân",
        heading: "Nhà nước thuộc về nhân dân",
        body: [
          "Trong tư tưởng Hồ Chí Minh, Nhà nước phải gắn bó chặt chẽ với nhân dân. Nhà nước Việt Nam ra đời là kết quả của cuộc đấu tranh lâu dài, gian khổ của nhiều thế hệ người Việt Nam.",
          "Vì vậy, Nhà nước không phải của riêng một giai cấp hay tầng lớp nào mà thuộc về nhân dân — bảo vệ lợi ích của nhân dân và lấy lợi ích của nhân dân làm cơ bản.",
        ],
      },
      {
        heading: "Quyền lực là “thừa ủy quyền” của nhân dân",
        body: [
          "Nhân dân là chủ thể của quyền lực nhà nước. Quyền lực nhà nước không phải quyền lực tự thân của bộ máy mà có nguồn gốc từ nhân dân.",
          "Nhân dân là chủ thể tối cao của quyền lực nên có quyền kiểm soát, phê bình Nhà nước; có quyền bãi miễn những đại biểu mình đã bầu ra và có quyền đối với những thiết chế quyền lực do mình lập nên. Pháp luật dân chủ là công cụ để nhân dân thực hiện quyền lực.",
        ],
        quote: "Quyền lực nhà nước là “thừa ủy quyền” của nhân dân.",
      },
      {
        part: "Bản chất của “của dân”",
        heading: "“Của dân” nhấn mạnh điều gì?",
        body: [
          "“Của dân” nhấn mạnh vị trí của nhân dân đối với quyền lực nhà nước. Nhân dân không phải chỉ là đối tượng chịu sự quản lý của Nhà nước, mà là chủ thể tối cao của quyền lực nhà nước.",
          "Câu hỏi: Ai là chủ thể của quyền lực nhà nước? → Nhân dân.",
        ],
        quote: "CỦA DÂN = NHÂN DÂN LÀ CHỦ.",
      },
    ],
    takeaways: [
      "Nhân dân là chủ thể tối cao của quyền lực nhà nước.",
      "Quyền lực có nguồn gốc từ nhân dân (thừa ủy quyền).",
      "Trao quyền không có nghĩa là mất quyền — nhân dân kiểm soát quyền lực.",
    ],
  },
  {
    slug: "nha-nuoc-do-dan",
    index: "02",
    title: "Nhà nước do dân",
    subtitle: "Dân là chủ và dân làm chủ",
    question: "Ai lập nên & ai làm chủ?",
    color: "text-primary",
    summary:
      "Nhà nước do nhân dân lập nên; nhân dân vừa là chủ, vừa làm chủ và tham gia thực hiện quyền lực.",
    sections: [
      {
        part: "Do nhân dân lập nên",
        heading: "Nhà nước do nhân dân lập nên",
        body: [
          "“Do nhân dân” nhấn mạnh vai trò chủ động của nhân dân trong việc hình thành Nhà nước và thực hiện quyền làm chủ.",
          "Nhân dân không chỉ là chủ thể của quyền lực mà còn là người tham gia vào quá trình hình thành và thực hiện quyền lực đó.",
        ],
        quote:
          "Nhà nước do nhân dân lập nên; Nhà nước do nhân dân làm chủ và dân là chủ.",
      },
      {
        part: "Dân là chủ & dân làm chủ",
        heading: "Phân biệt “dân là chủ” và “dân làm chủ”",
        body: [
          "“Dân là chủ” khẳng định vị thế của nhân dân đối với quyền lực nhà nước → nhân dân là người chủ.",
          "“Dân làm chủ” khẳng định quyền lợi và nghĩa vụ của nhân dân với tư cách người chủ → nhân dân thực hiện quyền làm chủ của mình.",
          "Vì vậy, “do nhân dân” không chỉ là Nhà nước do dân lập nên, mà còn là nhân dân thực hiện quyền và nghĩa vụ của người chủ.",
        ],
        quote: "DO DÂN = DÂN LÀ CHỦ + DÂN LÀM CHỦ.",
      },
      {
        heading: "Nhân dân tham gia bằng cách nào?",
        body: ["Nhân dân thực hiện quyền làm chủ qua nhiều hình thức:"],
        list: [
          "Bầu cử",
          "Tham gia quản lý nhà nước và xã hội",
          "Đóng góp ý kiến xây dựng chính sách, pháp luật",
          "Giám sát hoạt động của cơ quan nhà nước",
          "Phê bình cán bộ, công chức",
          "Thực hiện quyền và nghĩa vụ công dân",
        ],
      },
    ],
    takeaways: [
      "Nhà nước do nhân dân lập nên.",
      "“Dân là chủ” xác định vị thế; “dân làm chủ” là quyền lợi và nghĩa vụ.",
      "Nhân dân tham gia và thực hiện quyền làm chủ trong thực tế.",
    ],
  },
  {
    slug: "nha-nuoc-vi-dan",
    index: "03",
    title: "Nhà nước vì dân",
    subtitle: "Lấy lợi ích nhân dân làm mục tiêu",
    question: "Vì ai?",
    color: "text-primary",
    summary:
      "Nhà nước tồn tại để phục vụ nhân dân, lấy lợi ích chính đáng của nhân dân làm mục tiêu và thước đo.",
    sections: [
      {
        part: "Lợi ích nhân dân là mục tiêu",
        heading: "“Vì dân” là mục tiêu hoạt động",
        body: [
          "“Vì nhân dân” tập trung vào mục tiêu hoạt động của Nhà nước: lấy lợi ích chính đáng của nhân dân làm mục tiêu. Mọi đường lối, chính sách chỉ nhằm mang lại quyền lợi cho nhân dân.",
          "Câu hỏi: Nhà nước hoạt động vì ai và nhằm mục tiêu gì? → Vì nhân dân, vì lợi ích chính đáng của nhân dân.",
        ],
        quote:
          "Một nhà nước hoàn toàn trong sạch, không có bất kì một đặc quyền, đặc lợi nào.",
      },
      {
        part: "“Vì dân” trong đời sống",
        heading: "Thể hiện rất cụ thể",
        body: [
          "Nhà nước vì dân phải hướng toàn bộ hoạt động của mình tới việc bảo đảm quyền lợi và lợi ích chính đáng của nhân dân, phục vụ đời sống nhân dân, không để quyền lực biến thành đặc quyền, đặc lợi.",
        ],
        quote:
          "Phải làm cho dân có ăn, phải làm cho dân có mặc, phải làm cho dân có chỗ ở, và phải làm cho dân được học hành.",
      },
    ],
    takeaways: [
      "VÌ DÂN = lấy lợi ích chính đáng của nhân dân làm mục tiêu.",
      "Nhà nước vì dân phải trong sạch, không đặc quyền đặc lợi.",
      "Chăm lo đời sống: ăn, mặc, ở, học hành.",
    ],
  },
  {
    slug: "moi-quan-he-ba-thanh-to",
    index: "04",
    title: "Mối quan hệ ba thành tố",
    subtitle: "Khác nhau & liên hệ thống nhất",
    question: "Ba thành tố gắn với nhau thế nào?",
    color: "text-primary",
    summary:
      "Của dân, do dân, vì dân khác nhau về phương diện nhấn mạnh nhưng thống nhất, không thể tách rời.",
    sections: [
      {
        part: "Khác nhau ở đâu",
        heading: "Ba thành tố khác nhau ở đâu?",
        body: [
          "Cả ba đều hướng tới nhân dân, nhưng mỗi thành tố nhấn mạnh một phương diện khác nhau — trả lời một câu hỏi khác nhau:",
        ],
        list: [
          "Của dân — nhấn mạnh CHỦ THỂ của quyền lực: Ai là chủ?",
          "Do dân — nhấn mạnh HÌNH THÀNH & THỰC HIỆN quyền làm chủ: Ai lập nên, ai làm chủ?",
          "Vì dân — nhấn mạnh MỤC TIÊU hoạt động: Nhà nước hoạt động vì ai?",
        ],
        quote: "CỦA DÂN = CHỦ THỂ · DO DÂN = THỰC HIỆN QUYỀN LÀM CHỦ · VÌ DÂN = MỤC TIÊU.",
      },
      {
        part: "Liên hệ thống nhất",
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
          "Nếu nhân dân là chủ thì phải được thực hiện quyền làm chủ; nếu nhân dân làm chủ thì Nhà nước phải tạo điều kiện và cơ chế để quyền làm chủ được thực hiện. Đây là mối nối giữa “của dân” và “do dân”.",
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
          "Nhà nước thuộc về nhân dân thì Nhà nước phải bảo vệ lợi ích của nhân dân, lấy lợi ích nhân dân làm cơ bản; mục tiêu hoạt động phải hướng đến nhân dân.",
        ],
        quote: "Của dân → Vì dân.",
      },
    ],
    takeaways: [
      "Khác nhau: chủ thể / thực hiện quyền làm chủ / mục tiêu.",
      "Thống nhất: nhân dân là chủ → làm chủ → quyền lực vì nhân dân.",
      "Của↔Do · Do↔Vì · Của↔Vì — bổ sung cho nhau, không tách rời.",
    ],
  },
  {
    slug: "phap-quyen-kiem-soat",
    index: "05",
    title: "Pháp quyền & kiểm soát quyền lực",
    subtitle: "Pháp luật, kiểm soát & trong sạch",
    question: "Làm sao quyền lực không tha hóa?",
    color: "text-primary",
    summary:
      "Muốn thực sự của dân, do dân, vì dân, quyền lực phải được kiểm soát bằng pháp luật và Nhà nước phải trong sạch, vững mạnh.",
    sections: [
      {
        part: "Kiểm soát quyền lực",
        heading: "Từ “của – do – vì” đến kiểm soát",
        body: [
          "Muốn Nhà nước thực sự của dân, do dân, vì dân thì quyền lực nhà nước phải được kiểm soát. Nhân dân là chủ thể tối cao nên nhân dân có quyền kiểm soát quyền lực nhà nước.",
        ],
        list: [
          "Của dân → Nhân dân là chủ → Nhân dân kiểm soát quyền lực",
          "Do dân → Nhân dân làm chủ → Nhân dân tham gia, kiểm tra, giám sát",
          "Vì dân → Quyền lực dùng đúng mục tiêu → Phục vụ nhân dân",
        ],
        quote: "Kiểm soát quyền lực nhà nước là tất yếu.",
      },
      {
        part: "Pháp luật – cơ sở bảo đảm",
        heading: "Vai trò kép của pháp luật",
        body: [
          "Pháp luật giữ vai trò quan trọng để bảo đảm quyền lực được tổ chức và thực hiện đúng. Nó có vai trò kép: vừa là công cụ để Nhà nước quản lý xã hội, vừa là công cụ để nhân dân làm chủ, kiểm tra, giám sát quyền lực nhà nước.",
        ],
        list: [
          "Hoàn thiện hệ thống pháp luật",
          "Tôn trọng, bảo đảm và bảo vệ quyền con người",
          "Bảo đảm quyền và nghĩa vụ của công dân",
          "Có cơ chế phân công, phối hợp và kiểm soát quyền lực",
        ],
      },
      {
        part: "Trong sạch, vững mạnh",
        heading: "Điều kiện để “vì dân”",
        body: [
          "Muốn Nhà nước thực sự vì dân, Nhà nước phải trong sạch và vững mạnh: hoàn thiện và thi hành pháp luật, bảo đảm quyền con người và quyền công dân, kiểm soát quyền lực, xây dựng đội ngũ cán bộ có phẩm chất và năng lực.",
          "Một Nhà nước vì dân phải là Nhà nước trong sạch, không có đặc quyền, đặc lợi. Những biểu hiện cần tập trung chống:",
        ],
        list: [
          "Tham ô",
          "Lãng phí",
          "Quan liêu",
          "Tư túng, chia rẽ, kiêu ngạo",
          "Hách dịch, cửa quyền",
          "Đặc quyền, đặc lợi",
        ],
      },
      {
        part: "Hợp hiến, hợp pháp",
        heading: "Hợp hiến, hợp pháp & thượng tôn pháp luật",
        body: [
          "Nhà nước Việt Nam Dân chủ Cộng hòa ra đời 02/09/1945. Ngày 06/01/1946, Tổng tuyển cử bầu Quốc hội — cơ quan quyền lực của nhân dân. Ngày 02/03/1946, Quốc hội khóa I họp phiên đầu tiên, lập ra bộ máy và các chức vụ chính thức của Nhà nước.",
          "Hồ Chí Minh chú trọng xây dựng hệ thống pháp luật dân chủ, hiện đại; đưa pháp luật vào cuộc sống; bảo đảm pháp luật được thi hành; có cơ chế giám sát và đề cao tính nghiêm minh của pháp luật.",
        ],
        quote:
          "Người có quyền lực càng lớn thì càng phải chịu sự ràng buộc của pháp luật.",
      },
      {
        part: "Pháp quyền nhân nghĩa",
        heading: "Pháp quyền nhân nghĩa",
        body: [
          "Nét đặc sắc trong tư tưởng Hồ Chí Minh: pháp luật có tính nhân văn và khuyến thiện — không chỉ quản lý mà còn bảo vệ con người và phục vụ những giá trị tốt đẹp của xã hội.",
        ],
        list: [
          "Nhân văn: ghi nhận, bảo vệ quyền con người; nghiêm minh nhưng khách quan, công bằng; chống đối xử dã man",
          "Khuyến thiện: bảo vệ cái đúng, cái tốt; giáo dục, cảm hóa, thức tỉnh con người",
        ],
        quote: "Pháp luật nghiêm minh nhưng nhân văn, khuyến thiện.",
      },
    ],
    takeaways: [
      "Có quyền lực → phải có kiểm soát quyền lực.",
      "Pháp luật có vai trò kép: quản lý xã hội + để nhân dân kiểm soát.",
      "Nhà nước trong sạch, vững mạnh là điều kiện để vì dân.",
      "Pháp quyền nhân nghĩa: nghiêm minh + nhân văn + khuyến thiện.",
    ],
  },
  {
    slug: "lien-he-van-dung",
    index: "06",
    title: "Liên hệ thực tiễn & vận dụng",
    subtitle: "Từ tư tưởng đến hành động",
    question: "Vận dụng thế nào?",
    color: "text-primary",
    summary:
      "Tư tưởng của dân – do dân – vì dân gắn với trách nhiệm của từng chủ thể và định hướng xây dựng Nhà nước hiện nay.",
    sections: [
      {
        part: "Liên hệ thực tiễn",
        heading: "Trách nhiệm của từng chủ thể",
        body: [
          "Tư tưởng “của dân – do dân – vì dân” không chỉ là lý thuyết mà gắn với trách nhiệm của từng chủ thể:",
        ],
        list: [
          "Nhân dân: là chủ thể quyền lực — thực hiện quyền và nghĩa vụ công dân, tham gia đời sống xã hội và kiểm soát quyền lực nhà nước.",
          "Nhà nước: hoạt động trong khuôn khổ pháp luật, bảo vệ quyền con người và quyền công dân, chịu sự kiểm soát, lấy lợi ích chính đáng của nhân dân làm mục tiêu.",
          "Cán bộ, công chức: có đạo đức, bản lĩnh, trình độ, năng lực và trách nhiệm; không để quyền lực thành công cụ phục vụ lợi ích cá nhân.",
          "Sinh viên: hiểu và thực hiện quyền, nghĩa vụ công dân; chấp hành pháp luật; có trách nhiệm với cộng đồng; tham gia hoạt động xã hội phù hợp và tôn trọng quyền, lợi ích của người khác.",
        ],
      },
      {
        part: "Vận dụng hiện nay",
        heading: "Phương hướng xây dựng Nhà nước",
        body: ["Vận dụng tư tưởng vào xây dựng Nhà nước hiện nay:"],
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
        part: "Kết luận",
        heading: "Cô đọng toàn bộ tư tưởng",
        body: [
          "Tư tưởng Hồ Chí Minh về Nhà nước của nhân dân, do nhân dân, vì nhân dân thể hiện sự thống nhất giữa chủ thể của quyền lực, việc thực hiện quyền làm chủ và mục tiêu của quyền lực nhà nước.",
          "Ba thành tố khác nhau về nội dung nhấn mạnh, nhưng thống nhất về chủ thể và mục tiêu trung tâm là nhân dân — cùng thể hiện tư tưởng lấy nhân dân làm gốc.",
        ],
        quote: "DÂN LÀ CHỦ → DÂN LÀM CHỦ → NHÀ NƯỚC VÌ DÂN.",
      },
    ],
    takeaways: [
      "Nhân dân · Nhà nước · Cán bộ · Sinh viên — mỗi bên một trách nhiệm.",
      "Vận dụng: trong sạch vững mạnh, hoàn thiện pháp luật, kiểm soát quyền lực.",
      "Lấy nhân dân làm gốc trong xây dựng và tổ chức Nhà nước.",
    ],
  },
];

export function getModule(slug: string) {
  return modules.find((m) => m.slug === slug);
}
