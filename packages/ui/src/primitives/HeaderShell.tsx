import type { ReactNode } from "react";

type HeaderShellProps = {
  children: ReactNode;
};

export function HeaderShell({ children }: HeaderShellProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      {children}
    </header>
  );
}
