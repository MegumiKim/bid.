import { renderEndingSoonest } from "../../sort/sort/findEndingSoonest.mjs";
export const endingSoonItem = (listings) => {
  const container = document.querySelector("#ending-soon");
  renderEndingSoonest(container, listings);
};
