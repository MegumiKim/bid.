import { renderCards } from "./renderCards.mjs";
import { userAlert } from "./userAlert.mjs";

export async function renderOffsetListings(listings, offset) {
  const container = document.querySelector("#listings-container");
  try {
    const limit = offset + 12;
    const offsetListing = listings.slice(offset, limit);

    container.clearHTML();
    renderCards(offsetListing, container);
  } catch (e) {
    userAlert(container, "failed to fetch data");
    throw new Error(e);
  }
}
