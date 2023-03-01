import * as listeners from "../../listeners/index.mjs";
export const nextBtn = () => {
  document
    .querySelector("#nextBtn")
    .addEventListener("click", (event) => listeners.nextPage(event));
};
