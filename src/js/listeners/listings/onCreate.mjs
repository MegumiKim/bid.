import { createListing } from "../../API/listings/create.mjs";
import { load } from "../../storage/local.mjs";
import { userAlert } from "../../renders/userAlert.mjs";
import { myPage } from "../../renders/myPage.mjs";

export async function createListingListener(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const error = document.querySelector("#user-alert");

  let payload = Object.fromEntries(formData.entries());
  payload.tags = payload.tags.split(",");
  payload.media = payload.media.split(",");
  payload.endsAt = new Date(payload.endsAt);

  const name = load("userDetails").name;

  try {
    await createListing(payload);
    form.reset();
    // myPage();
    window.location.assign(`/profile/?name=${name}`);
  } catch (e) {
    userAlert(error, e.message, "secondary");
  }
}
