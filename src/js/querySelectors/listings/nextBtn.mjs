import { nextPage } from "../../listeners/listings/pagination.mjs";

export const NextBtn = () => {
  document.querySelector("#nextBtn").addEventListener("click", nextPage);
};
