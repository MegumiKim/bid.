import * as listeners from "../../listeners/index.mjs";
import * as tool from "../../tools/index.mjs";
export const searchInput = (listings) => {
  const search = document.querySelector("#search");

  search.addEventListener("input", (event) =>
    tool.debounce(listeners.onSearch(event, listings), 300)
  );
  search.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  });

  search.addEventListener("focusout", (event) => {
    event.target.value = "";
  });
};
