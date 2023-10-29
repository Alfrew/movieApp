import { Component, EventEmitter, Input, Output } from "@angular/core";

import { CardCta, CardInfo } from "@browse";

@Component({
  selector: "app-element-card",
  templateUrl: "./element-card.component.html",
  styleUrls: ["./element-card.component.scss"],
})
export class ElementCardComponent {
  @Input() card?: CardInfo;
  @Output() linkClick: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  public emitClick(cta: CardCta) {}

  public emitLink(id: number) {
    console.log(id);
  }
}
