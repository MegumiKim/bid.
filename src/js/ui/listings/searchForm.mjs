import * as listeners from "../../listeners/index.mjs";
import * as tool from "../../tools/index.mjs";
export const searchInput = (listings) => {
  const searches = document.querySelectorAll(".search");

  searches.forEach((search) => {
    search.addEventListener("input", (event) =>
      tool.debounce(listeners.onSearch(event, listings), 300)
    );
    search.addEventListener("keypress", (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
        window.location.assign("/#search");
      }
    });

    search.addEventListener("focusout", (event) => {
      event.target.value = "";
    });
  });
};
