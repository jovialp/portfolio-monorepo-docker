import "server-only";

const API_URL = process.env.PAYLOAD_API_URL;

if (!API_URL) {
  throw new Error("PAYLOAD_API_URL is not defined");
}

type PayloadResponse<T> = {
  docs: T[];
};

export async function fetchProjects() {
  const res = await fetch(`${API_URL}/api/projects`, {
    cache: "no-store", // CMS-driven, always fresh for now
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects from Payload");
  }

  const data = (await res.json()) as PayloadResponse<{
    id: string;
    title: string;
    slug: string;
    summary: string;
  }>;

  return data.docs;
}
