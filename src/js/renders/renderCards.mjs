import { postListingCard } from "../templates/listingCard.mjs";

export const renderCards = (listings, parent) => {
  parent.clearHTML();
  listings.forEach((listing) => {
    postListingCard(listing, parent);
  });
};
