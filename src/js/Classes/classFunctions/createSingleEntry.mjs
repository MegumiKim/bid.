export function createSingleEntry(data, containerOne, containerTwo) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(data.template, "text/html");
  const productSummary = doc.querySelector(".listing");
  const productDescription = doc.querySelector(" #description");
  const currentBid = doc.querySelector(".currentBid");
  const tags = doc.querySelector(".tags-container");
  const bidsHistory = doc.querySelector(".bids-container");

  // Bids
  if (data.bids.length) {
    currentBid.innerText = `Current bid: ${data.bids.pop().amount} pt`;
  } else {
    currentBid.innerText = "Chance! Be the first bidder";
  }

  // Tags

  if (!data.tags.length) {
    tags.innerText = "No tag";
  }

  data.tags.forEach((item) => {
    tags.innerHTML += `<li> #${item} </li>`;
  });

  // Bid history
  if (!data.bids.length) {
    tags.innerText = "No bids yet";
  }

  data.bids
    .slice()
    .reverse()
    .forEach((item) => {
      bidsHistory.innerHTML += `<li> ${item.amount}pt by ${
        item.bidderName
      } on ${new Date(item.created).toLocaleDateString("en-GB")}</li>`;
    });

  containerOne.append(productSummary);
  containerTwo.append(productDescription);
}
