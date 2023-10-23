import { Component, Input } from "@angular/core";

@Component({
  selector: "app-ma-section",
  templateUrl: "./ma-section.component.html",
  styleUrls: ["./ma-section.component.scss"],
})
export class MaSectionComponent {
  @Input() sectionTitle: string = "";
}
