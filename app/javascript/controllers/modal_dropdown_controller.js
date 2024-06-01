import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="modal-dropdown"
export default class extends Controller {
  static outlets = ["modal-view"];
  toggle() {
    this.modalViewOutlet.toggle(this.element);
  }
}
