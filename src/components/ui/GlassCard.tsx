import React from "react";

export function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_10px_35px_rgba(0,0,0,0.45)] " +
        (className ?? "")
      }
    >
      {children}
    </div>
  );
}
