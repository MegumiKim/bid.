import { prevPage } from "../../listeners/listings/pagination.mjs";
export const prevBtn = () => {
  document.querySelector("#prevBtn").addEventListener("click", prevPage);
};
