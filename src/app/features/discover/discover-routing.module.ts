import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DiscoverPage } from "./pages/discover/discover.page";

const routes: Routes = [
  {
    path: "",
    component: DiscoverPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscoverRoutingModule {}
