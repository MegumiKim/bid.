/**
 * Checks if the item already exists in my favorites.
 * @param {*} data
 * @returns boolean value
 */
export const isFavorite = (data) => {
  const id = data.id;
  const currentList = getCurrentList();
  const itemExists = currentList.find(function (item) {
    return item.id === id;
  });

  if (itemExists) {
    return true;
  } else {
    return false;
  }
};

export function getCurrentList() {
  const favList = localStorage.getItem("favorite");
  if (!favList) {
    return [];
  } else {
    return JSON.parse(favList);
  }
}
