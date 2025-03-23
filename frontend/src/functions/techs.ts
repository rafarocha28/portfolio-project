import { Tech } from "@core";
import { httpGet } from "./api";

export async function getTechs() {
  const techList: Tech[] = await httpGet("/techs");

  return {
    all: techList,
    get highlights() {
      return techList.filter((t) => t.highlight);
    }
  };
}
