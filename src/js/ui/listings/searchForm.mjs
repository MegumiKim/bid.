// import { onSearch } from "../../listeners/listings/onSearch.mjs";
import { debounce } from "../../sort/filters/debounce.mjs";
import * as listeners from "../../listeners/index.mjs";

export const searchInput = (listings) => {
  const search = document.querySelector("#search");

  search.addEventListener("input", (event) =>
    debounce(listeners.onSearch(event, listings), 300)
  );

  search.addEventListener("focusout", (event) => {
    event.target.value = "";
  });
};
