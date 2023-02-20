import { onSort } from "../../listeners/listings/onSort.mjs";

export const sortBtn = () => {
  const select = document.querySelector("select#sort");

  select.addEventListener("change", (event) =>
    // onChangeSortSelect(event, container)
    onSort(event)
  );
};
