"use client";

import React from "react";

function useTypewriter(
  items: string[],
  options?: { typeMs?: number; deleteMs?: number; pauseMs?: number }
) {
  const typeMs = options?.typeMs ?? 42;
  const deleteMs = options?.deleteMs ?? 26;
  const pauseMs = options?.pauseMs ?? 900;

  const [itemIndex, setItemIndex] = React.useState(0);
  const [text, setText] = React.useState("");
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    if (items.length === 0) return;

    const full = items[itemIndex] ?? "";

    // Finished typing: pause, then start deleting
    if (!deleting && text === full) {
      const t = window.setTimeout(() => setDeleting(true), pauseMs);
      return () => window.clearTimeout(t);
    }

    // Finished deleting: advance to next word
    if (deleting && text.length === 0) {
      setDeleting(false);
      setItemIndex((i) => (i + 1) % items.length);
      return;
    }

    const step = () => {
      if (!deleting) {
        setText(full.slice(0, text.length + 1));
      } else {
        setText(full.slice(0, Math.max(0, text.length - 1)));
      }
    };

    const t = window.setTimeout(step, deleting ? deleteMs : typeMs);
    return () => window.clearTimeout(t);
  }, [items, itemIndex, text, deleting, typeMs, deleteMs, pauseMs]);

  return text;
}

export function RotatingText({
  items,
  className,
  typeMs,
  deleteMs,
  pauseMs,
}: {
  items: string[];
  className?: string;
  typeMs?: number;
  deleteMs?: number;
  pauseMs?: number;
}) {
  const text = useTypewriter(items, { typeMs, deleteMs, pauseMs });

  const longest = React.useMemo(() => {
    return items.reduce((a, b) => (b.length > a.length ? b : a), "");
  }, [items]);

  return (
    <span className={className}>
      {/* Reserve space using an invisible longest string to avoid layout shift */}
      <span className="relative inline-block align-baseline whitespace-nowrap">
        <span className="invisible select-none" aria-hidden="true">
          {longest}
        </span>
        <span className="absolute inset-0 inline-flex items-baseline">
          <span className="inline-block">{text}</span>
          <span
            aria-hidden="true"
            className="ml-1 inline-block h-[1em] w-[2px] translate-y-[0.12em] bg-cyan-200/90 animate-pulse"
          />
        </span>
      </span>
    </span>
  );
}
