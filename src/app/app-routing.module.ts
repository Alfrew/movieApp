import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "test", loadChildren: () => import("./test/test.module").then((m) => m.TestModule) },
  {
    path: "movie",
    loadChildren: () => import("./features/movie/movie.module").then((m) => m.MovieModule),
  },
  {
    path: "user",
    loadChildren: () => import("./features/user/user.module").then((m) => m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
