// import UserFeedback from "../Classes/UserFeedback.mjs";
import { clearHTML } from "../tools/clear.mjs";
export function userAlert(
  container,
  message = "An error occurred.",
  type = "danger"
) {
  const html = `<div class="alert alert-${type}"> ${message}</div>`;
  container.clearHTML();
  container.innerHTML = html;
}
