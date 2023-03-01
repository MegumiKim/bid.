/**
 * Check the user input date and validate if it is future date.
 * When false, it alerts the user to select the future date.
 * @param {string} date
 * @returns boolean value
 */
export const validateDate = (date) => {
  const currentDate = new Date();
  const inputDate = new Date(date);

  if (inputDate > currentDate) {
    return true;
  } else {
    alert("Please select a future date");
    return false;
  }
};
