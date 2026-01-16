import { fetchProjectBySlug } from "@/lib/project";
import Link from "next/link";

type Props = {
  readonly params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await fetchProjectBySlug(slug);

  if (!project) {
    return (
      <div className="section-spacing section-container">
        <p className="body-lg">Project not found.</p>
        <Link
          href="/projects"
          className="text-primary hover:underline mt-4 inline-block"
        >
          ← Back to projects
        </Link>
      </div>
    );
  }

  return (
    <article className="">
      <div className="section-container">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 mb-12"
        >
          ← <span>All projects</span>
        </Link>

        <header className="max-w-3xl mb-20">
          {/* <p className="label mb-6">
            {project.role} · {project.year}
          </p> */}
          <h1 className="heading-lg mb-8">{project.title}</h1>
          {/* <div className="flex items-center gap-6 mono text-sm text-muted-foreground">
            <span>{project.duration}</span>
            <span className="text-muted-foreground/30">·</span>
            <span>{project.team}</span>
          </div> */}
        </header>

        <div className="space-y-24 md:space-y-32">
          {/* Problem */}
          <section>
            <h2 className="heading-md mb-10 pb-6 border-b border-border">
              Problem
            </h2>
            <div className="space-y-6 max-w-3xl">
              <p className="body-md">{project.architecture.problem}</p>
            </div>
          </section>

          {/* Solution */}
          <section>
            <h2 className="heading-md mb-10 pb-6 border-b border-border">
              Solution
            </h2>
            <div className="space-y-6 max-w-3xl">
              <p className="body-md">{project.architecture.solution}</p>
            </div>
          </section>

          {/* Trade-offs */}
          <section>
            <h2 className="heading-md mb-10 pb-6 border-b border-border">
              Trade-offs
            </h2>
            <div className="space-y-6 max-w-3xl">
              <p className="body-md">{project.architecture.tradeoffs}</p>
            </div>
          </section>

          {/* Tech Stack */}
          <section>
            <h2 className="heading-md mb-10 pb-6 border-b border-border">
              Tech Stack
            </h2>
            <div className="grid gap-8 md:grid-cols-2 max-w-3xl">
              {project?.techStack?.map((category) => (
                <div key={category.technology}>
                  {/* <h3 className="label mb-4">{category.technology}</h3> */}
                  <div className="flex flex-wrap gap-2">
                    <span className="mono text-sm px-3 py-1.5 bg-accent/50 rounded text-foreground">
                      {category.technology}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* AI Usage */}
          {project?.aiUsage && (
            <section>
              <h2 className="heading-md mb-10 pb-6 border-b border-border">
                AI Usage
              </h2>
              <div className="space-y-6 max-w-3xl">
                <p className="body-md">{project.aiUsage}</p>
              </div>
            </section>
          )}

          {/* Production Notes */}
          {project?.productionNotes && (
            <section>
              <h2 className="heading-md mb-10 pb-6 border-b border-border">
                Production Notes
              </h2>
              <div className="space-y-6 max-w-3xl">
                {project?.productionNotes?.split("\n").map((n) => (
                  <p key={n} className="body-md">
                    {n}
                  </p>
                ))}
              </div>
            </section>
          )}
        </div>

        <footer className="mt-32 pt-12 border-t border-border flex justify-between items-center">
          <Link
            href="/projects"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            ← All projects
          </Link>
          <Link
            href="/contact"
            className="text-foreground hover:text-primary transition-colors duration-200"
          >
            Get in touch →
          </Link>
        </footer>
      </div>
    </article>
  );
}
