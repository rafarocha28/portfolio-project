import { Project } from "@core";
import ProjectItem from "./ProjectItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "../ui/carousel";

export interface ProjectCarouselProps {
  title: string;
  projectList: Project[];
}

export default function ProjectsCarousel(props: ProjectCarouselProps) {
  return (
    <div className="flex flex-col items-center sm:items-start w-7/10 md:w-11/12 xl:w-full gap-5">
      <h3 className="text-2xl font-bold text-white/70">{props.title}</h3>
      <Carousel
        opts={{
          align: "center",
          loop: true
        }}
        className="w-full"
      >
        <CarouselContent className="flex">
          {props.projectList.map((p) => (
            <CarouselItem
              key={p.id}
              className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <ProjectItem project={p} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
