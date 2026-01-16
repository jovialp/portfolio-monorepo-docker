import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  as?: "div" | "main" | "section";
};

export function Container({ children, as: Component = "div" }: ContainerProps) {
  return (
    <Component className="section-container relative">{children}</Component>
  );
}
