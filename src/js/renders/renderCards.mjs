import * as template from "../templates/index.mjs";
export const renderCards = (listings, parent) => {
  parent.clearHTML();
  listings.forEach((listing) => {
    template.postListingCard(listing, parent);
  });
};
