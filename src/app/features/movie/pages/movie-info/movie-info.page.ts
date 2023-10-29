import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { ActivatedRoute, Params } from "@angular/router";
import { MovieService } from "../../services/movie.service";
import { MovieInfo } from "../../models/movie-info";
import { CrewMember } from "../../models/crew-member";
import { ImageInfo } from "../../models/image-info";
import { CardInfo } from "../../models/card";
import { Movie } from "../../models/movie";
import { Sharedfunctions } from "src/app/core/utils/sharedFunctions";
import { Genre } from "../../models/genre";
import { StreamingProvider } from "../../models/streaming-provider";
import { CastMember } from "../../models/cast-member";
import { IMG_PATH } from "src/app/core/constants/httpConsts";

@Component({
  templateUrl: "./movie-info.page.html",
  styleUrls: ["./movie-info.page.scss"],
})
export class MovieInfoPage implements OnInit, OnDestroy {
  backdrops: ImageInfo[] = [];
  castCards: CardInfo[] = [];
  directors: CrewMember[] = [];
  movie?: MovieInfo;
  movieGenreList: Genre[] = [];
  movieRecomendations: CardInfo[] = [];
  posters: ImageInfo[] = [];
  producers: CrewMember[] = [];
  providers: StreamingProvider[] = [];
  sub!: Subscription;
  writers: CrewMember[] = [];

  constructor(private route: ActivatedRoute, private movieSRV: MovieService) {}

  ngOnInit(): void {
    this.getGenres();
    this.onGetPath();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  private getGenres() {
    this.movieSRV.getMovieGenresList().subscribe((res) => {
      this.movieGenreList = res.genres;
    });
  }

  private getMovie(id: number) {
    this.movieSRV.getMovieById(id).subscribe((movieData) => {
      this.movie = movieData;
    });
  }

  private getMovieCredits(id: number) {
    this.movieSRV.getMovieCredits(id).subscribe((movieCredits) => {
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
    });
  }

  private getMovieImages(id: number) {
    this.movieSRV.getMovieImages(id).subscribe((movieImages) => {
      this.backdrops = movieImages.backdrops.slice(0, 29);
      this.posters = movieImages.posters.slice(0, 29);
    });
  }

  private getMovieRecomendations(id: number) {
    this.movieSRV.getMovieRecomendations(id).subscribe((movieData) => {
      this.movieRecomendations = Sharedfunctions.mapMovieToCard(movieData.results, this.movieGenreList);
    });
  }

  /**
   * @deprecated can't be used since it doesn't return neither a link or video to watch
   * @param id  the movie Id
   */
  private getMovieVideos(id: number) {
    this.movieSRV.getMovieVideos(id).subscribe((movieData) => {});
  }

  private getMovieWatchProviders(id: number) {
    this.movieSRV.getMovieWatchProviders(id).subscribe((movieProviders) => {
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
    });
  }

  private onGetPath() {
    this.sub = this.route.params.subscribe((params: Params) => {
      const id = +params["id"];
      this.getMovie(id);
      this.getMovieCredits(id);
      this.getMovieImages(id);
      this.getMovieRecomendations(id);
      this.getMovieWatchProviders(id);
    });
  }
}
