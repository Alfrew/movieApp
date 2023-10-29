import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DiscoverRoutingModule } from "./discover-routing.module";
import { DiscoverPage } from "./pages/discover/discover.page";
import { ElementCardModule } from "src/app/shared/components/element-card/element-card.module";
import { MaSectionModule } from "src/app/shared/containers/ma-section/ma-section.module";
import { ImageModule } from "src/app/shared/components/image/s-image.module";

@NgModule({
  declarations: [DiscoverPage],
  imports: [CommonModule, DiscoverRoutingModule, ElementCardModule, MaSectionModule, ImageModule],
})
export class DiscoverModule {}
