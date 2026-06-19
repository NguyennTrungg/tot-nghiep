import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, luxuryTransition, viewportOnce } from "../utils/motion";

type SectionTitleProps = {
  children: string;
  eyebrow?: string;
};

export function SectionTitle({ children, eyebrow }: SectionTitleProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      transition={luxuryTransition}
      className="mx-auto mb-7 max-w-2xl text-center"
    >
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-teal-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="premium-heading text-3xl font-semibold tracking-wide text-teal-900 sm:text-4xl">
        {children}
      </h2>
      <div className="elegant-divider mx-auto mt-3 h-px w-24" />
    </motion.div>
  );
}
