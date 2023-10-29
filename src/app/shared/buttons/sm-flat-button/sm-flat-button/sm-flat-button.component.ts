import { Component, EventEmitter, Input, Output } from "@angular/core";

import { matColor } from "@shared";

@Component({
  selector: "sm-flat-button",
  templateUrl: "./sm-flat-button.component.html",
  styleUrls: ["./sm-flat-button.component.scss"],
})
export class SmFlatButtonComponent {
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
