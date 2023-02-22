import { onChangeSortSelect } from "../../tools/sort/sort.mjs";
export const sortBtn = (listings) => {
  const select = document.querySelector("select#sort");

  select.addEventListener("change", (event) =>
    onChangeSortSelect(event, listings)
  );
};
