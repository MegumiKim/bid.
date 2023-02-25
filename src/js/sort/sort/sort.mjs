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
  save("cached-listings", sortedListings);
  renderOffsetListings(sortedListings, 0);
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

export const mostPopular = (listings) => {
  listings.sort((a, b) => b.bids.length > a.bids.length);
  return listings;
};

export function highest(listings) {
  // step 1. filter out listings without bids
  listings = listings.filter((listing) => listing.bids.length);

  // step 2. Rearrange each listing's bid by amount
  listings = listings.map((listing) => {
    listing.bids.sort((a, b) => {
      return b.amount - a.amount;
    });
    return listing;
  });
  // Step 3. Finally sort listings by the last (highest) amount
  listings = listings.sort((a, b) => {
    return b.bids[0].amount - a.bids[0].amount;
  });

  return listings;
}

const noTests = (listings) => {
  listings.filter((listing) => searchFilter(listing, "test"));
  return listings;
};
