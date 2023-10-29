import { Component, OnInit } from "@angular/core";

import { CardInfo, Filters, Genre, MovieInfo, MovieService, ShowService } from "@browse";
import { AppStatusService, IMG_PATH, Sharedfunctions } from "@core";

@Component({
  templateUrl: "./discover.page.html",
  styleUrls: ["./discover.page.scss"],
})
export class DiscoverPage implements OnInit {
  imgPathStatus: string = IMG_PATH;
  filters: Filters = {
    include_adult: false,
    language: "en-US",
    page: 1,
    sort_by: "popularity.desc",
  };
  movieCardNowPlaying: CardInfo[] = [];
  movieCardPopular: CardInfo[] = [];
  movieCardTop: CardInfo[] = [];
  movieCardUpcoming: CardInfo[] = [];
  movieGenreList: Genre[] = [];
  random?: MovieInfo;
  showCardAiringToday: CardInfo[] = [];
  showCardOnTheAir: CardInfo[] = [];
  showCardPopular: CardInfo[] = [];
  showCardTop: CardInfo[] = [];
  showGenreList: Genre[] = [];

  constructor(private appStatusSRV: AppStatusService, private movieSRV: MovieService, private showSRV: ShowService) {}

  ngOnInit(): void {
    this.getRandomMovie();
  }

  private getMovieById(id: number) {
    this.appStatusSRV.showSpinner();
    this.movieSRV.getMovieById(id).subscribe({
      next: (data) => {
        this.random = data;
      },
      complete: () => {
        if (this.random?.backdrop_path) {
          this.getMovieGenreList();
        } else {
          this.getRandomMovie();
        }
      },
      error: () => {
        this.getRandomMovie();
      },
    });
  }

  private getMovieGenreList() {
    this.movieSRV.getMovieGenresList().subscribe({
      next: (data) => {
        this.movieGenreList = data.genres;
      },
      complete: () => {
        this.getShowGenreList();
      },
      error: () => {
        this.getShowGenreList();
      },
    });
  }

  private getMovieListNowPlaying() {
    this.movieSRV.getMovieList(this.filters, "nowPlaying").subscribe({
      next: (res) => {
        this.movieCardNowPlaying = Sharedfunctions.mapMovieToCard(res.results, this.movieGenreList);
      },
      complete: () => {
        this.getMovieListUpcoming();
      },
      error: () => {
        this.getMovieListUpcoming();
      },
    });
  }

  private getMovieListPopular() {
    this.movieSRV.getMovieList(this.filters, "popular").subscribe({
      next: (res) => {
        this.movieCardPopular = Sharedfunctions.mapMovieToCard(res.results, this.movieGenreList);
      },
      complete: () => {
        this.getShowListOnTheAir();
      },
      error: () => {
        this.getShowListOnTheAir();
      },
    });
  }

  private getMovieListTop() {
    this.movieSRV.getMovieList(this.filters, "top").subscribe({
      next: (res) => {
        this.movieCardTop = Sharedfunctions.mapMovieToCard(res.results, this.movieGenreList);
      },
      complete: () => {
        this.getMovieListPopular();
      },
      error: () => {
        this.getMovieListPopular();
      },
    });
  }

  private getMovieListUpcoming() {
    this.movieSRV.getMovieList(this.filters, "upcoming").subscribe({
      next: (res) => {
        this.movieCardUpcoming = Sharedfunctions.mapMovieToCard(res.results, this.movieGenreList);
      },
      complete: () => {
        this.getMovieListTop();
      },
      error: () => {
        this.getMovieListTop();
      },
    });
  }

  private getRandomMovie() {
    let randomId = Sharedfunctions.getRandomIntFromInterval(0, 5000);
    this.getMovieById(randomId);
  }

  private getShowGenreList() {
    this.showSRV.getShowGenresList().subscribe({
      next: (data) => {
        this.showGenreList = data.genres;
      },
      complete: () => {
        this.getMovieListNowPlaying();
      },
      error: () => {
        this.getMovieListNowPlaying();
      },
    });
  }

  private getShowListOnTheAir() {
    this.showSRV.getShowList(this.filters, "onTheAir").subscribe({
      next: (res) => {
        this.showCardOnTheAir = Sharedfunctions.mapShowToCard(res.results, this.showGenreList);
      },
      complete: () => {
        this.getShowListTop();
      },
      error: () => {
        this.getShowListTop();
      },
    });
  }

  private getShowListPopular() {
    this.showSRV.getShowList(this.filters, "popular").subscribe({
      next: (res) => {
        this.showCardPopular = Sharedfunctions.mapShowToCard(res.results, this.showGenreList);
      },
      complete: () => {
        this.appStatusSRV.hideSpinner();
      },
      error: () => {
        this.appStatusSRV.hideSpinner();
      },
    });
  }

  private getShowListTop() {
    this.showSRV.getShowList(this.filters, "top").subscribe({
      next: (res) => {
        this.showCardTop = Sharedfunctions.mapShowToCard(res.results, this.showGenreList);
      },
      complete: () => {
        this.getShowListPopular();
      },
      error: () => {
        this.getShowListPopular();
      },
    });
  }
}
