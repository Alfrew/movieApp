import { TestPage } from "./test.page";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestRoutingModule } from "./test-routing.module";
import { PaginatorModule } from "../shared/components/paginator/paginator.module";

@NgModule({
  declarations: [TestPage],
  imports: [CommonModule, TestRoutingModule, PaginatorModule],
  exports: [TestPage],
})
export class TestModule {}
