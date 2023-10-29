import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";

import { CardInfo, CrewMember, Genre, ImageInfo, MovieInfo, MovieService, StreamingProvider } from "@browse";
import { AppStatusService, IMG_PATH, Sharedfunctions } from "@core";

@Component({
  templateUrl: "./movie-info.page.html",
  styleUrls: ["./movie-info.page.scss"],
})
export class MovieInfoPage implements OnInit, OnDestroy {
  backdrops: ImageInfo[] = [];
  castCards: CardInfo[] = [];
  directors: CrewMember[] = [];
  movie?: MovieInfo;
  movieId!: number;
  movieGenreList: Genre[] = [];
  movieRecomendations: CardInfo[] = [];
  posters: ImageInfo[] = [];
  producers: CrewMember[] = [];
  providers: StreamingProvider[] = [];
  sub!: Subscription;
  writers: CrewMember[] = [];

  constructor(private appStatusSRV: AppStatusService, private route: ActivatedRoute, private movieSRV: MovieService) {}

  ngOnInit(): void {
    this.getGenres();
    this.onGetPath();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  private getGenres() {
    this.appStatusSRV.showSpinner();
    this.movieSRV.getMovieGenresList().subscribe({
      next: (res) => {
        this.movieGenreList = res.genres;
      },
      complete: () => {},
      error: () => {},
    });
  }

  private getMovie() {
    this.movieSRV.getMovieById(this.movieId).subscribe({
      next: (movieData) => {
        this.movie = movieData;
      },
      complete: () => {
        this.getMovieWatchProviders();
      },
      error: () => {
        this.getMovieWatchProviders();
      },
    });
  }

  private getMovieCredits() {
    this.movieSRV.getMovieCredits(this.movieId).subscribe({
      next: (movieCredits) => {
        this.castCards = Sharedfunctions.mapCastToCard(movieCredits.cast.slice(0, 14));

        this.directors = movieCredits.crew.filter((crewMem: any) => {
          return crewMem.job == "Director";
        });
        this.producers = movieCredits.crew.filter((crewMem: any) => {
          return crewMem.job == "Producer";
        });
        this.writers = movieCredits.crew.filter((crewMem: any) => {
          return crewMem.job == "Writer";
        });
      },
      complete: () => {
        this.getMovieRecomendations();
      },
      error: () => {
        this.getMovieRecomendations();
      },
    });
  }

  private getMovieImages() {
    this.movieSRV.getMovieImages(this.movieId).subscribe({
      next: (movieImages) => {
        this.backdrops = movieImages.backdrops.slice(0, 29);
        this.posters = movieImages.posters.slice(0, 29);
      },
      complete: () => {
        this.getMovieCredits();
      },
      error: () => {
        this.getMovieCredits();
      },
    });
  }

  private getMovieRecomendations() {
    this.movieSRV.getMovieRecomendations(this.movieId).subscribe({
      next: (movieData) => {
        this.movieRecomendations = Sharedfunctions.mapMovieToCard(movieData.results, this.movieGenreList);
      },
      complete: () => {
        this.appStatusSRV.hideSpinner();
      },
      error: () => {
        this.appStatusSRV.hideSpinner();
      },
    });
  }

  /**
   * @deprecated can't be used since it doesn't return neither a link or video to watch
   * @param id  the movie Id
   */
  private getMovieVideos() {
    this.movieSRV.getMovieVideos(this.movieId).subscribe((movieData) => {});
  }

  private getMovieWatchProviders() {
    this.movieSRV.getMovieWatchProviders(this.movieId).subscribe({
      next: (movieProviders) => {
        console.log(movieProviders.results.US);
        if (movieProviders.results.US.buy) {
          this.providers.push(
            ...movieProviders.results.US.buy.map((prov: StreamingProvider) => {
              prov.logo_path = IMG_PATH + prov.logo_path;
              return prov;
            })
          );
        }
        if (movieProviders.results.US.flatrate) {
          this.providers.push(
            ...movieProviders.results.US.flatrate.map((prov: StreamingProvider) => {
              prov.logo_path = IMG_PATH + prov.logo_path;
              return prov;
            })
          );
        }
      },
      complete: () => {
        this.getMovieImages();
      },
      error: () => {
        this.getMovieImages();
      },
    });
  }

  private onGetPath() {
    this.sub = this.route.params.subscribe((params: Params) => {
      this.movieId = +params["id"];
      this.getMovie();
    });
  }
}
