import { save } from "../../storage/session.mjs";
import * as sort from "../../sort/sort/index.mjs";
import * as render from "../../renders/index.mjs";

/**
 * Listens to a change event and renders the listing according to the selected value.
 * @param {*} event
 * @param {Array} listings
 */
export function onChangeSortSelect(event, listings) {
  const selectedOption = event.target.value;
  renderSortedItems(selectedOption, listings);
}

/**
 * Renders the listings and set the first page indications,
 * according to the selected sort options.
 * @param {*} selectedOption
 * @param {Array} listings
 */
export function renderSortedItems(selectedOption, listings) {
  const sortedListings = sortSelect(listings, selectedOption);
  const pageIndication = document.querySelector(".page-indication");
  save("cached-listings", sortedListings);
  render.renderOffsetListings(sortedListings, 0);
  pageIndication.innerText = `1 / ${Math.floor(sortedListings.length / 12)}`;
}

function sortSelect(listings, selectedOption) {
  if (selectedOption === "mostPopular") {
    return sort.mostPopular(listings);
  }
  if (selectedOption === "endsAt") {
    return sort.endingSoon(listings);
  }
  if (selectedOption === "noTest") {
    return sort.noTests(listings);
  }
  if (selectedOption === "highestBid") {
    return sort.highest(listings);
  } else {
    return sort.latest(listings);
  }
}
