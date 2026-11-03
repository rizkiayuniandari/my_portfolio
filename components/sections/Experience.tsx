import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { experience } from "@/app/data/portfolio";

export default function Experience() {
  return (
    <section id="work">
      <SectionTitle eyebrow="Work experience" title="Where I've" accent="worked." />

      {experience.map((e) => (
        <GlassCard key={e.company} className="panel">
          <div className="row">
            <h3>{e.company}</h3>
            <span className="when">{e.period}</span>
          </div>
          <p className="mut">
            {e.role} · {e.location}
          </p>
          <ul className="dots">
            {e.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </GlassCard>
      ))}
    </section>
  );
}
