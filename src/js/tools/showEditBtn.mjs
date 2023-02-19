import { load } from "../storage/local.mjs";

export function showEditBtn(data) {
  const seller = data.seller.email;
  const myEmail = load("userDetails").email
    ? load("userDetails").email
    : "Unauthorized user";
  const editBtn = document.querySelector("button#editBtn");

  if (seller === myEmail) {
  } else {
    console.log("not me");
  }
}
