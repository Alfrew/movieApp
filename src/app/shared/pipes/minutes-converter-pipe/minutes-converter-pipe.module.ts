import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MinutesConverterPipe } from "./minutes-converter-pipe/minutes-converter.pipe";

@NgModule({
  declarations: [MinutesConverterPipe],
  imports: [CommonModule],
  exports: [MinutesConverterPipe],
})
export class MinutesConverterPipeModule {}
