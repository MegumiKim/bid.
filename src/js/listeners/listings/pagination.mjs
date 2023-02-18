import { renderAllListings } from "../../renders/allListings.mjs";

let perPage = 12;
let currentPage = 1;
let offset = 0;

export function prevPage() {
  if (currentPage > 1) {
    offset = (currentPage - 1) * perPage;
    currentPage--;
  } else {
    offset = 0;
  }
  renderAllListings(offset);
}

export function nextPage() {
  // / if (currentPage * pageSize < listings.length) {
  offset = currentPage * perPage;
  currentPage++;
  renderAllListings(offset);
}
