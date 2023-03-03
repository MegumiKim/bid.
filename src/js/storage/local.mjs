/**
 * Saves the key/value pair in the local storage
 * @param {String} key
 * @param {*} value
 */
export const save = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Get items identified by the key and parse it to objects
 * @param {String} key
 */
export const load = (key) => {
  if (!key) {
    return [];
  } else {
    return JSON.parse(localStorage.getItem(key));
  }
};

// export const load = (key) => {
//   try {
//     return JSON.parse(localStorage.getItem(key));
//   } catch (error) {
//     return [];
//   }
// };
/**
 * Removes items identified by the key from local storage
 * @param {String} key
 */
export const remove = (key) => {
  localStorage.removeItem(key);
};

/**
 * Clears local storage
 */
export const clear = () => {
  localStorage.clear();
};
