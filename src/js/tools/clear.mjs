/**
 * Clear HTML of a container
 */
export function clearHTML() {
  while (this.hasChildNodes()) {
    this.removeChild(this.lastChild);
  }
}

HTMLElement.prototype.clearHTML = clearHTML;
