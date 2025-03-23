import { Tech } from "@core";
import CVTechs from "./CVTechs";
import MiniCV from "./MiniCV";

export interface CVProps {
  techs: Tech[];
}

export default function CV(props: CVProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 min-h-72 w-full">
      <MiniCV />
      <CVTechs techs={props.techs} />
    </div>
  );
}
