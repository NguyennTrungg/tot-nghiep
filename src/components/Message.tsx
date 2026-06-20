import { motion, useReducedMotion } from "framer-motion";
import { Container } from "./Container";
import { FloralOrnament } from "./FloralOrnament";
import { fadeUp, luxuryTransition, viewportOnce } from "../utils/motion";

type MessageProps = {
  message: string;
};

export function Message({ message }: MessageProps) {
  const reduceMotion = useReducedMotion();

  return (
    <Container className="relative py-6 sm:py-10">
      <FloralOrnament className="ornament-float pointer-events-none absolute h-72 w-72 -translate-x-1/2 -translate-y-1/2 text-teal-700/5" />
      <motion.section
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        transition={luxuryTransition}
        className="glass-panel relative mx-auto max-w-5xl rounded-2xl border border-teal-50 px-6 py-9 text-center shadow-card sm:px-12 sm:py-10"
        aria-label="Lời nhắn"
      >
        <div className="elegant-divider mx-auto mb-6 h-px w-28" />
        <blockquote className="premium-heading text-3xl font-medium leading-tight text-teal-900 sm:text-5xl">
          “{message}”
        </blockquote>
        <div className="elegant-divider mx-auto mt-6 h-px w-28" />
      </motion.section>
    </Container>
  );
}
