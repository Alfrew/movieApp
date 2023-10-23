import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SmInputNumberComponent } from "./sm-input-number/sm-input-number.component";

@NgModule({
  declarations: [SmInputNumberComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatInputModule],
  exports: [SmInputNumberComponent, ReactiveFormsModule],
})
export class SmInputNumberModule {}
