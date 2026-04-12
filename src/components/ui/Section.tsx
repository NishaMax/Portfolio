import React from "react";

export function Section({
  id,
  title,
  eyebrow,
  children,
}: {
  id?: string;
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <div className="mb-10">
        {eyebrow ? (
          <p className="mb-3 text-sm font-medium tracking-widest text-cyan-300/90">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
