export const save = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const load = (key) => {
  try {
    return JSON.parse(sessionStorage.getItem(key));
  } catch (error) {
    return null;
  }
};

export const remove = (key) => {
  sessionStorage.removeItem(key);
};

export const clear = () => {
  sessionStorage.clear();
};
