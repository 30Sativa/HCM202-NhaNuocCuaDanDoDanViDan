// Dữ liệu cho mô phỏng "Quyền lực có thể bị tha hóa như thế nào?"
export type FlowStep = { label: string };

export const controlledFlow: FlowStep[] = [
  { label: "Quyền lực" },
  { label: "Kiểm soát" },
  { label: "Minh bạch" },
  { label: "Trách nhiệm" },
  { label: "Phục vụ dân" },
];

export const uncontrolledFlow: FlowStep[] = [
  { label: "Quyền lực" },
  { label: "Lạm dụng" },
  { label: "Quan liêu" },
  { label: "Đặc quyền" },
  { label: "Tham nhũng" },
  { label: "Xa dân" },
];

// Chu trình ủy quyền Nhân dân ↔ Nhà nước
export const powerCycle: string[] = [
  "NHÂN DÂN",
  "Trao quyền / ủy quyền",
  "NHÀ NƯỚC",
  "Thực hiện quyền lực",
  "Phục vụ nhân dân",
  "Kiểm tra / giám sát",
];
