import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { SmSpinnerComponent } from "./sm-spinner/sm-spinner.component";

@NgModule({
  declarations: [SmSpinnerComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [SmSpinnerComponent],
})
export class SmSpinnerModule {}
