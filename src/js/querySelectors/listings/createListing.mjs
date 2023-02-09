import { createListingListener } from "../../listeners/listings/createListing.mjs";

export const createListingForm = () => {
  document
    .querySelector("#create-listing")
    .addEventListener("submit", createListingListener);
};
