import { listingCardTemplate } from "../../templates/listingCardTemplate.mjs";

export function createMyListings(listings, parent) {
  if (listings.length) {
    listings.forEach((listing) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(
        listingCardTemplate(listing),
        "text/html"
      );
      const card = doc.querySelector(".card-template");
      const img = doc.querySelector("img");

      if (!listing.media.length) {
        img.src = "../../../../asset/img/placeholder_img.png";
      } else {
        img.src = listing.media[0];
      }
      parent.append(card);
    });
  } else {
    parent.innerHTML = "<p>No Listings</p>";
  }
}
