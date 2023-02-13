import { fetchListings } from "../API/listings/allListings.mjs";
import { save } from "../storage/session.mjs";
import { renderCard } from "./renderCard.mjs";
import { debounce } from "../tools/filters/debounce.mjs";
import { onSearch } from "../listeners/listings/onSearch.mjs";

export const allListings = async () => {
  const container = document.querySelector("#listings-container");
  const search = document.querySelector("#search");
  const select = document.querySelector("select#sort");

  try {
    const listings = await fetchListings();
    save("cached-listings", listings);

    listings.forEach((data) => {
      renderCard(container, data, ".card");
    });

    select.addEventListener("change", console.log);

    search.addEventListener(
      "input",
      debounce((event) => onSearch(event, listings, container), 300)
    );
  } catch (e) {
    console.log(e);
  }
};
