import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SmInputMultiSelectComponent } from "./sm-input-multi-select/sm-input-multi-select.component";

@NgModule({
  declarations: [SmInputMultiSelectComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatSelectModule],
  exports: [SmInputMultiSelectComponent, ReactiveFormsModule],
})
export class SmInputMultiSelectModule {}
