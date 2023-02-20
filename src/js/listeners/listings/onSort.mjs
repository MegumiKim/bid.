import { renderAllListings } from "../../renders/allListings.mjs";

export const onSort = (event) => {
  event.preventDefault();
  const selectedOption = event.target.value;

  if (selectedOption === "created") {
    renderAllListings(0);
  }
  console.log("ending soon");
};
