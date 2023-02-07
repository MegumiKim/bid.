import { fetchListings } from "../API/listings/allListings.mjs";
import { save } from "../storage/session.mjs";
import { renderCard } from "./renderCard.mjs";

export const allListings = async () => {
  const container = document.querySelector("#listings-container");

  try {
    const listings = await fetchListings();
    save("cached-listings", listings);

    listings.forEach((data) => {
      renderCard(container, data, ".card");
    });
  } catch (e) {
    console.log(e);
  }
};
