import * as render from "../../renders/index.mjs";
import * as tool from "../../tools/index.mjs";
import * as filter from "../../sort/filters/index.mjs";

/**
 * Listens to form submit event and filter the listings by the searched term.
 * Render the results.
 * @param {*} event
 * @param {Array} listings
 * @returns
 */
export function onSearch(event, listings) {
  event.preventDefault();

  const container = document.querySelector("#listings-container");
  const form = event.target;
  const searchTerm = form.value.trim().toLowerCase();

  if (!searchTerm.length) {
    container.clearHTML();
    render.renderOffsetListings(listings, 0, container);
    tool.show("#pagination");
    return;
  } else {
    if (searchTerm.length < 3) {
      return;
    }

    const filteredListings = listings.filter((listing) =>
      filter.searchFilter(listing, searchTerm)
    );

    if (filteredListings.length) {
      container.clearHTML();
      render.renderCards(filteredListings, container);
      tool.hide("#pagination");
    } else {
      container.innerHTML = "no result";
    }
  }
}
