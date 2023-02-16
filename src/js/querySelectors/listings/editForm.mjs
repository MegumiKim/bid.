import { editListingListener } from "../../listeners/listings/onEdit.mjs";

export const editForm = (id) => {
  document
    .querySelector("#edit-form")
    .addEventListener("submit", (event) => editListingListener(event, id));
};
