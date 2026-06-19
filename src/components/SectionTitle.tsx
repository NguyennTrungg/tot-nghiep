import { motion } from "framer-motion";

type SectionTitleProps = {
  children: string;
  eyebrow?: string;
};

export function SectionTitle({ children, eyebrow }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="mx-auto mb-9 max-w-2xl text-center"
    >
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-teal-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold text-teal-900 sm:text-4xl">{children}</h2>
      <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-champagne to-transparent" />
    </motion.div>
  );
}
