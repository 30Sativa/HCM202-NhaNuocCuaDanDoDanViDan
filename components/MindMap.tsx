type Branch = {
  title: string;
  points: string[];
};

const leftBranches: Branch[] = [
  {
    title: "Của dân",
    points: ["Nhân dân là chủ thể tối cao", "Kiểm tra, giám sát, bãi miễn"],
  },
  {
    title: "Do dân",
    points: ["Dân lập nên Nhà nước", "Dân là chủ + dân làm chủ"],
  },
  {
    title: "Vì dân",
    points: ["Lấy lợi ích nhân dân làm mục tiêu", "Không đặc quyền, đặc lợi"],
  },
];

const rightBranches: Branch[] = [
  {
    title: "Nhà nước pháp quyền",
    points: ["Hợp hiến, hợp pháp", "Thượng tôn pháp luật · nhân nghĩa"],
  },
  {
    title: "Kiểm soát quyền lực",
    points: ["Chống tham ô, lãng phí, quan liêu", "Nhà nước trong sạch, vững mạnh"],
  },
  {
    title: "Bản chất & vận dụng",
    points: ["Giai cấp CN + nhân dân + dân tộc", "Hoàn thiện pháp luật, xây cán bộ"],
  },
];

export default function MindMap() {
  return (
    <div className="rounded-2xl border border-ink/10 bg-paper-2/40 p-6 md:p-10">
      {/* Desktop: hai bên + gốc ở giữa */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-x-4">
        <div className="flex flex-col items-end gap-5">
          {leftBranches.map((b) => (
            <BranchCard key={b.title} branch={b} side="left" tone="primary" />
          ))}
        </div>

        <RootNode />

        <div className="flex flex-col items-start gap-5">
          {rightBranches.map((b) => (
            <BranchCard key={b.title} branch={b} side="right" tone="gold" />
          ))}
        </div>
      </div>

      {/* Mobile / tablet: gốc trên, nhánh xếp dọc */}
      <div className="lg:hidden">
        <div className="flex justify-center">
          <RootNode />
        </div>
        <div className="mt-6 space-y-3">
          {leftBranches.map((b) => (
            <BranchCard key={b.title} branch={b} side="right" tone="primary" />
          ))}
          {rightBranches.map((b) => (
            <BranchCard key={b.title} branch={b} side="right" tone="gold" />
          ))}
        </div>
      </div>
    </div>
  );
}

function RootNode() {
  return (
    <div className="mx-auto max-w-[13rem] rounded-2xl bg-ink px-6 py-5 text-center text-paper shadow-lg">
      <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-gold-light">
        Nhà nước
      </span>
      <p className="mt-1 font-serif text-xl font-bold leading-tight">
        Của dân
        <br />
        Do dân
        <br />
        Vì dân
      </p>
    </div>
  );
}

function BranchCard({
  branch,
  side,
  tone,
}: {
  branch: Branch;
  side: "left" | "right";
  tone: "primary" | "gold";
}) {
  const dot = tone === "primary" ? "bg-primary" : "bg-gold-dark";
  const titleColor = tone === "primary" ? "text-primary" : "text-gold-dark";
  const line = tone === "primary" ? "bg-primary/40" : "bg-gold-dark/40";

  const connector = (
    <span className={`hidden h-0.5 w-6 flex-none rounded-full lg:block ${line}`} />
  );

  return (
    <div
      className={`flex w-full max-w-sm items-center gap-2 ${
        side === "left" ? "flex-row-reverse text-right" : ""
      }`}
    >
      {connector}
      <div className="flex-1 rounded-xl border border-ink/10 bg-paper p-4">
        <div
          className={`flex items-center gap-2 ${
            side === "left" ? "justify-end" : ""
          }`}
        >
          <span className={`h-2.5 w-2.5 flex-none rounded-full ${dot}`} />
          <span className={`font-serif text-lg font-bold ${titleColor}`}>
            {branch.title}
          </span>
        </div>
        <ul className="mt-2 space-y-1">
          {branch.points.map((p) => (
            <li key={p} className="text-xs leading-snug text-ink-soft">
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
