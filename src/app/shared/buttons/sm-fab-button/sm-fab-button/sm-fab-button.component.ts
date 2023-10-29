import { Component, EventEmitter, Input, Output } from "@angular/core";

import { matColor } from "@shared";

@Component({
  selector: "sm-fab-button",
  templateUrl: "./sm-fab-button.component.html",
  styleUrls: ["./sm-fab-button.component.scss"],
})
export class SmFabButtonComponent {
  @Input() badgeColor: matColor = "warn";
  @Input() badgeValue?: number;
  @Input() color?: matColor;
  @Input() icon?: string;
  @Input() isDisabled: boolean = false;
  @Input() isExtended: boolean = false;
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
