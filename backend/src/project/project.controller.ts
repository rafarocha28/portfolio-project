import { BadRequestException, Controller, Get, Param } from "@nestjs/common";
import { ProjectPrisma } from "./project.prisma";
import { Project } from "@core";

@Controller("projects")
export class ProjectController {
  constructor(readonly projectProvider: ProjectPrisma) {}

  @Get()
  async getAll(): Promise<Project[]> {
    return this.projectProvider.getAll();
  }

  @Get(":id")
  async getById(
    @Param("id") id: string
  ): Promise<Project | null | BadRequestException> {
    if (isNaN(Number(id))) {
      return new BadRequestException("Invalid ID");
    }
    return this.projectProvider.getById(Number(id));
  }

  // @Get("/highlights")
  // async getHighlights(): Promise<Project[]> {
  //   return this.projectProvider.getHighlights();
  // }
}
