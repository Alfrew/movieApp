import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ImageComponent } from "./s-image/s-image.component";

@NgModule({
  declarations: [ImageComponent],
  imports: [CommonModule],
  exports: [ImageComponent],
})
export class ImageModule {}
