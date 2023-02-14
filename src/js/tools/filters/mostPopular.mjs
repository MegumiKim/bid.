import { load } from "../../storage/session.mjs";

export const mostPopular = (container) => {
  const listings = load("cached-listings");

  const filteredListings = listings.filter((listing) => listing.bids.length);

  filteredListings.forEach((listing) => {
    const highestBid = listing.bids.pop().amount;
    console.log(highestBid);
  });

  filteredListings.sort((a, b) => {
    a.bids.pop().amount < b.bids.pop().amount;
  });
  // filteredListings.sort((a, b) =>
  //   new Date(a.bids.pop().amount < b.bids.pop().amount).getTime()
  // );

  console.log(filteredListings);
  return filteredListings;
};
