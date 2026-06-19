import { motion } from "framer-motion";
import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";

type GalleryProps = {
  title: string;
  photos: string[];
  graduateName: string;
};

export function Gallery({ title, photos, graduateName }: GalleryProps) {
  return (
    <Container className="py-16 sm:py-20">
      <SectionTitle>{title}</SectionTitle>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
        }}
        className="columns-1 gap-4 sm:columns-2 lg:columns-4"
      >
        {photos.map((photo, index) => (
          <motion.figure
            key={photo}
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.42, ease: "easeOut" }}
            className="mb-4 break-inside-avoid"
          >
            <img
              src={photo}
              alt={`${graduateName} - khoảnh khắc ${index + 1}`}
              width="720"
              height={index % 2 === 0 ? "980" : "820"}
              loading="lazy"
              className="w-full rounded-lg object-cover shadow-card"
            />
          </motion.figure>
        ))}
      </motion.div>
    </Container>
  );
}
