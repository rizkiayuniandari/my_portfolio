import Badge from "@/components/ui/Badge";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { educations } from "@/app/data/portfolio";

export default function Education() {
  return (
    <section id="education">
      <SectionTitle eyebrow="Education" title="Where I" accent="studied." />

      {educations.map((edu, i) => (
        <GlassCard key={edu.school} className="panel" delay={i * 0.1}>
          <div className="row">
            <h3>{edu.school} - {edu.location}</h3>
            <span className="when">{edu.period}</span>
          </div>

          <p className="mut">
            {edu.degree} 
          </p>

          {edu.gpa && (
            <div className="pills" style={{ marginTop: 14 }}>
              <Badge>GPA {edu.gpa}</Badge>
            </div>
          )}

          {edu.thesis && (
            <p style={{ marginTop: 18 }}>
              <b>Thesis:</b> <span className="mut">{edu.thesis}</span>
            </p>
          )}

          {edu.points.length > 0 && (
            <>
              <ul className="dots">
                {edu.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </>
          )}
        </GlassCard>
      ))}
    </section>
  );
}