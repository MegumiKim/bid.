import * as API from "../../API/index.mjs";
import * as tool from "../../tools/index.mjs";
import * as render from "../../renders/index.mjs";
import * as storage from "../../storage/local.mjs";

export async function createListingListener(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const error = document.querySelector("#user-alert");

  let payload = Object.fromEntries(formData.entries());
  payload.tags = payload.tags.split(",");
  payload.media = payload.media.split(",");

  if (!tool.validateDate(payload.endsAt)) {
    throw new Error("past date selected");
  }
  payload.endsAt = new Date(payload.endsAt);

  const name = storage.load("userDetails").name;

  try {
    await API.createListing(payload);
    form.reset();
    myPage();
    window.location.assign(`/profile/?name=${name}`);
  } catch (e) {
    render.userAlert(error, e.message, "secondary");
  }
}
