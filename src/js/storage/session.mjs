/**
 * Saves the key/value pair in the session storage
 * @param {String} key
 * @param {*} value
 */
export const save = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};
/**
 * Get items identified by the key and parse it to objects
 * @param {String} key
 * @returns
 */
export const load = (key) => {
  try {
    return JSON.parse(sessionStorage.getItem(key));
  } catch (error) {
    return null;
  }
};

/**
 * Removes items identified by the key from session storage
 * @param {String} key
 */
export const remove = (key) => {
  sessionStorage.removeItem(key);
};

/**
 * Clears session storage
 */
export const clear = () => {
  sessionStorage.clear();
};
