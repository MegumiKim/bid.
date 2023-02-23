// import { editAvatarListener } from "../listeners/index.mjs";
// import { listingCardTemplate } from "../templates/listingCardTemplate.mjs";
// import { postMyPage } from "../templates/myPage.mjs";
// // import { myPageTemplate } from "../templates/myPageTemplate.mjs";
// import { createMyListings } from "./classFunctions/createMyListings.mjs";

// export default class User {
//   constructor(data) {
//     this.name = data.name;
//     this.email = data.email;
//     this.avatar = data.avatar;
//     this.credits = data.credits;
//     this.wins = data.wins;
//     this.listings = data.listings;
//     this._count = data._count;
//     this.bids = data.bids;
//   }

//   // get template() {
//   //   return myPageTemplate(this);
//   // }

//   renderMyListings(parent) {
//     createMyListings(this.listings, parent);
//   }

//   render(parent) {
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(this.template, "text/html");
//     const userSummary = doc.querySelector("#user-summary");

//     parent.append(userSummary);
//   }
// }
