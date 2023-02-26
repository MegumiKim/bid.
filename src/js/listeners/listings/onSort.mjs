import { renderOffsetListings } from "../../renders/offsetListings.mjs";
import { save } from "../../storage/session.mjs";
import { show } from "../../tools/toggleDisplay.mjs";
import * as sort from "../../sort/sort/index.mjs";

export function onChangeSortSelect(event, listings) {
  const selectedOption = event.target.value;
  renderSortedItems(selectedOption, listings);
}

export function renderSortedItems(selectedOption, listings) {
  const sortedListings = sortSelect(listings, selectedOption);
  const pageIndication = document.querySelector(".page-indication");
  save("cached-listings", sortedListings);
  console.log(selectedOption);
  renderOffsetListings(sortedListings, 0);
  pageIndication.innerText = `1 / ${Math.ceil(sortedListings.length / 12)}`;
}

function sortSelect(listings, selectedOption) {
  if (selectedOption === "mostPopular") {
    return sort.mostPopular(listings);
  }
  if (selectedOption === "endsAt") {
    return sort.endingSoon(listings);
  }
  if (selectedOption === "noTest") {
    return sort.noTests(listings);
  }
  if (selectedOption === "highestBid") {
    return sort.highest(listings);
  }
  if (selectedOption === "images") {
    return sort.withImages(listings);
  } else {
    return sort.latest(listings);
  }
}

// let currentOrder = "created&sortOrder=desc";

// export const onSort = (event) => {
//   event.preventDefault();
//   const selectedOption = event.target.value;

//   if (selectedOption === "created") {
//     currentOrder = "created&sortOrder=desc";
//     return "created&sortOrder=desc";
//     // renderAllListings(0, "created&sortOrder=desc");
//   }
//   if (selectedOption === "endsAt") {
//     currentOrder = "endsAt&sortOrder=asc";
//     return "endsAt&sortOrder=asc";
//     // renderAllListings(0, "endsAt&sortOrder=asc");
//   }
// };
