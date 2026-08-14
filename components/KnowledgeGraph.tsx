export default function KnowledgeGraph() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-ink/10 bg-paper-2/40 p-8">
      <div className="mx-auto flex min-w-[36rem] flex-col items-center gap-3 font-mono text-xs uppercase tracking-wider">
        <GraphNode tone="ink">Nhân dân</GraphNode>
        <Down />
        <div className="flex gap-3">
          <GraphNode tone="primary">Của dân</GraphNode>
          <GraphNode tone="primary">Do dân</GraphNode>
          <GraphNode tone="primary">Vì dân</GraphNode>
        </div>
        <Down />
        <GraphNode tone="ink">Nhà nước dân chủ</GraphNode>
        <Down />
        <div className="flex gap-3">
          <GraphNode tone="gold">Pháp quyền</GraphNode>
          <GraphNode tone="gold">Kiểm soát quyền lực</GraphNode>
        </div>
        <Down />
        <GraphNode tone="primary">Nhà nước trong sạch, vững mạnh</GraphNode>
      </div>
    </div>
  );
}

function GraphNode({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone: "ink" | "primary" | "gold";
}) {
  const styles = {
    ink: "bg-ink text-paper",
    primary: "bg-primary text-paper",
    gold: "border border-gold-dark bg-gold/15 text-primary",
  }[tone];
  return (
    <div className={`rounded-lg px-4 py-2.5 text-center font-semibold ${styles}`}>
      {children}
    </div>
  );
}

function Down() {
  return <div className="h-5 w-px bg-ink/25" />;
}
