import { Tech } from "@core";

export interface CVTechsProps {
  techs: Tech[];
}

export default function CVTechs(props: CVTechsProps) {
  return props.techs ? (
    <div
      className="flex justify-center items-center p-6 w-full lg:w-72 
			bg-black border border-zinc-800 rounded-2xl"
    >
      <div className="flex justify-center gap-x-3 flex-wrap">
        {props.techs.map((t) => (
          <div key={t.id}>
            <span className="text-blue-500 font-bold">#</span>
            <span>{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  ) : null;
}
