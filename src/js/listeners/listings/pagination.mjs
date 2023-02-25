import { renderOffsetListings } from "../../renders/offsetListings.mjs";
import { load } from "../../storage/session.mjs";
import { show, hide } from "../../tools/toggleDisplay.mjs";
let perPage = 12;
let currentPage = 1;
let offset = 0;

export function prevPage(event) {
  const listings = load("cached-listings");
  if (currentPage > 1) {
    offset = (currentPage - 1) * perPage;
    currentPage--;
    document.querySelector("#nextBtn").classList.remove("disabled");
  } else {
    event.target.classList.add("disabled");
    offset = 0;
  }
  renderOffsetListings(listings, offset);
}

export function nextPage() {
  const listings = load("cached-listings");
  if (currentPage * perPage < listings.length) {
    offset = currentPage * perPage;
    currentPage++;
    renderOffsetListings(listings, offset);
    document.querySelector("#prevBtn").classList.remove("disabled");
  } else {
    event.target.classList.add("disabled");
  }
}
