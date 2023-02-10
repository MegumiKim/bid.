import { makeBidListener } from "../../listeners/listings/bid.mjs";

export const bidForm = () => {
  document
    .querySelector("#bid-form")
    .addEventListener("submit", makeBidListener);
};
