import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MoviesPage } from "./pages/movies/movies.page";
import { ShowsPage } from "./pages/shows/shows.page";
import { MovieInfoPage } from "./pages/movie-info/movie-info.page";
import { ShowInfoPage } from "./pages/show-info/show-info.page";

const routes: Routes = [
  {
    path: "movies",
    component: MoviesPage,
  },
  {
    path: "movies/:id",
    component: MovieInfoPage,
  },
  {
    path: "shows",
    component: ShowsPage,
  },
  {
    path: "shows/:id",
    component: ShowInfoPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieRoutingModule {}
