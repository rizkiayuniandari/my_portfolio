import type { CSSProperties } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { certificates } from "@/app/data/portfolio";

export default function Certifications() {
  return (
    <section id="certificates">
      <SectionTitle eyebrow="Certificates" title="Training &" accent="certificates." />

      <div className="certs">
        {certificates.map((c, i) => {
          const style = { "--d": `${(i % 2) * 0.1}s` } as CSSProperties;
          const inner = (
            <>
              <h3>{c.title}</h3>
              <p className="mut">{c.org}</p>
              <span className="when">{c.date}</span>
            </>
          );

          return c.link ? (
            <a key={c.title} className="cert glass rv" style={style} href={c.link} target="_blank" rel="noopener noreferrer">
              {inner}
            </a>
          ) : (
            <div key={c.title} className="cert glass rv" style={style}>
              {inner}
            </div>
          );
        })}
      </div>
    </section>
  );
}
