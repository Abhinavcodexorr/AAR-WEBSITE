"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

type MotionWrapperProps = {
  children: ReactNode;
  className?: string;
};

type FadeInProps = MotionWrapperProps & {
  delay?: number;
  y?: number;
  once?: boolean;
};

export function FadeIn({
  children,
  delay = 0,
  y = 20,
  once = false,
  className,
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  if (once) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay, duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

type StaggerContainerProps = MotionWrapperProps & {
  delay?: number;
  /** Use mount animation instead of scroll — required when nested inside SectionFade/FadeIn */
  animateOnMount?: boolean;
};

export function StaggerContainer({
  children,
  delay = 0,
  className,
  animateOnMount = false,
}: StaggerContainerProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      {...(animateOnMount
        ? { animate: "visible" }
        : {
            whileInView: "visible",
            viewport: { once: true, amount: 0.2 },
          })}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: MotionWrapperProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={fadeInUp}>
      {children}
    </motion.div>
  );
}

type SectionFadeProps = MotionWrapperProps & {
  delay?: number;
};

export function SectionFade({ children, delay = 0, className }: SectionFadeProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function HeroZoom({ children, className }: MotionWrapperProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function HeroTitle({ children, className }: MotionWrapperProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
