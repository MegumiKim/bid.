import { deleteListing } from "../../API/listings/delete.mjs";
import { load } from "../../storage/local.mjs";

export async function deleteListingListener(event, id) {
  event.preventDefault();
  const name = load("userDetails").name;

  try {
    await deleteListing(id);
    window.location.assign(`/profile/?name=${name}`);
  } catch (e) {
    console.log(e);
  }
}
