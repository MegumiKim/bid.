import * as sort from "../../sort/sort/index.mjs";
export const mostPopularItem = (listings) => {
  const container = document.querySelector("#most-popular");
  sort.renderMostPopular(container, listings);
};
