export const show = (target) => {
  document.querySelector(target).classList.remove("d-none");
};

export const hide = (target) => {
  document.querySelector(target).classList.add("d-none");
};
