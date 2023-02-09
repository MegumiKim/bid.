import { createListing } from "../../API/listings/create.mjs";

export async function createListingListener(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  let payload = Object.fromEntries(formData.entries());
  payload.tags = payload.tags.split(",");
  payload.media = payload.media.split(",");
  payload.endsAt = new Date(payload.endsAt);

  try {
    const result = await createListing(payload);
  } catch (e) {
    console.log(e);
  }
}
