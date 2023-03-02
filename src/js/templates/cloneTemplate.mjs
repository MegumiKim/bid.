/**
 * Makes a clone of HTML template
 * @param {*} id
 */

export const cloneTemplate = (id) => {
  const template = document.querySelector(`template#${id}`);
  if (template) {
    return template.content.cloneNode(true);
  }
  throw new Error(`${id} doesn't exist!`);
};
