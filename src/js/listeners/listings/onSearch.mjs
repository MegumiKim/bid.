import { renderCards } from "../../renders/renderCards.mjs";
import { renderOffsetListings } from "../../renders/offsetListings.mjs";
import { load } from "../../storage/session.mjs";
import { searchFilter } from "../../sort/filters/searchFilter.mjs";
import { clearHTML } from "../../tools/clear.mjs";
import { hide } from "../../tools/toggleDisplay.mjs";

export function onSearch(event, listings) {
  event.preventDefault();

  // const listings = load("cached-listings");
  const container = document.querySelector("#listings-container");
  const form = event.target;
  const searchTerm = form.value.trim().toLowerCase();

  if (!searchTerm.length) {
    container.clearHTML();
    renderOffsetListings(listings, 0, container);
    return;
  } else {
    if (searchTerm.length < 3) {
      return;
    }

    const filteredListings = listings.filter((listing) =>
      searchFilter(listing, searchTerm)
    );

    if (filteredListings.length) {
      container.clearHTML();
      renderCards(filteredListings, container);

      hide("#pagination");
      // hide("#prevBtn");
      // hide("#nextBtn");
      // renderOffsetListings(filteredListings, 0, container);
    } else {
      container.innerHTML = "no result";
    }
  }
}
