import { cloneTemplate } from "./cloneTemplate.mjs";

// export const postListingCard = (data, parent) => {
//   const doc = cloneTemplate("listingCard");
//   const created = new Date(data.created).toLocaleDateString("en-GB");
//   const endsAt = new Date(data.endsAt).toLocaleDateString("en-GB");

//   doc.querySelector("a.card").href = `/product/?id=${data.id}`;

//   doc.querySelector("h3.card-title").innerText = data.title;
//   doc.querySelector("p.card-text").innerText = data.description;
//   doc.querySelector("p.bids").innerText = data.bids;
//   doc.querySelector("p.created").innerText = `Created on ${created}`;
//   doc.querySelector("p.endsAt").innerText = `Ends on ${endsAt}`;
//   const img = doc.querySelector("img");
//   img.src = data.media[0];
//   img.alt = data.title;
//   img.onerror = (event) => {
//     event.target.src = "../../../asset/img/placeholder_img.png";
//   };
//   parent.append(doc);
// };
export const postListingCard = (data, parent) => {
  const doc = cloneTemplate("card-template");
  const created = new Date(data.created).toLocaleDateString("en-GB");
  const endsAt = new Date(data.endsAt).toLocaleDateString("en-GB");

  doc.querySelector("a.card").href = `/product/?id=${data.id}`;

  doc.querySelector("h4").innerText = data.title;
  doc.querySelector("div.created").innerText = `Created on ${created}`;
  doc.querySelector("div.endsAt").innerText = `Ends on ${endsAt}`;
  const img = doc.querySelector("img");
  img.src = data.media[0];
  img.alt = data.title;
  img.onerror = (event) => {
    event.target.src = "../../../asset/img/placeholder_img.png";
  };
  parent.append(doc);
};
