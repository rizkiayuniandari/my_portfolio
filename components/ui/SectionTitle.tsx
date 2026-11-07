interface SectionTitleProps {
  eyebrow: string;
  title: string;
  accent: string;
}

export default function SectionTitle({ eyebrow, title, accent }: SectionTitleProps) {
  return (
    <div className="rv" suppressHydrationWarning>
      <p className="k">{eyebrow}</p>
      <h2>
        {title} <em>{accent}</em>
      </h2>
    </div>
  );
}
