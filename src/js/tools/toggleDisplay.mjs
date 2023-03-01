/**
 * Display the target HTML element by removing BS class"d-none"
 * @param {*} target
 */
export const show = (target) => {
  document.querySelector(target).classList.remove("d-none");
};

/**
 * Hide the target HTML element by adding BS class"d-none"
 * @param {*} target
 */
export const hide = (target) => {
  document.querySelector(target).classList.add("d-none");
};
