import { renderEndingSoonest } from "../../tools/sort/findEndingSoonest.mjs";
import { endingSoon } from "../../tools/sort/sort.mjs";

export const endingSoonItem = () => {
  const container = document.querySelector("#ending-soon");
  renderEndingSoonest(container);
};
