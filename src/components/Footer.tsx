import { GraduationCap } from "lucide-react";
import { Container } from "./Container";

type FooterProps = {
  message: string;
};

export function Footer({ message }: FooterProps) {
  return (
    <footer className="border-t border-teal-50 bg-pearl/60 py-10">
      <Container as="div" className="flex flex-col items-center text-center">
        <GraduationCap aria-hidden="true" className="mb-3 h-6 w-6 text-teal-700" />
        <p className="max-w-xl text-lg leading-7 text-ink/75">{message}</p>
      </Container>
    </footer>
  );
}
