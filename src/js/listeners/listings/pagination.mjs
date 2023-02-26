import { renderOffsetListings } from "../../renders/offsetListings.mjs";
import { load } from "../../storage/session.mjs";

let perPage = 12;
let currentPage = 1;
let offset = 0;
let totalPages = 0;
const pageIndication = document.querySelector(".page-indication");
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
  totalPages = Math.ceil(listings.length / perPage);
  pageIndication.innerText = `${currentPage} / ${totalPages}`;
  renderOffsetListings(listings, offset);
}

export function nextPage(event) {
  const listings = load("cached-listings");

  if (currentPage * perPage < listings.length) {
    offset = currentPage * perPage;
    currentPage++;
    totalPages = Math.ceil(listings.length / perPage);
    pageIndication.innerText = `${currentPage} / ${totalPages}`;
    renderOffsetListings(listings, offset);
    document.querySelector("#prevBtn").classList.remove("disabled");
  } else {
    event.target.classList.add("disabled");
  }
}
