"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  onClick?: () => void;
  delay?: number;
}

export function CategoryCard({
  icon: Icon,
  title,
  subtitle,
  onClick,
  delay = 0,
}: CategoryCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-xl"
    >
      {/* Shine effect */}
      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
        <span className="absolute left-[-120%] top-0 h-full w-[70%] -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent transition-all duration-700 group-hover:left-[140%]" />
      </span>

      {/* Background glow */}
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-amber-200/20 blur-2xl transition-all duration-500 group-hover:bg-amber-300/30" />

      <div className="relative z-10">
        {/* Top */}
        <div className="flex min-h-[72px] items-start gap-4">
          <motion.div
            whileHover={{ rotate: 4, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 260, damping: 16 }}
            className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700"
          >
            <span className="absolute inset-0 rounded-xl bg-amber-300/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
            <Icon className="relative z-10 h-6 w-6" />
          </motion.div>

          <div className="flex-1">
            <motion.h3
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: delay + 0.1 }}
              className="text-base font-semibold leading-6 text-slate-900"
            >
              {title}
            </motion.h3>
          </div>
        </div>

        {/* Middle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: delay + 0.18 }}
          className="mt-3 text-sm leading-6 text-slate-600"
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: delay + 0.24 }}
        className="relative z-10 mt-5 flex items-center justify-between"
      >
        <div className="h-1 w-10 rounded-full bg-amber-400 transition-all duration-300 group-hover:w-20" />

        
      </motion.div>
    </motion.button>
  );
}