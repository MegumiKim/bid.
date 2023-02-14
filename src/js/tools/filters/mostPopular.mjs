import { load } from "../../storage/session.mjs";

export const mostPopular = (container) => {
  const listings = load("cached-listings");

  // const filteredListings = listings.filter((listing) => listing.bids.length);

  // filteredListings.forEach((listing) => {
  //   const highestBid = listing.bids.pop().amount;
  //   console.log(highestBid);
  //   return highestBid;
  // });

  // const sortedListings = filteredListings.sort((a, b) => {
  //   console.log(a.amount);
  //   return a.amount - b.amount;
  // });

  // const sortedListing = filteredListings.forEach((listing) => {
  //   listing.bids.sort((a, b) => {
  //     return a.amount - b.amount;
  //   });
  //   return filteredListings.sort((a, b) => {
  //     return a.bid - b.bid;
  //   });
  // });
  // console.log(sortedListing);

  // const sortedListing = filteredListings.map((listing) => {
  //   return (highestBid = listing.bids.pop().amount);
  // });
  // console.log(sortedListing);

  const sortedListings = function () {
    const listings = listings.map((listing) => {
      listing.bids.sort((a, b) => {
        return new Date(b.amount) - new Date(a.amount);
      });
      return listings;
    });
  };
  console.log(sortedListings);
  // filteredListings.sort((a, b) => {
  //   a.bids.pop().amount < b.bids.pop().amount;
  // });
  // filteredListings.sort((a, b) =>
  //   new Date(a.bids.pop().amount < b.bids.pop().amount).getTime()
  // );

  // const found = listings.find(element = element.ends)

  // return filteredListings;
};
