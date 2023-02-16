import { renderCard } from "../../renders/renderCard.mjs";

import { load } from "../../storage/session.mjs";
import { searchFilter } from "../filters/searchFilter.mjs";

export function onChangeSortSelect(event, container) {
  const selectedOption = event.target.value;
  const listings = load("cached-listings");
  const sortedListings = sort(listings, selectedOption);

  container.innerHTML = "";
  sortedListings.forEach((listing) => {
    renderCard(container, listing, ".card");
  });
}

function sort(listings, selectedOption) {
  if (selectedOption === "Most Popular") {
    return mostPopular(listings);
  }
  if (selectedOption === "Ending Soon") {
    return endingSoon(listings);
  }
  if (selectedOption === "no test") {
    return noTests(listings);
  }
  if (selectedOption === "Highest") {
    console.log(highest(listings));
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
  listings.sort((a, b) => new Date(a.bids.length < b.bids.length).getTime());
  return listings;
};

function highest(listings) {
  listings.sort((a, b) =>
    new Date(a.bids.pop().amount > b.bids.pop().amount).getTime()
  );
}

const noTests = (listings) => {
  listings.filter((listing) => searchFilter(listing, "test"));
  return listings;
};
