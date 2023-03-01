import * as storage from "../../storage/local.mjs";

/**
 * Listens to click event of add to favorite Btn.
 * Save the new item in the local storage, or remove the existing item from local storage.
 * Toggles the btn accordingly.
 * @param {*} data
 */
export const addToFavListener = (data) => {
  const id = data.id;
  // const currentList = getCurrentList();
  const currentList = storage.load("favorite");

  const itemExists = currentList.find(function (item) {
    return item.id === id;
  });

  // Save the new item in local storage
  if (!itemExists) {
    const newItem = data;

    currentList.push(newItem);
    storage.save("favorite", currentList);
    favBtn.innerText = "Remove from My Favorites";

    // Remove the existing one and save the renewed list
  } else {
    const newList = currentList.filter((listing) => listing.id !== id);

    storage.save("favorite", newList);
    favBtn.innerText = "Add To Favorites";
  }
};
