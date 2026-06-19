import { motion } from "framer-motion";
import { Container } from "./Container";

type MessageProps = {
  message: string;
};

export function Message({ message }: MessageProps) {
  return (
    <Container className="py-16 sm:py-20">
      <motion.section
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-3xl text-center"
        aria-label="Lời nhắn"
      >
        <div className="mx-auto mb-8 h-px w-28 bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
        <blockquote className="text-3xl font-medium leading-tight text-teal-900 sm:text-5xl">
          “{message}”
        </blockquote>
        <div className="mx-auto mt-8 h-px w-28 bg-gradient-to-r from-transparent via-champagne to-transparent" />
      </motion.section>
    </Container>
  );
}
