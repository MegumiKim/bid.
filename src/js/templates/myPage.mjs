import { cloneTemplate } from "./cloneTemplate.mjs";

export const postMyPage = (data, parent) => {
  console.log(data);

  const doc = cloneTemplate("user-summary-temp");
  const h1 = document.querySelector("h1");
  h1.innerText = `Hello ${data.name}!`;

  console.log(h1);

  // document.querySelector(
  //   "h3"
  // ).innerHTML = `Current Cash Point: ${data.credits} pt <br><img src="../../../asset/icons/money-icon.svg"></img>`;

  // const img = document.querySelector("img");
  // img.src = `${data.avatar}`;
  // img.alt = `${data.name}`;

  // document.querySelector("h2").innerText = data.name;
  // document.querySelector("p.email").innerText = "${data.email}";

  parent.append(doc);
};
