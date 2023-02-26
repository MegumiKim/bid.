import * as sort from "../../sort/sort/index.mjs";
export const endingSoonItem = (listings) => {
  const container = document.querySelector("#ending-soon");
  sort.renderExpiring(container, listings);
};
