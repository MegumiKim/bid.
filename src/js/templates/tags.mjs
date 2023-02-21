export const renderTags = (data, parent) => {
  if (!data.tags.length) {
    parent.innerText = "";
  }
  data.tags.forEach((item) => {
    const tag = document.createElement("p");
    tag.classList.add("me-2");
    tag.classList.add("mb-0");
    tag.innerText = `#${item} `;
    parent.append(tag);
  });
};
