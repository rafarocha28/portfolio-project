import { Module } from "@nestjs/common";
import { TechController } from "./tech.controller";
import { TechProvider } from "./tech.provider";
import { DbModule } from "src/db/db.module";

@Module({
  controllers: [TechController],
  providers: [TechProvider],
  imports: [DbModule]
})
export class TechModule {}
