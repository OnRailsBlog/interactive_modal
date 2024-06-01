import { Controller } from "@hotwired/stimulus";
import { Turbo } from "@hotwired/turbo-rails";

// Connects to data-controller="modal-view"
export default class extends Controller {
  static values = { toggled: Boolean };

  async toggle(button) {
    this.element.classList.toggle("hidden", this.toggledValue);
    this.toggledValue = !this.toggledValue;
    let rect = button.getBoundingClientRect();
    let thisRect = this.element.getBoundingClientRect();

    this.element.style.left = `${rect.left - (thisRect.width - rect.width)}px`;
    this.element.style.top = `${rect.bottom + 2}px`;
    if (this.toggledValue) {
      let animation = this.element.animate(
        [
          {
            transform: `scale(0.8, 0.0)`,
            transformOrigin: "top",
            height: "0",
            opacity: 0.0,
          },
          {
            transform: `scale(0.9, 0.7)`,
            opacity: 0.2,
            offset: 0.2,
          },
          {
            transform: `scale(1, 1)`,
            transformOrigin: "top",
            height: "auto",
            opacity: 1,
          },
        ],
        {
          duration: 100,
          easing: "ease-out",
          fill: "forwards",
        }
      );

      await animation.finished.then(animation.commitStyles());
    }
  }
}
