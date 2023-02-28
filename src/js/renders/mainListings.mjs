import * as ui from "../ui/index.mjs";
import * as listener from "../listeners/index.mjs";
import * as API from "../API/index.mjs";

export async function listings() {
  const allListings = await API.fetchAllListings();
  const sortSelect = document.querySelector("#sort");
  const sortOption = sortSelect.value;

  sortSelect.addEventListener("change", (event) => {
    listener.onChangeSortSelect(event, allListings);
  });
  ui.endingSoonItem(allListings);
  ui.mostPopularItem(allListings);
  ui.highestBid(allListings);
  ui.searchInput(allListings);
  listener.renderSortedItems(sortOption, allListings);
}
