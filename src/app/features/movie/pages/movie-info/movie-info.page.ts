import { Component, OnInit } from "@angular/core";
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
export class MovieInfoPage implements OnInit {
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

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit(): void {
    this.getGenres();
    this.onGetPath();
  }

  private getGenres() {
    this.movieService.getMovieGenresList().subscribe((res) => {
      this.movieGenreList = res.genres;
    });
  }

  private getMovie(id: number) {
    this.movieService.getMovieById(id).subscribe((movieData) => {
      this.movie = movieData;
    });
  }

  private getMovieCredits(id: number) {
    this.movieService.getMovieCredits(id).subscribe((movieCredits) => {
      this.castCards = this.mapCastToCard(movieCredits.cast.slice(0, 14));

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
    this.movieService.getMovieImages(id).subscribe((movieImages) => {
      this.backdrops = movieImages.backdrops.slice(0, 29);
      this.posters = movieImages.posters.slice(0, 29);
    });
  }

  private getMovieRecomendations(id: number) {
    this.movieService.getMovieRecomendations(id).subscribe((movieData) => {
      this.movieRecomendations = this.mapMovieToCard(movieData.results);
    });
  }

  /**
   * @deprecated can't be used since it doesn't return neither a link or video to watch
   * @param id  the movie Id
   */
  private getMovieVideos(id: number) {
    this.movieService.getMovieVideos(id).subscribe((movieData) => {});
  }

  private getMovieWatchProviders(id: number) {
    this.movieService.getMovieWatchProviders(id).subscribe((movieProviders) => {
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

  private mapCastToCard(castList: CastMember[]): CardInfo[] {
    let cardList: CardInfo[] = [];
    castList.forEach((castMember) => {
      let card: CardInfo = {
        backgroundPath: IMG_PATH + castMember.profile_path,
        id: castMember.id,
        subtitle: castMember.character,
        title: castMember.name,
      };
      cardList.push(card);
    });
    return cardList;
  }

  private mapMovieToCard(movieList: Movie[]): CardInfo[] {
    let cardList: CardInfo[] = [];
    movieList.forEach((movie) => {
      let card: CardInfo = {
        backgroundPath: IMG_PATH + movie.poster_path,
        id: movie.id,
        info: `${movie.vote_average}/10`,
        subtitle: `${movie.release_date} * ${Sharedfunctions.returnGenreById(this.movieGenreList, movie.genre_ids[0])}`,
        title: movie.title,
      };
      cardList.push(card);
    });
    return cardList;
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
