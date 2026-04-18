"use client";

import { motion } from "framer-motion";

type Props = {
  badge?: string;
  title: string;
  desc?: string;
  center?: boolean;
};

export function SectionTitle({ badge, title, desc, center = false }: Props) {
  return (
    <div className={center ? "text-center" : ""}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 inline-flex rounded-full border border-amber-300/40 bg-amber-100/70 px-3 py-1 text-sm font-semibold text-amber-800"
        >
          {badge}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl"
      >
        {title}
      </motion.h2>

      {desc && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-3 max-w-2xl text-base leading-7 text-slate-600"
        >
          {desc}
        </motion.p>
      )}
    </div>
  );
}