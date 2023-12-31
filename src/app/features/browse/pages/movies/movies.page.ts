import { Component, OnInit } from "@angular/core";

import { CardCta, CardInfo, Filters, Genre, MovieRequestType, MovieService } from "@browse";
import { AppStatusService, Sharedfunctions } from "@core";
import { InputSelectOption } from "@shared";

@Component({
  templateUrl: "./movies.page.html",
  styleUrls: ["./movies.page.scss"],
})
export class MoviesPage implements OnInit {
  date: string = new Date().toDateString();
  filters: Filters = {
    include_adult: false,
    language: "en-US",
    page: 1,
    sort_by: "popularity.desc",
  };
  movieCardList: CardInfo[] = [];
  movieCta: CardCta[] = [
    {
      iconEmpty: "add_circle_outline",
      iconFill: "add_circle",
      isActive: true,
    },
    {
      iconEmpty: "favorite_border",
      iconFill: "favorite",
      isActive: false,
    },
  ];
  movieGenreList: Genre[] = [];
  movieRequestList: InputSelectOption[] = [
    { value: "popular", viewValue: "POPULAR" },
    { value: "nowPlaying", viewValue: "NOW PLAYING" },
    { value: "top", viewValue: "TOP RATED" },
    { value: "upcoming", viewValue: "UPCOMING" },
    { value: "general", viewValue: "ALL MOVIES" },
  ];
  requestType: MovieRequestType = "popular";
  totalPages: number = 500;

  constructor(private appStatusSRV: AppStatusService, private movieSRV: MovieService) {}

  ngOnInit(): void {
    this.getGenres();
  }

  public filtersChanged(selectedFilters: Filters) {
    this.filters = Object.assign({}, selectedFilters);
    this.requestType = "general";
    this.filters.page = 1;
    this.movieCardList = [];
    this.getMovies();
  }

  public loadMore() {
    this.filters.page++;
    this.getMovies();
  }

  public requestChanged() {
    this.filters = {
      include_adult: false,
      language: "en-US",
      page: 1,
      sort_by: "popularity.desc",
    };
    this.movieCardList = [];
    this.getMovies();
  }

  private getGenres() {
    this.appStatusSRV.showSpinner();
    this.movieSRV.getMovieGenresList().subscribe({
      next: (res) => {
        this.movieGenreList = res.genres;
      },
      complete: () => {
        this.getMovies();
      },
    });
  }

  private getMovies() {
    this.appStatusSRV.showSpinner();
    this.movieSRV.getMovieList(this.filters, this.requestType).subscribe({
      next: (res) => {
        this.movieCardList.push(...Sharedfunctions.mapMovieToCard(res.results, this.movieGenreList));
        this.totalPages = res.total_pages < 500 ? res.total_pages : 500;
      },
      complete: () => {
        this.appStatusSRV.hideSpinner();
      },
      error: () => {
        this.appStatusSRV.hideSpinner();
      },
    });
  }
}
