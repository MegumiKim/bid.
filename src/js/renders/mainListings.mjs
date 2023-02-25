// import { load, save } from "../storage/session.mjs";
// import { renderOffsetListings } from "./offsetListings.mjs";
import { fetchAllListings } from "../API/listings/fetchAllListings.mjs";
import * as ui from "../ui/index.mjs";
import {
  renderSortedItems,
  onChangeSortSelect,
} from "../listeners/listings/onSort.mjs";

export async function listings() {
  const allListings = await fetchAllListings();

  const sortSelect = document.querySelector("#sort");
  const sortOption = sortSelect.value;

  sortSelect.addEventListener("change", (event) => {
    onChangeSortSelect(event, allListings);
  });
  ui.endingSoonItem(allListings);
  ui.mostPopularItem(allListings);
  ui.highestBid(allListings);
  ui.searchInput(allListings);
  ui.highestBid(allListings);
  renderSortedItems(sortOption, allListings);
}
