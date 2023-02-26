import { load } from "../../storage/session.mjs";

export const mostPopular = (container) => {
  const listings = load("cached-listings");

  const sortedListings = function () {
    const listings = listings.map((listing) => {
      listing.bids.sort((a, b) => {
        return new Date(b.amount) - new Date(a.amount);
      });
      return listings;
    });
  };

  // filteredListings.sort((a, b) => {
  //   a.bids.pop().amount < b.bids.pop().amount;
  // });
  // filteredListings.sort((a, b) =>
  //   new Date(a.bids.pop().amount < b.bids.pop().amount).getTime()
  // );

  // const found = listings.find(element = element.ends)

  // return filteredListings;
};
