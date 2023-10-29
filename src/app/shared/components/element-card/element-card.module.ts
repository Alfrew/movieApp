import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ElementCardComponent } from "./element-card/element-card.component";
import { SmIconButtonModule } from "../../buttons/sm-icon-button/sm-icon-button.module";

@NgModule({
  declarations: [ElementCardComponent],
  imports: [CommonModule, SmIconButtonModule],
  exports: [ElementCardComponent],
})
export class ElementCardModule {}
