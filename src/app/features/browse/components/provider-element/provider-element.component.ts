import { Component, Input } from "@angular/core";

import { StreamingProvider } from "@browse";

@Component({
  selector: "app-provider-element",
  templateUrl: "./provider-element.component.html",
  styleUrls: ["./provider-element.component.scss"],
})
export class ProviderElementComponent {
  @Input() provider?: StreamingProvider;
}
