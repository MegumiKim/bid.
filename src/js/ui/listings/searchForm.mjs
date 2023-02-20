import { onSearch } from "../../listeners/listings/onSearch.mjs";
import { debounce } from "../../tools/filters/debounce.mjs";

export const searchInput = () => {
  document
    .querySelector("#search")
    .addEventListener("input", debounce(onSearch, 300));
};
