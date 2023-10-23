import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ScmInputSelectComponent } from "./scm-input-select/scm-input-select.component";

@NgModule({
  declarations: [ScmInputSelectComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatSelectModule],
  exports: [ScmInputSelectComponent, ReactiveFormsModule],
})
export class ScmInputSelectModule {}
