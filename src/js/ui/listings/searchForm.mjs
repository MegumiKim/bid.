// import { onSearch } from "../../listeners/listings/onSearch.mjs";
import { debounce } from "../../sort/filters/debounce.mjs";
import * as listeners from "../../listeners/index.mjs";

export const searchInput = () => {
  document
    .querySelector("#search")
    .addEventListener("input", debounce(listeners.onSearch, 300));
};
