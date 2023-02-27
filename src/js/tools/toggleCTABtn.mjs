import { load } from "../storage/local.mjs";
import { show } from "./toggleDisplay.mjs";
export const toggleCTABtn = (data) => {
  if (!load("accessToken")) {
    show("a#loginToBidBtn");
  } else {
    const seller = data.seller.email;
    const myEmail = load("userDetails").email
      ? load("userDetails").email
      : "Unauthorized user";

    if (seller === myEmail) {
      show("button#editBtn");
      show("button#deleteBtn");
    } else {
      const favBtn = document.querySelector("#favBtn");
      show("button#bidBtn");
      show("button#favBtn");

      if (isFavorite(data)) {
        favBtn.innerText = "Remove From Favorite";
      }
    }
  }
};

const isFavorite = (data) => {
  const id = data.id;
  const currentList = getCurrentList();
  const itemExists = currentList.find(function (item) {
    return item.id === id;
  });
  console.log(currentList);
  if (itemExists) {
    return true;
  } else {
    return false;
  }
};

export function getCurrentList() {
  const watchList = localStorage.getItem("favorite");
  if (!watchList) {
    return [];
  } else {
    return JSON.parse(watchList);
  }
}
