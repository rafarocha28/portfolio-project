import { Tech } from "@core";
import Image from "next/image";

export interface TechsImagesProps {
  techList: Tech[];
  smallerSize?: boolean;
}

export default function TechsImages(props: TechsImagesProps) {
  return props.techList ? (
    <div className="flex justify-center gap-4 flex-wrap w-4/5">
      {props.techList.map((tech) => (
        <div key={tech.id} className="flex flex-col items-center gap-1">
          <span
            className={`
							relative h-11 w-11 rounded-xl overflow-hidden
							${!props.smallerSize && "sm:h-16 sm:w-16"}
						`}
          >
            <Image
              src={tech.image}
              alt={tech.name}
              fill
              className="object-contain"
            />
          </span>
          <span className="text-[10px] text-zinc-400">{tech.name}</span>
        </div>
      ))}
    </div>
  ) : null;
}
