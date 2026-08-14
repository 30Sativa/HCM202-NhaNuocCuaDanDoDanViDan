export type TreeNode = {
  id: string;
  label: string;
  tone?: "primary" | "gold";
  aiContext?: string; // nội dung để AI trả lời (giới hạn trong mục này)
  children?: TreeNode[];
};

export const mindTree: TreeNode = {
  id: "root",
  label: "Nhà nước của dân · do dân · vì dân",
  children: [
    {
      id: "cua-dan",
      label: "Của dân",
      tone: "primary",
      aiContext:
        "“Nhà nước của dân” khẳng định mọi quyền lực nhà nước thuộc về nhân dân; nhân dân là chủ thể tối cao của quyền lực. Quyền lực nhà nước không phải quyền lực tự thân của bộ máy mà có nguồn gốc từ nhân dân — là quyền lực được “thừa ủy quyền” của nhân dân. Nhân dân có quyền kiểm tra, giám sát, phê bình và bãi miễn đại biểu do mình bầu ra. Cốt lõi: Của dân = nhân dân là chủ; trao quyền không có nghĩa là mất quyền.",
      children: [
        {
          id: "cd-chu-the",
          label: "Nhân dân là chủ thể tối cao",
          children: [
            { id: "cd-1a", label: "Mọi quyền lực nhà nước thuộc về nhân dân" },
            { id: "cd-1b", label: "Không phải quyền lực tự thân của bộ máy" },
          ],
        },
        {
          id: "cd-uy-quyen",
          label: "Quyền lực là “thừa ủy quyền”",
          children: [
            { id: "cd-2a", label: "Nhân dân trao quyền cho Nhà nước" },
            { id: "cd-2b", label: "Trao quyền không có nghĩa là mất quyền" },
          ],
        },
        {
          id: "cd-kiem-soat",
          label: "Nhân dân kiểm soát quyền lực",
          children: [
            { id: "cd-3a", label: "Kiểm tra, giám sát, phê bình" },
            { id: "cd-3b", label: "Bãi miễn đại biểu không xứng đáng" },
          ],
        },
      ],
    },
    {
      id: "do-dan",
      label: "Do dân",
      tone: "primary",
      aiContext:
        "“Nhà nước do dân” nhấn mạnh nguồn gốc hình thành và việc thực hiện quyền làm chủ: Nhà nước do nhân dân lập nên, nhân dân là chủ và làm chủ. “Dân là chủ” xác định vị thế, địa vị của nhân dân; “dân làm chủ” nhấn mạnh quyền lợi và nghĩa vụ của nhân dân với tư cách người chủ. Nhân dân tham gia qua bầu cử, quản lý nhà nước và xã hội, đóng góp ý kiến, giám sát. Cốt lõi: Do dân = dân là chủ + dân làm chủ.",
      children: [
        { id: "dd-lap-nen", label: "Nhà nước do nhân dân lập nên" },
        {
          id: "dd-la-chu",
          label: "“Dân là chủ” — xác định vị thế",
          children: [
            { id: "dd-2a", label: "Vị trí, địa vị của nhân dân với quyền lực" },
          ],
        },
        {
          id: "dd-lam-chu",
          label: "“Dân làm chủ” — quyền lợi & nghĩa vụ",
          children: [
            { id: "dd-3a", label: "Bầu cử" },
            { id: "dd-3b", label: "Tham gia quản lý nhà nước & xã hội" },
            { id: "dd-3c", label: "Đóng góp ý kiến, giám sát, phê bình" },
          ],
        },
      ],
    },
    {
      id: "vi-dan",
      label: "Vì dân",
      tone: "primary",
      aiContext:
        "“Nhà nước vì dân” xác định mục tiêu hoạt động là phục vụ nhân dân, lấy lợi ích chính đáng của nhân dân làm mục tiêu và thước đo. Hồ Chí Minh nêu cụ thể: phải làm cho dân có ăn, có mặc, có chỗ ở và được học hành. Nhà nước vì dân phải trong sạch, không có bất kỳ đặc quyền, đặc lợi nào; cán bộ là người phục vụ nhân dân. Cốt lõi: Vì dân = lấy lợi ích nhân dân làm mục tiêu.",
      children: [
        { id: "vd-muc-tieu", label: "Phục vụ nhân dân là mục tiêu" },
        { id: "vd-thuoc-do", label: "Lấy lợi ích chính đáng làm thước đo" },
        {
          id: "vd-cham-lo",
          label: "Chăm lo đời sống nhân dân",
          children: [
            { id: "vd-3a", label: "Có ăn" },
            { id: "vd-3b", label: "Có mặc" },
            { id: "vd-3c", label: "Có chỗ ở" },
            { id: "vd-3d", label: "Được học hành" },
          ],
        },
        { id: "vd-trong-sach", label: "Không đặc quyền, đặc lợi" },
      ],
    },
    {
      id: "phap-quyen",
      label: "Nhà nước pháp quyền",
      tone: "gold",
      aiContext:
        "Nhà nước pháp quyền: Nhà nước Việt Nam Dân chủ Cộng hòa ra đời 02/09/1945; Tổng tuyển cử 06/01/1946; Quốc hội khóa I họp phiên đầu 02/03/1946 — thể hiện Nhà nước hợp hiến, hợp pháp, chính danh. Nhà nước quản lý xã hội bằng pháp luật và làm cho pháp luật có hiệu lực thực tế; chính Nhà nước và cán bộ, công chức cũng phải tuân thủ pháp luật. Pháp quyền nhân nghĩa: nghiêm minh nhưng nhân văn, bảo vệ quyền con người, công bằng và khuyến thiện (giáo dục, cảm hóa, thức tỉnh).",
      children: [
        {
          id: "pq-hop-hien",
          label: "Hợp hiến, hợp pháp",
          children: [
            { id: "pq-1a", label: "02/09/1945 — khai sinh Nhà nước" },
            { id: "pq-1b", label: "06/01/1946 — Tổng tuyển cử" },
            { id: "pq-1c", label: "02/03/1946 — Quốc hội khóa I" },
          ],
        },
        {
          id: "pq-thuong-ton",
          label: "Thượng tôn pháp luật",
          children: [
            { id: "pq-2a", label: "Quản lý xã hội bằng pháp luật" },
            { id: "pq-2b", label: "Nhà nước & cán bộ cũng phải tuân thủ" },
          ],
        },
        {
          id: "pq-nhan-nghia",
          label: "Pháp quyền nhân nghĩa",
          children: [
            { id: "pq-3a", label: "Nghiêm minh + nhân văn" },
            { id: "pq-3b", label: "Khuyến thiện: giáo dục, cảm hóa" },
          ],
        },
      ],
    },
    {
      id: "kiem-soat",
      label: "Kiểm soát quyền lực",
      tone: "gold",
      aiContext:
        "Kiểm soát quyền lực nhà nước là tất yếu nhằm giữ vững bản chất Nhà nước, bảo đảm hiệu quả và phòng ngừa tha hóa. Nhân dân là chủ thể tối cao nên có quyền kiểm soát quyền lực. Nếu không kiểm soát: quyền lực → lạm dụng → tha hóa → đặc quyền, đặc lợi → xa dân. Cần phòng, chống: tham ô, lãng phí, quan liêu, tư túng, chia rẽ, kiêu ngạo, đặc quyền, đặc lợi. Đây là điều kiện để Nhà nước trong sạch, vững mạnh.",
      children: [
        { id: "ks-tat-yeu", label: "Có quyền lực → phải kiểm soát" },
        { id: "ks-nhan-dan", label: "Nhân dân kiểm soát quyền lực nhà nước" },
        {
          id: "ks-tieu-cuc",
          label: "Phòng, chống tiêu cực",
          children: [
            { id: "ks-3a", label: "Tham ô" },
            { id: "ks-3b", label: "Lãng phí" },
            { id: "ks-3c", label: "Quan liêu" },
            { id: "ks-3d", label: "Đặc quyền, đặc lợi" },
          ],
        },
      ],
    },
    {
      id: "ban-chat",
      label: "Bản chất & vận dụng",
      tone: "gold",
      aiContext:
        "Bản chất Nhà nước Việt Nam là sự thống nhất giữa bản chất giai cấp công nhân với tính nhân dân và tính dân tộc, đặt dưới sự lãnh đạo của Đảng, theo nguyên tắc tập trung dân chủ và định hướng xã hội chủ nghĩa. Vận dụng hiện nay: xây dựng Nhà nước trong sạch, vững mạnh; hoàn thiện pháp luật gắn với thi hành; kiểm soát quyền lực; xây dựng cán bộ. Liên hệ sinh viên: hiểu và thực hiện quyền, nghĩa vụ công dân; chấp hành pháp luật; có trách nhiệm với cộng đồng.",
      children: [
        {
          id: "bc-thong-nhat",
          label: "Bản chất thống nhất",
          children: [
            { id: "bc-1a", label: "Giai cấp công nhân" },
            { id: "bc-1b", label: "Tính nhân dân" },
            { id: "bc-1c", label: "Tính dân tộc" },
          ],
        },
        { id: "bc-dang", label: "Đặt dưới sự lãnh đạo của Đảng" },
        {
          id: "bc-van-dung",
          label: "Vận dụng hiện nay",
          children: [
            { id: "bc-3a", label: "Hoàn thiện pháp luật, thi hành nghiêm minh" },
            { id: "bc-3b", label: "Kiểm soát quyền lực" },
            { id: "bc-3c", label: "Xây dựng đội ngũ cán bộ" },
          ],
        },
        { id: "bc-sinh-vien", label: "Liên hệ sinh viên: sống theo “dân là chủ”" },
      ],
    },
  ],
};
