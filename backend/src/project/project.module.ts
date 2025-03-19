import { Module } from "@nestjs/common";
import { ProjectPrisma } from "./project.prisma";
import { ProjectController } from "./project.controller";
import { DbModule } from "src/db/db.module";

@Module({
  providers: [ProjectPrisma],
  controllers: [ProjectController],
  imports: [DbModule]
})
export class ProjectModule {}
