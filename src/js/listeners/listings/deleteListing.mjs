import { deleteListing } from "../../API/listings/delete.mjs";
import { userAlert } from "../../renders/userAlert.mjs";
import { load } from "../../storage/local.mjs";

export async function deleteListingListener(event, id) {
  event.preventDefault();
  const name = load("userDetails").name;
  const error = document.querySelector("#user-alert-delete");
  try {
    await deleteListing(id);
    window.location.assign(`/profile/?name=${name}`);
  } catch (e) {
    userAlert(error, e.message, "secondary");
  }
}
