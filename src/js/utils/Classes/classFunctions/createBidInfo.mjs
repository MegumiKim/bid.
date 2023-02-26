// export function createBidInfo(data, container) {
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(data.bidTemplate, "text/html");
//   const bidInfo = doc.querySelector("#bid-info");
//   const minBid = doc.querySelector(".min-bid");

//   // Bids
//   if (data.bids.length) {
//     minBid.innerText = `Current bid: ${data.bids.pop().amount} pt`;
//   } else {
//     minBid.innerText = "Chance! Be the first bidder";
//   }

//   container.append(bidInfo);
// }
