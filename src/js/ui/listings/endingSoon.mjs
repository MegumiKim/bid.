import { renderEndingSoonest } from "../../sort/sort/findEndingSoonest.mjs";
export const endingSoonItem = () => {
  const container = document.querySelector("#ending-soon");
  renderEndingSoonest(container);
};
