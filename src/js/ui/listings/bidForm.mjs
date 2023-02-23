// import { makeBidListener } from "../../listeners/listings/onBid.mjs";
import * as listeners from "../../listeners/index.mjs";
export const bidForm = () => {
  document
    .querySelector("#bid-form")
    .addEventListener("submit", listeners.makeBidListener);
};
