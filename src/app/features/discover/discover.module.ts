import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DiscoverPage } from "./pages/discover/discover.page";
import { DiscoverRoutingModule } from "./discover-routing.module";

import { ElementCardModule } from "src/app/shared/components/element-card/element-card.module";
import { ImageModule } from "src/app/shared/components/image/s-image.module";
import { MaSectionModule } from "src/app/shared/containers/ma-section/ma-section.module";

@NgModule({
  declarations: [DiscoverPage],
  imports: [CommonModule, DiscoverRoutingModule, ElementCardModule, ImageModule, MaSectionModule],
})
export class DiscoverModule {}
