import { fetchListings } from "../API/listings/allListings.mjs";
import { save } from "../storage/session.mjs";
import { debounce } from "../tools/filters/debounce.mjs";
import { onSearch } from "../listeners/listings/onSearch.mjs";
import { onChangeSortSelect } from "../tools/sort/sort.mjs";
import { clearHTML } from "../tools/clear.mjs";
import { userAlert } from "./userAlert.mjs";
import { postListingCard } from "../templates/listingCard.mjs";
import { renderCards } from "./renderCards.mjs";

// document.querySelector("#prevBtn").addEventListener("click", prevPage);
// document.querySelector("#nextBtn").addEventListener("click", nextPage);

export async function renderAllListings(offset) {
  const container = document.querySelector("#listings-container");

  try {
    container.clearHTML();
    const listings = await fetchListings(offset);
    renderCards(listings, container);
    // save("cached-listings", listings);

    const search = document.querySelector("#search");
    const select = document.querySelector("select#sort");

    select.addEventListener("change", (event) =>
      onChangeSortSelect(event, container)
    );

    search.addEventListener(
      "input",
      debounce((event) => onSearch(event, listings, container), 300)
    );
  } catch (e) {
    userAlert(container, e.message, "secondary");
  }
}
