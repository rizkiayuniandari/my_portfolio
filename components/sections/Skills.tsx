import Badge from "@/components/ui/Badge";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { skills } from "@/app/data/portfolio";

const groups = [
  { title: "Hard skills", items: skills.hard },
  { title: "Soft skills", items: skills.soft },
  { title: "Tools", items: skills.tools },
];

export default function Skills() {
  return (
    <section id="skills">
      <SectionTitle eyebrow="Skills" title="What I" accent="work with." />

      <div className="steps">
        {groups.map((g, i) => (
          <GlassCard key={g.title} className="step" delay={i * 0.12}>
            <h3>{g.title}</h3>
            <div className="pills" style={{ marginTop: 14 }}>
              {g.items.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
