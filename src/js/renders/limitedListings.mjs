import { renderCards } from "./renderCards.mjs";
import { userAlert } from "./userAlert.mjs";

export async function renderLimitedListings(listings, offset) {
  const container = document.querySelector("#listings-container");
  try {
    const limit = offset + 12;
    const offsetListing = listings.slice(offset, limit);

    container.clearHTML();
    renderCards(offsetListing, container);
  } catch (e) {
    // userAlert(container, "failed to fetch data");
    throw new Error(e);
  }
}
// export async function renderLimitedListings(offset, order, container) {
//   try {
//     container.clearHTML();
//     const listings = await fetchListings(offset, order);
//     renderCards(listings, container);
//   } catch (e) {
//     userAlert(container, "failed to fetch data");
//     throw new Error(e);
//   }
// }
