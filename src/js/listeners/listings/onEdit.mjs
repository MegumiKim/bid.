import { editListing } from "../../API/listings/edit.mjs";
import { load } from "../../storage/local.mjs";
import { userAlert } from "../../renders/userAlert.mjs";
import { singleEntry } from "../../renders/singleEntry.mjs";

export async function editListingListener(event, id) {
  event.preventDefault();
  const closeBtn = document.querySelector("#close-modal-btn");

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
    singleEntry();

    closeBtn.click();
    window.location.assign(`/profile/?name=${name}`);
  } catch (e) {
    userAlert(error, e.message, "secondary");
  }
}
