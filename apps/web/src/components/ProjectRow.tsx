import type { ReactNode, JSX } from "react";
import { Text } from "@portfolio/ui/primitives/Text";

export type ProjectRowData = {
  id: string;
  title: string;
  summary: string;

  techStack?: { technology: string }[];
  index: number;
};

type ProjectRowProps = {
  project: ProjectRowData;
  href: string;
  LinkComponent?: (props: {
    href: string;
    children: ReactNode;
    className?: string;
  }) => JSX.Element;
};

export function ProjectRow({ project, href, LinkComponent }: ProjectRowProps) {
  const { title, summary, techStack, index } = project;

  const Wrapper = LinkComponent ?? DefaultAnchor;

  return (
    <Wrapper
      href={href}
      className="group block py-8 border-t border-border first:border-t-0 card-hover -mx-6 px-6"
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        {/* Main content */}
        <div className="flex-1 max-w-2xl">
          <div className="flex items-center gap-4 mb-3">
            <span className="mono text-muted-foreground text-xs">
              {String(index + 1).padStart(2, "0")}
            </span>

            <Text
              as="h3"
              variant="subheading"
              className="heading-md text-2xl group-hover:text-primary transition-colors duration-200 font-medium"
            >
              {title}
            </Text>
          </div>

          <Text className="body-sm ml-10">{summary}</Text>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-6 ml-10 md:ml-0">
          <div className="flex items-center gap-2">
            {techStack?.map(({ technology }) => (
              <span
                key={technology}
                className="mono text-xs text-muted-foreground"
              >
                {technology}
              </span>
            ))}
          </div>
          →
        </div>
      </div>
    </Wrapper>
  );
}

/* ---------------------------------- */
/* Default fallback (plain React)      */
/* ---------------------------------- */

function DefaultAnchor({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
