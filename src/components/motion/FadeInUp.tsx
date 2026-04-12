"use client";

import { motion, type MotionProps } from "framer-motion";
import React from "react";

type FadeInUpProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
} & Omit<MotionProps, "children">;

export function FadeInUp({
  children,
  className,
  delay = 0,
  ...rest
}: FadeInUpProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
