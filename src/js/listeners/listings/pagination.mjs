import { renderOffsetListings } from "../../renders/offsetListings.mjs";

let perPage = 12;
let currentPage = 1;
let offset = 0;

export function prevPage(event, listings) {
  console.log(currentPage);
  if (currentPage > 1) {
    offset = (currentPage - 1) * perPage;
    currentPage--;
  } else {
    event.target.classList.add("disabled");
    offset = 0;
  }
  renderOffsetListings(listings, offset);
}

export function nextPage(event, listings) {
  if (currentPage * perPage < listings.length) {
    offset = currentPage * perPage;
    currentPage++;
    renderOffsetListings(listings, offset);
    document.querySelector("#prevBtn").classList.remove("disabled");
  } else {
    event.target.classList.add("disabled");
  }
}
