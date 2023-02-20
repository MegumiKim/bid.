import { nextPage } from "../../listeners/listings/pagination.mjs";

export const nextBtn = () => {
  document.querySelector("#nextBtn").addEventListener("click", nextPage);
};
