import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "test", loadChildren: () => import("./test/test.module").then((m) => m.TestModule) },
  { path: "discover", loadChildren: () => import("./features/discover/discover.module").then((m) => m.DiscoverModule) },
  {
    path: "browse",
    loadChildren: () => import("./features/browse/browse.module").then((m) => m.BrowseModule),
  },
  {
    path: "user",
    loadChildren: () => import("./features/user/user.module").then((m) => m.UserModule),
  },
  { path: "", redirectTo: "discover", pathMatch: "full" },
  { path: "**", redirectTo: "discover", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
