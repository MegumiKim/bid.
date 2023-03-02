/**
 * creates HTML element for each tag if there are any
 * @param {object} data
 * @param {*} parent
 */
export const renderTags = (data, parent) => {
  if (!data.tags.length) {
    parent.innerText = "";
  } else {
    data.tags.forEach((item) => {
      const tag = document.createElement("p");
      tag.classList.add("me-2");
      tag.classList.add("mb-0");
      tag.innerText = `#${item} `;
      parent.append(tag);
    });
  }
};
