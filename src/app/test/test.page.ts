import { Component, OnInit } from "@angular/core";
import { MovieService } from "../features/browse/services/movie.service";

@Component({
  selector: "page-test",
  template: `<app-paginator></app-paginator>`,
  styles: [],
})
export class TestPage implements OnInit {
  constructor(private movieSRV: MovieService) {}

  ngOnInit(): void {}
}
