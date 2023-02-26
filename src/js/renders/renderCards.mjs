import { postListingCard } from "../templates/listingCard.mjs";
import { clearHTML } from "../tools/clear.mjs";

export const renderCards = (listings, parent) => {
  parent.clearHTML();
  listings.forEach((listing) => {
    postListingCard(listing, parent);
  });
};
