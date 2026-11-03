import { personal } from "@/app/data/portfolio";

export default function Contact() {
  return (
    <div className="cta glass rv" id="contact">
      <p className="k">Contact</p>
      <h2>
        Let&apos;s work <em>together.</em>
      </h2>
      <p className="mut" style={{ margin: "10px 0 24px" }}>
        {personal.location}
      </p>

      <a className="btn" href={`mailto:${personal.email}`}>
        Email
      </a>{" "}
      <a className="btn o" href={personal.linkedin} target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>{" "}
      <a className="btn o" href={personal.instagram} target="_blank" rel="noopener noreferrer">
        Instagram
      </a>{" "}
      <a className="btn o" href={personal.whatsapp} target="_blank" rel="noopener noreferrer">
        WhatsApp
      </a>
    </div>
  );
}
