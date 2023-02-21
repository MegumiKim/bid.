import { renderLimitedListings } from "../../renders/limitedListings.mjs";
import { load } from "../../storage/session.mjs";

let perPage = 12;
let currentPage = 1;
let offset = 0;
let listings = load("cached-listings");

export function prevPage() {
  if (currentPage > 1) {
    offset = (currentPage - 1) * perPage;
    currentPage--;
  } else {
    offset = 0;
  }
  renderLimitedListings(listings, offset);
}

export function nextPage() {
  // / if (currentPage * pageSize < listings.length) {
  offset = currentPage * perPage;
  currentPage++;
  renderLimitedListings(listings, offset);
}
