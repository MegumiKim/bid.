import { editListing } from "../../API/listings/edit.mjs";
import { load } from "../../storage/local.mjs";

export async function editListingListener(event, id) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  let payload = Object.fromEntries(formData.entries());
  payload.tags = payload.tags ? payload.tags.split(",") : [];
  payload.media = payload.media ? payload.media.split(",") : [];

  const name = load("userDetails").name;
  try {
    await editListing(payload, id);
    window.location.assign(`/profile/?name=${name}`);
  } catch (e) {
    console.log(e);
  }
}
