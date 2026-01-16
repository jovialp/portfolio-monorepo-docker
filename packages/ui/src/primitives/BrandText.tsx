import type { ReactNode } from "react";

type BrandTextProps = {
  children: ReactNode;
};

export function BrandText({ children }: BrandTextProps) {
  return (
    <span className="mono text-foreground hover:text-primary transition-colors duration-200">
      {children}
    </span>
  );
}
