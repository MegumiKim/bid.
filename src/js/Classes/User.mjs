import { myPageTemplate } from "../templates/myPageTemplate.mjs";

export default class User {
  constructor(data) {
    this.name = data.name;
    this.email = data.email;
    this.avatar = data.avatar;
    this.credits = data.credits;
    this.wins = data.wins;
    this.listings = data.listings;
    this._count = data._count;
  }

  get template() {
    return myPageTemplate(this);
  }

  get myItems() {}

  render(parent) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.template, "text/html");
    const userSummary = doc.querySelector("#user-summary");

    parent.append(userSummary);
  }
}
