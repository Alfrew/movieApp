import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { SmIconButtonComponent } from "./sm-icon-button/sm-icon-button.component";

@NgModule({
  declarations: [SmIconButtonComponent],
  imports: [CommonModule, MatButtonModule, MatBadgeModule, MatTooltipModule, MatIconModule],
  exports: [SmIconButtonComponent],
})
export class SmIconButtonModule {}
