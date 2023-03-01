import * as listeners from "../../listeners/index.mjs";
export const prevBtn = () => {
  document
    .querySelector("#prevBtn")
    .addEventListener("click", (event) => listeners.prevPage(event));
};
