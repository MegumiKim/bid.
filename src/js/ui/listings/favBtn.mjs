import * as listeners from "../../listeners/index.mjs";
export const favBtn = (listing) => {
  document
    .querySelector("#favBtn")
    .addEventListener("click", (event) => listeners.addToFavListener(listing));
};
