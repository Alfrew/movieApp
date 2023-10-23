import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NumberSuffixPipe } from "./number-suffix-pipe/number-suffix.pipe";

@NgModule({
  declarations: [NumberSuffixPipe],
  imports: [CommonModule],
  exports: [NumberSuffixPipe],
})
export class NumberSuffixPipeModule {}
