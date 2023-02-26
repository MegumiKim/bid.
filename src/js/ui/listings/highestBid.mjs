import * as sort from "../../sort/sort/index.mjs";
export const highestBid = (listings) => {
  const container = document.querySelector("#highest-bid");
  sort.renderHighestBid(container, listings);
};
