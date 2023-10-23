import { Component, Input } from "@angular/core";
import { IMG_PATH } from "src/app/core/constants/httpConsts";

@Component({
  selector: "s-image",
  templateUrl: "./s-image.component.html",
  styleUrls: ["./s-image.component.scss"],
})
export class ImageComponent {
  @Input() collectionPath: string = IMG_PATH;
  @Input() imagePath: string = "";
  @Input() imgHeight: number = 0;
  @Input() imgWidth: number = 0;
}
