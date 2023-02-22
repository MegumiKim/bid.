import { nextPage } from "../../listeners/listings/pagination.mjs";

export const nextBtn = (listings) => {
  document
    .querySelector("#nextBtn")
    .addEventListener("click", (event) => nextPage(event, listings));
};
