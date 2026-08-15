export type Member = {
  id: string;
  name: string; // TODO: thay tên thật
  major: string; // chuyên ngành
  role: string; // chịu trách nhiệm làm gì
  accent: string; // màu điểm nhấn (tailwind gradient)
};

// Mock data — bạn tự thay tên thật sau.
export const team: Member[] = [
  {
    id: "m1",
    name: "Mai Văn Thành",
    major: "Software Engineer",
    role: "Xây dựng nền tảng & phát triển tính năng chính",
    accent: "from-primary to-primary-light",
  },
  {
    id: "m2",
    name: "Nguyễn Thị Cẩm Nhung",
    major: "Digital Marketing",
    role: "Thiết kế giao diện & trải nghiệm người dùng",
    accent: "from-gold-dark to-gold",
  },
  {
    id: "m3",
    name: "Thành viên 3",
    major: "Kỹ thuật phần mềm",
    role: "Hỗ trợ soạn nội dung & tích hợp AI (DânBot)",
    accent: "from-ink to-ink-soft",
  },
  {
    id: "m4",
    name: "Thành viên 4",
    major: "Kỹ thuật phần mềm",
    role: "Hỗ trợ soạn nội dung & kiểm thử, hoàn thiện sản phẩm",
    accent: "from-primary-dark to-primary",
  },
];

export function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
