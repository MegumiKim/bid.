import { load } from "../../storage/session.mjs";
import { renderCard } from "../../renders/renderCard.mjs";
import { searchFilter } from "../../utils/searchFilter.mjs";
import { clearHTML } from "../../utils/clearHTML.mjs";

export function onSearch(event, listings, container) {
  event.preventDefault();

  // const listings = load("cached-listings");
  // const container = document.querySelector("#listings-container");
  const form = event.target;
  const searchTerm = form.value.trim().toLowerCase();

  if (!searchTerm.length) {
    container.innerHTML = "";
    listings.forEach((listing) => {
      renderCard(container, listing, ".card");
    });
    return;
  } else {
    if (searchTerm.length < 3) {
      return;
    }

    const filteredListings = listings.filter((listing) =>
      searchFilter(listing, searchTerm)
    );

    if (filteredListings.length) {
      container.innerHTML = "";
      filteredListings.forEach((listing) => {
        renderCard(container, listing, ".card");
      });
    } else {
      container.innerHTML = "no result";
    }
  }
}
