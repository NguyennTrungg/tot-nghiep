import type { PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren<{
  className?: string;
  id?: string;
  as?: "div" | "section";
}>;

export function Container({
  children,
  className = "",
  id,
  as: Component = "section",
}: ContainerProps) {
  return (
    <Component id={id} className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </Component>
  );
}
