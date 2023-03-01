import { load } from "../../storage/session.mjs";
import * as render from "../../renders/index.mjs";

let perPage = 12;
let currentPage = 1;
let offset = 0;
let totalPages = 0;
const pageIndication = document.querySelector(".page-indication");

/**
 * Listen to click event and display the previous items.
 * Deactivates the btn on the first page.
 * @param {*} event
 */
export function prevPage(event) {
  const listings = load("cached-listings");
  if (currentPage > 1) {
    currentPage--;
    offset = (currentPage - 1) * perPage;
    document.querySelector("#nextBtn").classList.remove("disabled");
  } else {
    event.target.classList.add("disabled");
    offset = 0;
  }
  totalPages = Math.ceil(listings.length / perPage);
  pageIndication.innerText = `${currentPage} / ${totalPages}`;
  render.renderOffsetListings(listings, offset);
}

/**
 * Listen to click event and display the previous items.
 * Deactivates the btn on the last page.
 * @param {*} event
 */
export function nextPage(event) {
  const listings = load("cached-listings");
  if (currentPage * perPage < listings.length) {
    currentPage++;
    offset = currentPage * perPage;
    totalPages = Math.ceil(listings.length / perPage);
    pageIndication.innerText = `${currentPage} / ${totalPages}`;
    render.renderOffsetListings(listings, offset);
    document.querySelector("#prevBtn").classList.remove("disabled");
  } else {
    event.target.classList.add("disabled");
  }
}
