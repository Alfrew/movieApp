import { TestPage } from "./test.page";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestRoutingModule } from "./test-routing.module";

@NgModule({
  declarations: [TestPage],
  imports: [CommonModule, TestRoutingModule],
  exports: [TestPage],
})
export class TestModule {}
