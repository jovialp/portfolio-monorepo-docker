import { fetchArchitectureSections } from "@/lib/architecture";

export const metadata = {
  title: "Architecture & System Design",
  description:
    "How I think about systems: SSR-first, accessibility-first, AI as infrastructure, production discipline.",
};

export default async function ArchitecturePage() {
  const sections = await fetchArchitectureSections();

  return (
    <article>
      <header>
        <h1>Architecture & System Design</h1>
        <p>
          This page explains how I design, reason about, and ship production
          systems. No buzzwords. No hype.
        </p>
      </header>

      {sections.map((section) => (
        <section key={section.id}>
          <h2>{section.title}</h2>
          <p>{section.content}</p>
        </section>
      ))}
    </article>
  );
}
