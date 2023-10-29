import { Component, EventEmitter, Input, Output } from "@angular/core";

import { matColor } from "@shared";

@Component({
  selector: "sm-icon-button",
  templateUrl: "./sm-icon-button.component.html",
  styleUrls: ["./sm-icon-button.component.scss"],
})
export class SmIconButtonComponent {
  @Input() badgeColor: matColor = "warn";
  @Input() badgeValue?: number;
  @Input() color?: matColor;
  @Input() icon?: string;
  @Input() isDisabled: boolean = false;
  @Input() label: string = "";
  @Input() tooltip: string = "";
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Used to emit the click event of the button to the parent component.
   */
  buttonClickEmitter() {
    this.buttonClick.emit();
  }
}
