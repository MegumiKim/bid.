import { editListing } from "../../API/listings/edit.mjs";
import { load } from "../../storage/local.mjs";
import { userAlert } from "../../renders/userAlert.mjs";

export async function editListingListener(event, id) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  let payload = Object.fromEntries(formData.entries());
  payload.tags = payload.tags ? payload.tags.split(",") : [];
  payload.media = payload.media ? payload.media.split(",") : [];

  const name = load("userDetails").name;
  const error = document.querySelector("#user-alert-edit");
  try {
    await editListing(payload, id);
    form.reset();
    window.location.assign(`/profile/?name=${name}`);
  } catch (e) {
    userAlert(error, e.message, "secondary");
  }
}
