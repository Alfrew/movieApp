import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PaginatorComponent } from "./paginator/paginator.component";
import { SmFlatButtonModule } from "../../buttons/sm-flat-button/sm-flat-button.module";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [PaginatorComponent],
  imports: [CommonModule, SmFlatButtonModule, MatIconModule],
  exports: [PaginatorComponent],
})
export class PaginatorModule {}
