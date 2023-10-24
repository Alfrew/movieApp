import { Movie } from "../../models/movie";
import { Genre } from "../../models/genre";
import { Component, OnInit } from "@angular/core";
import { CardCta, CardInfo } from "../../models/card";
import { MovieService } from "../../services/movie.service";
import { Filters, MovieRequestType } from "../../models/filters";
import { Sharedfunctions } from "src/app/core/utils/sharedFunctions";
import { InputSelectOption } from "src/app/shared/utils/input-select-utils";
import { AppStatusService } from "src/app/core/services/app-status.service";
import { IMG_PATH } from "src/app/core/constants/httpConsts";

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
    this.getMovies();
  }

  filtersChanged(selectedFilters: Filters) {
    this.filters = Object.assign({}, selectedFilters);
    this.requestType = "general";
    this.filters.page = 1;
    this.movieCardList = [];
    this.getMovies();
  }

  getMovies() {
    this.appStatusSRV.showSpinner();
    this.movieSRV.getMovieList(this.filters, this.requestType).subscribe({
      next: (res) => {
        this.movieCardList.push(...this.mapMovieToCard(res.results));
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

  loadMore() {
    this.filters.page++;
    this.getMovies();
  }

  requestChanged() {
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
    this.movieSRV.getMovieGenresList().subscribe((res) => {
      this.movieGenreList = res.genres;
    });
  }

  private mapMovieToCard(movieList: Movie[]): CardInfo[] {
    let cardList: CardInfo[] = [];
    movieList.forEach((movie) => {
      let card: CardInfo = {
        backgroundPath: IMG_PATH + movie.poster_path,
        ctas: this.movieCta,
        id: movie.id,
        info: `${movie.vote_average}/10`,
        subtitle: `${movie.release_date} * ${Sharedfunctions.returnGenreById(this.movieGenreList, movie.genre_ids[0])}`,
        title: movie.title,
      };
      cardList.push(card);
    });
    return cardList;
  }
}
