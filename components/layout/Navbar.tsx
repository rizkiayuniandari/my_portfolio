"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { personal } from "@/app/data/portfolio";

const links = [
  ["Home", "/#home"],
  ["About", "/#about"],
  ["Work", "/#work"],
  ["Education", "/#education"],
  ["Projects", "/#projects"],
  ["Certificates", "/#certificates"],
  ["Skills", "/#skills"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Tutup menu dengan tombol Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    // data-open dipakai (bukan className) agar class animasi "in" dari ScrollReveal tidak tertimpa
    <header className="glass rv" data-open={open}>
      <Link href="/" className="brand" onClick={close}>
        {personal.shortName}
      </Link>

      <button
        type="button"
        className="menu-btn"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="main-nav"
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav id="main-nav" aria-label="Main">
        {links.map(([label, href]) => (
          <Link key={label} href={href} onClick={close}>
            {label}
          </Link>
        ))}
      </nav>

      <Link className="btn" href="/#contact" onClick={close}>
        Contact
      </Link>
    </header>
  );
}