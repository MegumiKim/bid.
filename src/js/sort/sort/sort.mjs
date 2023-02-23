import { searchFilter } from "../filters/searchFilter.mjs";
import { renderOffsetListings } from "../../renders/offsetListings.mjs";
import { save } from "../../storage/session.mjs";
import { show } from "../../tools/toggleDisplay.mjs";

export function onChangeSortSelect(event, listings) {
  const selectedOption = event.target.value;
  const sortedListings = sort(listings, selectedOption);

  renderOffsetListings(sortedListings, 0);
  save("cached-listings", sortedListings);
  show("#pagination");
}

export function renderSortedItems(selectedOption, listings) {
  const sortedListings = sort(listings, selectedOption);
  renderOffsetListings(sortedListings, 0);
  save("cached-listings", sortedListings);
}

function sort(listings, selectedOption) {
  if (selectedOption === "most-popular") {
    return mostPopular(listings);
  }
  if (selectedOption === "endsAt") {
    return endingSoon(listings);
  }
  if (selectedOption === "no test") {
    return noTests(listings);
  }
  if (selectedOption === "Highest") {
    return highest(listings);
  } else {
    return latest(listings);
  }
}

function latest(listings) {
  listings.sort((a, b) => new Date(a.created < b.created).getTime());
  return listings;
}

export const endingSoon = (listings) => {
  listings.sort((a, b) => new Date(a.endsAt > b.endsAt).getTime());
  return listings;
};

const mostPopular = (listings) => {
  listings.sort((a, b) => b.bids.length > a.bids.length);
  return listings;
};

function highest(listings) {
  // listings.sort((a, b) =>
  //   new Date(a.bids[0].amount > b.bids[0].amount).getTime()
  // );

  // listings = listings.map((listing) => {
  //   listing.bids.sort((a, b) => {
  //     listing.bids ? listing.bids.amount : 0;
  //     return a.amount - b.amount;
  //   });
  //   return listing;
  // });
  return listings;
}

const noTests = (listings) => {
  listings.filter((listing) => searchFilter(listing, "test"));
  return listings;
};
