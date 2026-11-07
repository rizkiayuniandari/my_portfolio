import type { CSSProperties, ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function GlassCard({ children, className = "", delay = 0 }: GlassCardProps) {
  return (
    <div
      className={`glass rv ${className}`}
      style={{ "--d": `${delay}s` } as CSSProperties}
      suppressHydrationWarning
    >
      {children}
    </div>
  );
}