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
    name: "Thành viên 1",
    major: "Kỹ thuật phần mềm",
    role: "Trưởng nhóm · Tổng hợp nội dung & thuyết trình",
    accent: "from-primary to-primary-light",
  },
  {
    id: "m2",
    name: "Thành viên 2",
    major: "Kỹ thuật phần mềm",
    role: "Thiết kế giao diện & trải nghiệm người dùng",
    accent: "from-gold-dark to-gold",
  },
  {
    id: "m3",
    name: "Thành viên 3",
    major: "Kỹ thuật phần mềm",
    role: "Lập trình tính năng & tích hợp AI (DânBot)",
    accent: "from-ink to-ink-soft",
  },
  {
    id: "m4",
    name: "Thành viên 4",
    major: "Kỹ thuật phần mềm",
    role: "Biên tập nội dung & kiểm thử, hoàn thiện",
    accent: "from-primary-dark to-primary",
  },
];

export function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
