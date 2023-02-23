// import { prevPage } from "../../listeners/listings/pagination.mjs";
import * as listeners from "../../listeners/index.mjs";
export const prevBtn = (listings) => {
  document
    .querySelector("#prevBtn")
    .addEventListener("click", (event) => listeners.prevPage(event, listings));
};
