import { ExternalLink, MapPinned } from "lucide-react";
import { motion } from "framer-motion";
import type { Invitation } from "../config/invitation";
import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";

type LocationProps = {
  invitation: Invitation;
};

export function Location({ invitation }: LocationProps) {
  return (
    <Container className="py-16 sm:py-20">
      <SectionTitle>{invitation.sections.location}</SectionTitle>
      <motion.section
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto grid max-w-4xl gap-6 rounded-lg border border-teal-50 bg-pearl/90 p-6 shadow-card sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-8"
        aria-labelledby="location-heading"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 text-teal-700">
          <MapPinned aria-hidden="true" className="h-6 w-6" />
        </div>
        <div>
          <h3 id="location-heading" className="text-2xl font-semibold text-teal-900">
            {invitation.university}
          </h3>
          <p className="mt-2 text-lg leading-7 text-ink/75">{invitation.address}</p>
        </div>
        <a
          href={invitation.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-teal-700 px-5 text-base font-semibold text-teal-900 transition hover:bg-teal-50 focus:outline-none focus:ring-4 focus:ring-teal-100"
        >
          <span>{invitation.mapsLabel}</span>
          <ExternalLink aria-hidden="true" className="h-4 w-4" />
        </a>
      </motion.section>
    </Container>
  );
}
