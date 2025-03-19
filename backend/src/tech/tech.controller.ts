import { Controller, Get } from "@nestjs/common";
import { Tech as MyTech } from "@core";
import { TechProvider } from "./tech.provider";

@Controller("techs")
export class TechController {
  constructor(private readonly techProvider: TechProvider) {}
  @Get()
  async getAll(): Promise<MyTech[]> {
    return this.techProvider.getAll();
  }

  @Get("highlights")
  async getHighlights(): Promise<MyTech[]> {
    return this.techProvider.getHighlights();
  }
}
