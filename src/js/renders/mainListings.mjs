import * as ui from "../ui/index.mjs";
import * as listener from "../listeners/index.mjs";
import * as API from "../API/index.mjs";
/**
 * Display main landing page and sets up sort/search functions.
 */
export async function listings() {
  const allListings = await API.fetchAllListings();
  const sortSelect = document.querySelector("#sort");
  const sortOption = sortSelect.value;

  sortSelect.addEventListener("change", (event) => {
    listener.onChangeSortSelect(event, allListings);
  });

  ui.prevBtn();
  ui.nextBtn();
  // ui.endingSoonItem(allListings);
  // ui.mostPopularItem(allListings);
  // ui.highestBid(allListings);
  ui.searchInput(allListings);
  listener.renderSortedItems(sortOption, allListings);
}
