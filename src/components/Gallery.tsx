import { motion, useReducedMotion } from "framer-motion";
import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";
import { fadeUp, luxuryTransition, viewportOnce } from "../utils/motion";

type GalleryProps = {
  title: string;
  photos: string[];
  graduateName: string;
};

export function Gallery({ title, photos, graduateName }: GalleryProps) {
  const reduceMotion = useReducedMotion();

  return (
    <Container className="relative py-10 sm:py-14">
      <div className="pointer-events-none absolute inset-x-5 top-10 h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />
      <SectionTitle>{title}</SectionTitle>
      <motion.div
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={viewportOnce}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.18 } },
        }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {photos.map((photo, index) => (
          <motion.figure
            key={photo}
            variants={fadeUp}
            whileHover={reduceMotion ? undefined : { y: -6, scale: 1.02 }}
            transition={luxuryTransition}
            className="group overflow-hidden rounded-xl border border-pearl/80 bg-pearl/70 p-2 shadow-card transition-shadow duration-500 ease-out hover:shadow-soft"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={photo}
                alt={`${graduateName} - khoảnh khắc ${index + 1}`}
                width="720"
                height="900"
                loading="lazy"
                className="aspect-[4/5] h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </motion.figure>
        ))}
      </motion.div>
    </Container>
  );
}
