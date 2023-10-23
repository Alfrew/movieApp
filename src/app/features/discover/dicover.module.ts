import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DiscoverRoutingModule } from "./discover-routing.module";
import { DiscoverPage } from "./pages/discover/discover.page";

@NgModule({
  declarations: [DiscoverPage],
  imports: [CommonModule, DiscoverRoutingModule],
})
export class DiscoverModule {}
