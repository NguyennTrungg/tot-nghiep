import { ArrowDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Invitation } from "../config/invitation";
import { Container } from "./Container";
import { FloralOrnament } from "./FloralOrnament";
import { fadeUp, luxuryTransition } from "../utils/motion";

type HeroProps = {
  invitation: Invitation;
};

export function Hero({ invitation }: HeroProps) {
  const heroImage = invitation.photos[0];
  const reduceMotion = useReducedMotion();

  return (
    <Container
      as="section"
      className="relative grid min-h-[86vh] items-center gap-8 pb-8 pt-6 sm:min-h-[88vh] sm:pb-12 lg:grid-cols-[0.96fr_1.04fr] lg:gap-12"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pointer-events-none absolute left-0 top-6 hidden h-24 w-24 rounded-tl-[42px] border-l border-t border-teal-500/20 sm:block"
      />
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="pointer-events-none absolute bottom-12 right-0 hidden h-24 w-24 rounded-br-[42px] border-b border-r border-teal-500/20 sm:block"
      />
      <FloralOrnament className="ornament-float pointer-events-none absolute -right-20 top-12 h-48 w-48 text-teal-700/10 sm:h-64 sm:w-64" />
      <FloralOrnament className="ornament-float pointer-events-none absolute -bottom-8 -left-20 h-48 w-48 -scale-x-100 rotate-12 text-teal-700/10 sm:h-60 sm:w-60" />

      <motion.figure
        initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={reduceMotion ? undefined : { scale: 1.02 }}
        transition={luxuryTransition}
        className="relative mx-auto w-full max-w-[420px] transition duration-500 ease-out lg:max-w-none"
      >
        <div className="absolute -inset-5 rounded-[38px] border border-teal-50/90 bg-pearl/30" />
        <div className="absolute -inset-2 rounded-[34px] border border-champagne/35" />
        <img
          src={heroImage}
          alt={`Chân dung ${invitation.graduateName}`}
          width="900"
          height="1200"
          className="soft-frame relative aspect-[4/5] w-full rounded-[30px] object-cover transition duration-500 ease-out"
          fetchPriority="high"
        />
      </motion.figure>

      <motion.div
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
        variants={fadeUp}
        transition={{ ...luxuryTransition, delay: 0.15 }}
        className="relative mx-auto max-w-xl text-center lg:text-left"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.42em] text-teal-700">
          {invitation.eyebrow}
        </p>
        <h1 className="premium-heading mt-3 text-5xl font-semibold leading-[0.96] tracking-wide text-teal-900 sm:text-7xl">
          {invitation.title}
        </h1>
        <p className="premium-heading mt-4 font-script text-5xl text-teal-500 sm:text-6xl">
          {invitation.graduateName}
        </p>
        <div className="elegant-divider mx-auto mt-5 h-px w-36 lg:mx-0" />
        <p className="mx-auto mt-5 max-w-lg text-xl leading-8 text-ink/80 lg:mx-0">
          {invitation.invitationMessage}
        </p>
        <motion.a
          href="#event"
          whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02 }}
          whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-full bg-teal-700 px-6 text-base font-semibold text-pearl shadow-card transition-all duration-300 ease-out hover:bg-teal-900 hover:shadow-soft focus:outline-none focus:ring-4 focus:ring-teal-100"
        >
          <span>{invitation.ctaLabel}</span>
          <ArrowDown aria-hidden="true" className="h-4 w-4" />
        </motion.a>
      </motion.div>
    </Container>
  );
}
