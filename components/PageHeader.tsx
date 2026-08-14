import Reveal from "./Reveal";

export default function PageHeader({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="border-b border-ink/10 bg-grain">
      <div className="mx-auto max-w-content px-5 py-14 md:px-8 md:py-20">
        <Reveal>
          <span className="kicker">{kicker}</span>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl font-bold leading-[1.02] text-ink md:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {intro}
            </p>
          )}
        </Reveal>
      </div>
    </div>
  );
}
