import type { ReactNode, CSSProperties } from "react";
import clsx from "clsx";

type TextVariant = "body" | "muted" | "heading" | "subheading";

export type TextProps = {
  children: ReactNode;
  variant?: TextVariant;
  as?: "p" | "span" | "h1" | "h2" | "h3";
  className?: string;
  style?: CSSProperties;
};

export function Text({
  children,
  variant = "body",
  as: Component = "p",
  className,
  style,
}: TextProps) {
  const baseStyles: Record<TextVariant, string> = {
    body: "text-textPrimary",
    muted: "text-textSecondary text-muted-foreground",
    heading: "text-2xl font-semibold",
    subheading: "text-xl font-medium",
  };

  return (
    <Component className={clsx(baseStyles[variant], className)} style={style}>
      {children}
    </Component>
  );
}
