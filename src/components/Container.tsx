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
    <Component id={id} className={`mx-auto w-full max-w-5xl px-5 sm:px-7 ${className}`}>
      {children}
    </Component>
  );
}
