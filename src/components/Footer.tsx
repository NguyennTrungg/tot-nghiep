import { GraduationCap } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "./Container";
import { fadeUp, luxuryTransition, viewportOnce } from "../utils/motion";

type FooterProps = {
  message: string;
};

export function Footer({ message }: FooterProps) {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="border-t border-teal-50 bg-pearl/60 py-7">
      <Container as="div" className="flex flex-col items-center text-center">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={luxuryTransition}
          className="flex flex-col items-center"
        >
        <GraduationCap aria-hidden="true" className="mb-3 h-6 w-6 text-teal-700" />
        <p className="max-w-xl text-lg leading-7 text-ink/75">{message}</p>
        </motion.div>
      </Container>
    </footer>
  );
}
