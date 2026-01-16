import "server-only";
import { safeFetchJSON } from "@/lib/fetcher";

type PayloadResponse<T> = {
  docs: T[];
};

export async function fetchProjects() {
  const defaultResp: PayloadResponse<{
    id: string;
    title: string;
    slug: string;
    summary: string;
  }> = { docs: [] };

  const data = await safeFetchJSON<
    PayloadResponse<{
      id: string;
      title: string;
      slug: string;
      summary: string;
    }>
  >("/api/projects", { next: { revalidate: 30 } }, defaultResp);

  return data?.docs ?? [];
}

export type Project = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  architecture: {
    problem: string;
    solution: string;
    tradeoffs?: string;
  };
  techStack?: { technology: string }[];
  aiUsage?: string;
  productionNotes?: string;
};

export async function fetchProjectBySlug(slug: string) {
  const endpoint = `/api/projects?where[slug][equals]=${slug}`;

  const defaultResp = { docs: [] as Project[] };

  const data = await safeFetchJSON<{ docs: Project[] }>(
    endpoint,
    { cache: "no-store" },
    defaultResp
  );

  return data?.docs?.[0] ?? null;
}
