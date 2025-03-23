import CV from "@/components/cv";
import MainComponent from "@/components/landing/MainComponent";
import ProjectsCarousel from "@/components/projects/ProjectsCarousel";
import Container from "@/components/shared/Container";
import { getProjects } from "@/functions/projects";
import { getTechs } from "@/functions/techs";

export default async function Home() {
  const techList = await getTechs();
  const projectList = await getProjects();
  return (
    <div>
      <MainComponent techList={techList.highlights} />
      <Container className="py-16 flex flex-col gap-7">
        <ProjectsCarousel title="Projects" projectList={projectList.all} />
        <CV techs={techList.all} />
      </Container>
    </div>
  );
}
