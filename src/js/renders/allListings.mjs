import { fetchListings } from "../API/listings/allListings.mjs";
import { save } from "../storage/session.mjs";
import { renderCard } from "./renderCard.mjs";

// export const searchInput = () => {
//   document
//     .querySelector("#search")
//     .addEventListener("input", debounce(onSearch, 300));
// };
import { debounce } from "../utils/debounce.mjs";
import { onSearch } from "../listeners/listings/onSearch.mjs";
export const allListings = async () => {
  const container = document.querySelector("#listings-container");
  const search = document.querySelector("#search");

  try {
    const listings = await fetchListings();
    // save("cached-listings", listings);

    listings.forEach((data) => {
      renderCard(container, data, ".card");
    });
    search.addEventListener(
      "input",
      debounce((event) => onSearch(event, listings, container), 300)
    );
  } catch (e) {
    console.log(e);
  }
};
