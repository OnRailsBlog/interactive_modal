import { Controller } from "@hotwired/stimulus";
import flatpickr from "flatpickr";

// Connects to data-controller="flatpickr"
export default class extends Controller {
  static targets = ["input"];
  static values = {
    altFormat: { type: String, default: "F J (D), Y" },
    altInput: { type: Boolean, default: true },
    allowInput: { type: Boolean, default: true },
    dateFormat: { type: String, default: "Z" },
    defaultDate: { type: String, default: null },
    defaultHour: { type: String, default: "12" },
    defaultMinute: { type: String, default: "0" },
    enableTime: { type: Boolean, default: false },
    mode: { type: String, default: "single" },
    position: { type: String, default: "auto" },
    noCalendar: { type: Boolean, default: false },
    timeTwentyFourHour: { type: Boolean, default: false },
  };

  connect() {
    this.fp = flatpickr(this.inputTarget, {
      static: true,
      altInput: this.altInputValue,
      altFormat: this.altFormatValue,
      allowInput: this.allowInputValue,
      dateFormat: this.dateFormatValue,
      defaultDate: this.defaultDateValue,
      defaultHour: this.defaultHourValue,
      defaultMinute: this.defaultMinuteValue,
      enableTime: this.enableTimeValue,
      mode: this.modeValue,
      noCalendar: this.noCalendarValue,
      time_24hr: this.timeTwentyFourHourValue,
      position: this.positionValue,
      positionElement: this.inputTarget,
    });
  }
}
