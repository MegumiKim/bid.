import { fetchListings } from "../API/listings/allListings.mjs";
import { debounce } from "../tools/filters/debounce.mjs";
import { onSearch } from "../listeners/listings/onSearch.mjs";
import { userAlert } from "./userAlert.mjs";
import { renderCards } from "./renderCards.mjs";
import { onSort } from "../listeners/listings/onSort.mjs";
import { clearHTML } from "../tools/clear.mjs";
import { onChangeSortSelect } from "../tools/sort/sort.mjs";
import { postListingCard } from "../templates/listingCard.mjs";
import { save } from "../storage/session.mjs";
import { sortBtn } from "../ui/index.mjs";
import { renderLimitedListings } from "./limitedListings.mjs";

import { prevPage, nextPage } from "../listeners/listings/pagination.mjs";
import { fetchAllListings } from "../API/listings/fetchAllListings.mjs";
// document.querySelector("#prevBtn").addEventListener("click", prevPage);
// document.querySelector("#nextBtn").addEventListener("click", nextPage);

// let currentOffset = 0;

export async function listings() {
  const allListings = await fetchAllListings();
  save("cached-listings", allListings);

  renderLimitedListings(allListings, 0);

  document.querySelector("#prevBtn").addEventListener("click", prevPage);
  document.querySelector("#nextBtn").addEventListener("click", nextPage);

  const select = document.querySelector("select#sort");
  select.addEventListener("change", (event) => onChangeSortSelect(event));
}

// export async function renderAllListings(offset, sortOrder) {
//   const container = document.querySelector("#listings-container");

//   try {
//     container.clearHTML();
//     const listings = await fetchListings(offset, sortOrder);
//     renderCards(listings, container);
//     // save("cached-listings", listings);

//     // const search = document.querySelector("#search");
//     // const select = document.querySelector("select#sort");

//     // select.addEventListener("change", (event) =>
//     //   // onChangeSortSelect(event, container)
//     //   onSort(event)
//     // );

//     // search.addEventListener(
//     //   "input",
//     //   debounce((event) => onSearch(event, listings, container), 300)
//     // );
//   } catch (e) {
//     userAlert(container, e.message, "secondary");
//   }
// }
