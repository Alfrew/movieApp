import { Component, OnInit } from "@angular/core";
import { MovieService } from "../features/movie/services/movie.service";

@Component({
  selector: "page-test",
  template: `<app-paginator></app-paginator>`,
  styles: [],
})
export class TestPage implements OnInit {
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}
}
