import * as storage from "../../storage/local.mjs";

export const addToFavListener = (data) => {
  const btn = document.querySelector("#favBtn");
  const id = data.id;
  const currentList = getCurrentList();
  const itemExists = currentList.find(function (item) {
    return (item.id = id);
  });
  if (!itemExists) {
    const listing = { id: id, data: data };
    currentList.push(listing);
    storage.save("favorite", currentList);
    favBtn.innerText = "Remove from My Favorites";
  } else {
    const newList = currentList.filter((listing) => listing.id != id);
    storage.save("favorite", newList);
    favBtn.innerText = "Add To My Favorites";
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
