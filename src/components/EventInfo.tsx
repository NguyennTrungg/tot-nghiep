import { CalendarDays, Clock, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Invitation } from "../config/invitation";
import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";
import { fadeUp, luxuryTransition, viewportOnce } from "../utils/motion";

type EventInfoProps = {
  invitation: Invitation;
};

export function EventInfo({ invitation }: EventInfoProps) {
  const reduceMotion = useReducedMotion();
  const cards = [
    {
      icon: CalendarDays,
      title: invitation.eventCards.date,
      value: invitation.date,
    },
    {
      icon: Clock,
      title: invitation.eventCards.time,
      value: invitation.time,
    },
    {
      icon: MapPin,
      title: invitation.eventCards.location,
      value: invitation.university,
    },
  ];

  return (
    <Container id="event" className="py-10 sm:py-14">
      <SectionTitle>{invitation.sections.event}</SectionTitle>
      <motion.div
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={viewportOnce}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.18 } },
        }}
        className="grid gap-4 sm:grid-cols-3"
      >
        {cards.map(({ icon: Icon, title, value }) => (
          <motion.article
            key={title}
            variants={fadeUp}
            whileHover={reduceMotion ? undefined : { y: -6, scale: 1.02 }}
            transition={luxuryTransition}
            className="glass-panel rounded-xl border border-teal-50 p-6 text-center shadow-card transition-shadow duration-500 ease-out hover:shadow-soft"
          >
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 text-teal-700">
              <Icon aria-hidden="true" className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
              {title}
            </h3>
            <p className="mt-3 text-xl font-semibold leading-7 text-teal-900">{value}</p>
          </motion.article>
        ))}
      </motion.div>
    </Container>
  );
}
