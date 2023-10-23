import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaSectionComponent } from "./ma-section/ma-section.component";

@NgModule({
  declarations: [MaSectionComponent],
  imports: [CommonModule],
  exports: [MaSectionComponent],
})
export class MaSectionModule {}
