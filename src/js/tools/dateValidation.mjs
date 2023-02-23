export const validateDate = (date) => {
  const currentDate = new Date();
  const inputDate = new Date(date);

  if (inputDate > currentDate) {
    return true;
  } else {
    alert("please select a future date");
    return false;
  }
};
