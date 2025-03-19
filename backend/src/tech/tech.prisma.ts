import { Injectable } from "@nestjs/common";
import { PrismaProvider } from "src/db/prisma.provider";
import { Tech as MyTech } from "@core";

@Injectable()
export class TechPrisma {
  constructor(private readonly prisma: PrismaProvider) {}

  async getAll(): Promise<MyTech[]> {
    return this.prisma.tech.findMany();
  }

  async getHighlights(): Promise<MyTech[]> {
    return this.prisma.tech.findMany({
      where: {
        highlight: true
      }
    });
  }
}
