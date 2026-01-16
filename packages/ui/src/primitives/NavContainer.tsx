import type { ReactNode } from "react";

type NavContainerProps = {
  children: ReactNode;
};

export function NavContainer({ children }: NavContainerProps) {
  return (
    <nav className="section-container" aria-label="Main navigation">
      {children}
    </nav>
  );
}
