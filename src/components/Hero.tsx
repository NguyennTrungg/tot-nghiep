import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import type { Invitation } from "../config/invitation";
import { Container } from "./Container";

type HeroProps = {
  invitation: Invitation;
};

export function Hero({ invitation }: HeroProps) {
  const heroImage = invitation.photos[0];

  return (
    <Container
      as="section"
      className="grid min-h-screen items-center gap-10 pb-16 pt-8 sm:pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16"
    >
      <motion.figure
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative mx-auto w-full max-w-[420px] lg:max-w-none"
      >
        <div className="absolute -inset-4 rounded-[34px] border border-teal-50/90" />
        <img
          src={heroImage}
          alt={`Chân dung ${invitation.graduateName}`}
          width="900"
          height="1200"
          className="relative aspect-[4/5] w-full rounded-[30px] object-cover shadow-soft"
          fetchPriority="high"
        />
      </motion.figure>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
        className="mx-auto max-w-xl text-center lg:text-left"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-teal-700">
          {invitation.eyebrow}
        </p>
        <h1 className="mt-4 text-5xl font-semibold leading-[0.96] text-teal-900 sm:text-7xl">
          {invitation.title}
        </h1>
        <p className="mt-5 font-script text-5xl text-teal-500 sm:text-6xl">
          {invitation.graduateName}
        </p>
        <p className="mx-auto mt-7 max-w-lg text-xl leading-8 text-ink/80 lg:mx-0">
          {invitation.invitationMessage}
        </p>
        <a
          href="#event"
          className="mt-9 inline-flex min-h-12 items-center gap-3 rounded-full bg-teal-700 px-6 text-base font-semibold text-pearl shadow-card transition hover:bg-teal-900 focus:outline-none focus:ring-4 focus:ring-teal-100"
        >
          <span>{invitation.ctaLabel}</span>
          <ArrowDown aria-hidden="true" className="h-4 w-4" />
        </a>
      </motion.div>
    </Container>
  );
}
