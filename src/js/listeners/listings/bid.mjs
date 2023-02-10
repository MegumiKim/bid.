import { makeBid } from "../../API/listings/bid.mjs";
import { getParam } from "../../utils/getParam.mjs";

export async function makeBidListener(event) {
  event.preventDefault();
  const id = getParam("id");
  const form = event.target;
  const formData = new FormData(form);

  let payload = Object.fromEntries(formData.entries());
  payload.amount = parseInt(payload.amount);

  try {
    await makeBid(id, payload);
  } catch (e) {
    console.log(e);
  }
}
