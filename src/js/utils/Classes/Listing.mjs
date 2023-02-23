// // import { bidInfoTemplate } from "../templates/bidFormTemplate.mjs";
// // import { carouselTemplate } from "../templates/carouselTemplate.mjs";
// import { singleEntryTemplate } from "../templates/singleEntryTemplate.mjs";
// import { remainingTime } from "../tools/remainingTime.mjs";
// import { createBidInfo } from "./classFunctions/createBidInfo.mjs";
// import { createSingleEntry } from "./classFunctions/createSingleEntry.mjs";
// import { load } from "../storage/local.mjs";
// // import { listingCardTemplate } from "../templates/listingCardTemplate.mjs";

// export default class Listing {
//   constructor(data) {
//     this.title = data.title;
//     this.id = data.id;
//     this.media = data.media;
//     this.tags = data.tags;
//     this.created = new Date(data.created).toLocaleDateString("en-GB");
//     this.endsAt = new Date(data.endsAt);
//     this.bids = data.bids;
//     this.seller = data.seller;
//     this.description = data.description;
//   }

//   get myPoint() {
//     return load("credits");
//   }
//   get remainingTime() {
//     return remainingTime(this.endsAt);
//   }

//   get template() {
//     return singleEntryTemplate(this);
//   }

//   // get bidTemplate() {
//   //   return bidInfoTemplate(this, this.myPoint);
//   // }

//   render(container, container2) {
//     return createSingleEntry(this, container, container2);
//   }

//   renderBidInfo(container) {
//     return createBidInfo(this, container);
//   }
// }

// // get caroTemplate() {
// //   return carouselTemplate(this);
// // }

// // renderCarousel(parent = document.body) {
// //   for (let i = 0; i < this.media.length; i++) {
// //     const element = this.media[i];
// //     const parser = new DOMParser();
// //     const slide = parser.parseFromString(this.caroTemplate, "text/html");
// //     parent.append(slide.querySelector(".carousel-item"));
// //   }
// // }
