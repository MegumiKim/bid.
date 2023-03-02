import { searchFilter } from "../filters/searchFilter.mjs";

export const latest = (listings) => {
  listings.sort((a, b) => new Date(b.created) - new Date(a.created));
  return listings;
};

export const endingSoon = (listings) => {
  listings.sort((a, b) => new Date(a.endsAt) - new Date(b.endsAt));
  return listings;
};

export const mostPopular = (listings) => {
  listings.sort((a, b) => b.bids.length - a.bids.length);
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

/**
 * Filter out the listings with contains "test" in title, description or tags.
 * @param {array} listings
 */
export const noTests = (listings) => {
  listings = listings.filter((listing) => !searchFilter(listing, "test"));

  return listings;
};
