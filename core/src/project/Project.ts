import Tech from "../tech/Tech";
import { ProjectLevel } from "./ProjectLevel";
import { ProjectType } from "./ProjectType";

export default interface Project {
  id: number;
  name: string;
  description: string;
  images: string[];
  repo: string;
  highlight: boolean;
  type: ProjectType;
  level: ProjectLevel;
  techs: Tech[];
  createdAt: Date;
  updatedAt: Date;
}
