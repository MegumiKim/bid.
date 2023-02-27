import * as API from "../../API/index.mjs";
import * as render from "../../renders/index.mjs";

export async function editListingListener(event, id) {
  event.preventDefault();
  const closeBtn = document.querySelector("#my-close-modal-btn");

  const form = event.target;
  const formData = new FormData(form);

  let payload = Object.fromEntries(formData.entries());
  payload.tags = payload.tags ? payload.tags.split(",") : [];
  payload.media = payload.media ? payload.media.split(",") : [];

  const error = document.querySelector("#user-alert-edit");
  try {
    await API.editListing(payload, id);
    form.reset();
    render.singleEntry();
    closeBtn.click();
  } catch (e) {
    render.userAlert(error, e.message, "secondary");
  }
}
