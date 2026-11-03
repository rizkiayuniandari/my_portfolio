import type { CSSProperties } from "react";
import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import { projects } from "@/app/data/portfolio";

export default function Projects() {
  return (
    <section id="projects">
      <SectionTitle eyebrow="Projects" title="Selected" accent="projects." />

      <div className="grid" style={{ marginTop: 24 }}>
        {projects.map((p, i) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="card rv"
            style={{ "--d": `${(i % 3) * 0.1}s` } as CSSProperties}
          >
            <div
              className="cover"
              style={{
                backgroundImage: `${p.image ? `url(${p.image}), ` : ""}linear-gradient(160deg,#F8D5C2,#D9B995)`,
              }}
            >
              <span className="badge">{p.tech.length} technologies</span>
            </div>
            <div className="meta">
              <span className="tag">{p.role}</span>
              <h3>{p.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
