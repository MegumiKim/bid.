import { prevPage } from "../../listeners/listings/pagination.mjs";
export const prevBtn = (listings) => {
  document
    .querySelector("#prevBtn")
    .addEventListener("click", (event) => prevPage(event, listings));
};
