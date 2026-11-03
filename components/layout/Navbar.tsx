import Link from "next/link";
import { personal } from "@/app/data/portfolio";

const links = [
  ["Home", "/#home"],
  ["About", "/#about"],
  ["Skills", "/#skills"],
  ["Work", "/#work"],
  ["Education", "/#education"],
  ["Projects", "/#projects"],
  ["Certificates", "/#certificates"],
];

export default function Navbar() {
  return (
    <header className="glass rv">
      <Link href="/" className="brand">
        {personal.shortName}
      </Link>

      <nav aria-label="Main">
        {links.map(([label, href]) => (
          <Link key={label} href={href}>
            {label}
          </Link>
        ))}
      </nav>

      <Link className="btn" href="/#contact">
        Contact
      </Link>
    </header>
  );
}
