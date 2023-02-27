import * as API from "../../API/index.mjs";
import * as render from "../../renders/index.mjs";
import * as storage from "../../storage/local.mjs";

export async function deleteListingListener(event, id) {
  event.preventDefault();
  const name = storage.load("userDetails").name;
  const error = document.querySelector("#user-alert-delete");
  try {
    await API.deleteListing(id);
    window.location.assign(`/profile/?name=${name}`);
  } catch (e) {
    render.userAlert(error, e.message, "secondary");
  }
}
