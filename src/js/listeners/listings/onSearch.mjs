import { renderCards } from "../../renders/renderCards.mjs";
import { save, load } from "../../storage/session.mjs";
import { searchFilter } from "../../tools/filters/searchFilter.mjs";
import { clearHTML } from "../../tools/clear.mjs";
import { renderListings } from "../../renders/renderListings.mjs";

export function onSearch(event) {
  event.preventDefault();

  const listings = load("cached-listings");
  const container = document.querySelector("#listings-container");
  const form = event.target;
  const searchTerm = form.value.trim().toLowerCase();

  if (!searchTerm.length) {
    container.clearHTML();
    // renderCards(listings, container);
    renderListings(listings, 0, container);
    return;
  } else {
    if (searchTerm.length < 3) {
      return;
    }

    const filteredListings = listings.filter((listing) =>
      searchFilter(listing, searchTerm)
    );

    save("searched-listings", filteredListings);

    if (filteredListings.length) {
      container.clearHTML();
      console.log(filteredListings);
      renderListings(filteredListings, 0, container);
    } else {
      container.innerHTML = "no result";
    }
  }
}
