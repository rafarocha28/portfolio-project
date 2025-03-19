import { Controller, Get } from "@nestjs/common";
import { Tech as MyTech } from "@core";
import { TechPrisma } from "./tech.prisma";

@Controller("techs")
export class TechController {
  constructor(private readonly techProvider: TechPrisma) {}
  @Get()
  async getAll(): Promise<MyTech[]> {
    return this.techProvider.getAll();
  }

  @Get("highlights")
  async getHighlights(): Promise<MyTech[]> {
    return this.techProvider.getHighlights();
  }
}
