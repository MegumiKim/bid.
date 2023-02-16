import { deleteListingListener } from "../../listeners/listings/deleteListing.mjs";

export const deleteBtn = (id) => {
  document
    .querySelector("#delete-btn")
    .addEventListener("click", (event) => deleteListingListener(event, id));
};
