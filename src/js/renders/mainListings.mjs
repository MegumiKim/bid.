import { load, save } from "../storage/session.mjs";
import { renderOffsetListings } from "./offsetListings.mjs";
import { fetchAllListings } from "../API/listings/fetchAllListings.mjs";
import * as ui from "../ui/index.mjs";
import { renderSortedItems, onChangeSortSelect } from "../sort/sort/sort.mjs";
import { highestBid } from "../sort/sort/highestBid.mjs";

export async function listings() {
  const allListings = await fetchAllListings();
  save("cached-listings", allListings);
  let listings = load("cached-listings");

  const sortSelect = document.querySelector("#sort");
  const sortOption = sortSelect.value;

  sortSelect.addEventListener("change", (event) => {
    onChangeSortSelect(event, allListings);
  });
  ui.endingSoonItem(allListings);
  ui.mostPopularItem(allListings);
  ui.searchInput(allListings);
  ui.prevBtn(listings);
  ui.nextBtn(listings);
  renderSortedItems(sortOption, allListings);

  // renderSortedItems(sortOption, allListings);
  // renderOffsetListings(listings, 0);
}
