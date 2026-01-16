import Link from "next/link";
import { fetchProjects } from "@/lib/project";
import { fetchHomePage } from "@/lib/home-page";
import { Hero } from "@/components/Hero";
import { ProjectPreview } from "@/components/ProjectPreview";

export default async function HomePage() {
  const projects = await fetchProjects();
  const homePageData = await fetchHomePage();

  return (
    <>
      <Hero data={homePageData.hero} />

      <ProjectPreview projects={projects} />
    </>
  );
}
