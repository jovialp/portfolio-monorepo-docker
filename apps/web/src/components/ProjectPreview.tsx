import Link from "next/link";
import { Container } from "@portfolio/ui/primitives/Container";
import { Section } from "@portfolio/ui/primitives/Section";
import { Text } from "@portfolio/ui/primitives/Text";
import { ProjectRow } from "./ProjectRow";

export interface ProjectPreviewItem {
  id: string;
  title: string;
  summary: string;
  techStack?: { technology: string }[];
  slug: string;
}

type ProjectPreviewProps = {
  readonly projects: ProjectPreviewItem[];
};

export function ProjectPreview({ projects }: ProjectPreviewProps) {
  return (
    <Section as="section" className="border-t border-border">
      <Container>
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <Text variant="muted" className="label mb-3 text-sm uppercase">
              Selected Work
            </Text>
            <Text className="heading-md text-3xl font-medium">
              Recent projects
            </Text>
          </div>

          <Link
            href="/projects"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 hidden md:block"
          >
            View all projects →
          </Link>
        </div>

        {/* Project list */}
        <div className="space-y-1">
          {projects.map((project, index) => (
            <ProjectRow
              key={project.id}
              project={{ ...project, index }}
              href={`/projects/${project.slug}`}
              LinkComponent={({ href, children, className }) => (
                <Link href={href} className={className}>
                  {children}
                </Link>
              )}
            />
          ))}
        </div>

        {/* Mobile CTA */}
        <Link
          href="/projects"
          className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 mt-8 md:hidden"
        >
          View all projects →
        </Link>
      </Container>
    </Section>
  );
}
