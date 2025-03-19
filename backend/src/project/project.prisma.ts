import { Project } from "@core";
import { Injectable } from "@nestjs/common";
import { PrismaProvider } from "src/db/prisma.provider";

@Injectable()
export class ProjectPrisma {
  constructor(private readonly prisma: PrismaProvider) {}

  async getAll(): Promise<Project[]> {
    return this.prisma.project.findMany() as any;
  }

  async getById(id: number): Promise<Project | null> {
    return this.prisma.project.findUnique({
      where: {
        id: id
      },
      include: {
        techs: true
      }
    }) as any;
  }

  async getHighlights(): Promise<Project[]> {
    return this.prisma.project.findMany({
      where: {
        highlight: true
      }
    }) as any;
  }
}
