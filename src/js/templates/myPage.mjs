import { cloneTemplate } from "./cloneTemplate.mjs";

export const postMyPage = (data, parent) => {
  const doc = cloneTemplate("user-summary-temp");
  const h1 = doc.querySelector("h1");
  h1.innerText = `Hello ${data.name}!`;

  doc.querySelector(
    "h3"
  ).innerHTML = `Current Cash Point: ${data.credits} pt </img>`;

  const img = doc.querySelector("img.rounded-circle");
  img.alt = data.name;
  img.src = data.avatar;
  img.onerror = (event) => {
    event.target.src = "../../../asset/img/avatar-placeholder.png";
  };

  doc.querySelector("h2").innerText = data.name;
  doc.querySelector("p.email").innerText = data.email;

  parent.append(doc);
};
