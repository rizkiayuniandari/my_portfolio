import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { projects } from "@/app/data/portfolio";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main style={{ textAlign: "center", padding: "120px 0" }}>
        <h1 style={{ fontSize: 40 }}>Project not found</h1>
        <p style={{ marginTop: 24 }}>
          <Link className="btn" href="/#projects">
            Back to projects
          </Link>
        </p>
      </main>
    );
  }

  return (
    <main style={{ paddingTop: 40 }}>
      <Link className="btn o" href="/#projects">
        ← Back to projects
      </Link>

      <article className="panel glass" style={{ padding: 0, overflow: "hidden" }}>
        <div
          className="dcover"
          style={{
            backgroundImage: `${project.image ? `url(${project.image}), ` : ""}linear-gradient(160deg,#F8D5C2,#D9B995)`,
          }}
        />

        <div className="dbody">
          <p className="k">{project.category}</p>
          <h1 className="dtitle">{project.title}</h1>
          <p className="mut" style={{ maxWidth: 760 }}>
            {project.description}
          </p>

          <h3>My role</h3>
          <p className="mut">{project.role}</p>

          <h3>What I did</h3>
          <ul className="dots">
            {project.responsibilities.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>

          {project.collaboration.length > 0 && (
            <>
              <h3>Collaboration</h3>
              <div className="pills">
                {project.collaboration.map((c) => (
                  <Badge key={c}>{c}</Badge>
                ))}
              </div>
            </>
          )}

          <h3>Technologies</h3>
          <div className="pills">
            {project.tech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          {project.note && (
            <p className="note">
              <b>{project.note}</b>
            </p>
          )}

          {project.link && (
            <a className="btn" href={project.link.url} target="_blank" rel="noopener noreferrer">
              {project.link.label}
            </a>
          )}
        </div>
      </article>
    </main>
  );
}
