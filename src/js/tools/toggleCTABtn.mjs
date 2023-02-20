import { load } from "../storage/local.mjs";

export const toggleCTABtn = (data) => {
  if (!load("accessToken")) {
    showBtn("a#loginToBidBtn");
  }

  const seller = data.seller.email;
  const myEmail = load("userDetails").email
    ? load("userDetails").email
    : "Unauthorized user";

  if (seller === myEmail) {
    showBtn("button#editBtn");
    showBtn("button#deleteBtn");
  } else {
    showBtn("button#bidBtn");
  }
};

const showBtn = (target) => {
  document.querySelector(target).classList.remove("d-none");
};
