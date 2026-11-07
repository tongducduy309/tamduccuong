"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 7 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.24,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
