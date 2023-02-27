export const save = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const load = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    return [];
  }
};

export const remove = (key) => {
  localStorage.removeItem(key);
};

export const clear = () => {
  localStorage.clear();
};
