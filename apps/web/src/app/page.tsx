import { fetchProjects } from "@/lib/payload";

export default async function HomePage() {
  const projects = await fetchProjects();

  return (
    <>
      <h1>Senior Software Engineer — Architecture & AI-forward</h1>

      <section>
        <h2>Projects</h2>

        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <strong>{project.title}</strong>
              <p>{project.summary}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
