import * as listeners from "../../listeners/index.mjs";
export const createListingForm = () => {
  document
    .querySelector("#create-listing")
    .addEventListener("submit", listeners.createListingListener);
};
