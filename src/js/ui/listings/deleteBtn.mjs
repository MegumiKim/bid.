// import { deleteListingListener } from "../../listeners/listings/onDelete.mjs";
import * as listeners from "../../listeners/index.mjs";
export const deleteBtn = (id) => {
  document
    .querySelector("#delete-btn")
    .addEventListener("click", (event) =>
      listeners.deleteListingListener(event, id)
    );
};
