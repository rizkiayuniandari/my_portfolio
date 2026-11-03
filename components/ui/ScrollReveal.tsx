"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function count(el: HTMLElement) {
  const to = parseFloat(el.dataset.n || "0");
  const decimals = parseInt(el.dataset.d || "0", 10);
  let start = 0;

  const tick = (t: number) => {
    if (!start) start = t;
    const k = Math.min(1, (t - start) / 1400);
    el.textContent = (to * (1 - Math.pow(1 - k, 3))).toFixed(decimals);
    if (k < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.classList.add("in");
          el.querySelectorAll<HTMLElement>("[data-n]").forEach(count);
          observer.unobserve(el);
        }),
      { threshold: 0.15 }
    );

    document.querySelectorAll(".rv:not(.in)").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
