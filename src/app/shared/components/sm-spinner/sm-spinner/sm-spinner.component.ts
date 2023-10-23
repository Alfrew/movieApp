import { Component, Input } from "@angular/core";

@Component({
  selector: "sm-spinner",
  templateUrl: "./sm-spinner.component.html",
  styleUrls: ["./sm-spinner.component.scss"],
})
export class SmSpinnerComponent {
  @Input() isLocal: boolean = true;
  @Input() diameter: number = 100;
  @Input() strokeWidth: number = 8;
}
