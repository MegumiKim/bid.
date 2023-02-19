import { postListingCard } from "../templates/listingCard.mjs";

export const renderCards = (listings, parent) => {
  listings.forEach((listing) => {
    postListingCard(listing, parent);
  });
};
