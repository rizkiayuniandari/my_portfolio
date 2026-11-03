import Badge from "@/components/ui/Badge";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { education } from "@/app/data/portfolio";

export default function Education() {
  return (
    <section id="education">
      <SectionTitle eyebrow="Education" title="Where I" accent="studied." />

      <GlassCard className="panel">
        <div className="row">
          <h3>{education.school}</h3>
          <span className="when">{education.period}</span>
        </div>
        <p className="mut">
          {education.degree} · {education.location}
        </p>
        <div className="pills" style={{ marginTop: 14 }}>
          <Badge>GPA {education.gpa}</Badge>
        </div>
        <p style={{ marginTop: 18 }}>
          <b>Thesis:</b> <span className="mut">{education.thesis}</span>
        </p>
      </GlassCard>
    </section>
  );
}
