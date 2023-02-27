import * as storage from "../../storage/local.mjs";

export const addToFavListener = (data) => {
  const id = data.id;
  const currentList = getCurrentList();
  const itemExists = currentList.find(function (item) {
    return item.id === id;
  });
  console.log(itemExists);
  if (!itemExists) {
    const newItem = data;

    currentList.push(newItem);
    storage.save("favorite", currentList);
    favBtn.innerText = "Remove from My Favorites";
  } else {
    const newList = currentList.filter((listing) => listing.id !== id);

    storage.save("favorite", newList);
    favBtn.innerText = "Add To Favorites";
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
