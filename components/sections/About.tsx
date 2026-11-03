import GlassCard from "@/components/ui/GlassCard";
import { about, projects, certificates } from "@/app/data/portfolio";

export default function About() {
  return (
    <section id="about">
      <GlassCard className="intro">
        <p className="k">About me</p>
        <h2>
          Front-end developer &amp; <em>UI/UX enthusiast.</em>
        </h2>
        <p className="mut" style={{ marginTop: 16, maxWidth: 780 }}>
          {about.summary}
        </p>
      </GlassCard>

      <div className="stats">
        <GlassCard className="stat">
          <b data-n="3.9" data-d="2">3.90</b>
          GPA (out of 4.00)
        </GlassCard>
        <GlassCard className="stat" delay={0.1}>
          <b data-n={projects.length}>{projects.length}</b>
          Projects
        </GlassCard>
        <GlassCard className="stat" delay={0.2}>
          <b data-n={certificates.length}>{certificates.length}</b>
          Certificates
        </GlassCard>
      </div>
    </section>
  );
}
