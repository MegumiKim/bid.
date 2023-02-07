import { carouselTemplate } from "../templates/carouselTemplate.mjs";
import { singleEntryTemplate } from "../templates/singleEntryTemplate.mjs";

export class Listing {
  constructor(data) {
    this.title = data.title;
    this.id = data.id;
    this.media = data.media;
    this.tags = data.tags;
    this.created = new Date(data.created).toLocaleDateString("en-GB");
    this.endsAt = new Date(data.endsAt).toLocaleDateString();
    this.bids = data.bids;
    this.seller = data.seller;
    this.description = data.description;
  }

  get template() {
    return singleEntryTemplate(this);
  }

  render(containerOne, containerTwo) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.template, "text/html");
    const productSummary = doc.querySelector(".listing");
    const productDescription = doc.querySelector(" #description");

    containerOne.append(productSummary);
    containerTwo.append(productDescription);
  }
}

// get caroTemplate() {
//   return carouselTemplate(this);
// }

// renderCarousel(parent = document.body) {
//   for (let i = 0; i < this.media.length; i++) {
//     const element = this.media[i];
//     const parser = new DOMParser();
//     const slide = parser.parseFromString(this.caroTemplate, "text/html");
//     parent.append(slide.querySelector(".carousel-item"));
//   }
// }
