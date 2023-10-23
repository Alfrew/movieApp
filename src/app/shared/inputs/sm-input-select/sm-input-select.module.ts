import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SmInputSelectComponent } from "./sm-input-select/sm-input-select.component";

@NgModule({
  declarations: [SmInputSelectComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatSelectModule],
  exports: [SmInputSelectComponent, ReactiveFormsModule],
})
export class SmInputSelectModule {}
