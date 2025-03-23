import { Project, ProjectType } from "@core";
import { httpGet } from "./api";

export async function getProjects() {
  const projects: Project[] = await httpGet("/projects");

  return {
    all: projects,
    get mobile() {
      return projects.filter((p) => p.type === ProjectType.MOBILE);
    },
    get web() {
      return projects.filter((p) => p.type === ProjectType.WEB);
    },
    get games() {
      return projects.filter((p) => p.type === ProjectType.GAME);
    },
    get highlights() {
      return projects.filter((p) => p.highlight);
    }
  };
}

export async function getProject(id: string): Promise<Project | null> {
  return await httpGet(`/projects/${id}`);
}
