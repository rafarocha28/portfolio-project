import { Module } from "@nestjs/common";
import { TechController } from "./tech.controller";
import { TechPrisma } from "./tech.prisma";
import { DbModule } from "src/db/db.module";

@Module({
  controllers: [TechController],
  providers: [TechPrisma],
  imports: [DbModule]
})
export class TechModule {}
