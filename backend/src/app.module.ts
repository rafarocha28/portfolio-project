import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { DbModule } from './db/db.module';
import { ProjectModule } from './project/project.module';
import { TechModule } from './tech/tech.module';

@Module({
  imports: [DbModule, ProjectModule, TechModule],
  controllers: [AppController]
})
export class AppModule {}
