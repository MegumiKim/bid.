import { load } from "../../storage/session.mjs";
import * as render from "../../renders/index.mjs";

let perPage = 12;
let currentPage = 1;
let offset = 0;
let totalPages = 0;
const pageIndication = document.querySelector(".page-indication");
const listings = load("cached-listings");

export function prevPage(event) {
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

export function nextPage(event) {
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
