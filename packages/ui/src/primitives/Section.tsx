import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  as?: "section" | "div";
  className?: string;
};

export function Section({
  children,
  as: Component = "section",
  className,
}: SectionProps) {
  return (
    <Component className={`section-spacing ${className}`}>{children}</Component>
  );
}
