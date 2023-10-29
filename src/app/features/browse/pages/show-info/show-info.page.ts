import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";

import { CardInfo, CrewMember, Genre, ImageInfo, ShowInfo, ShowSeason, ShowService, StreamingProvider } from "@browse";
import { AppStatusService, IMG_PATH, Sharedfunctions } from "@core";

@Component({
  templateUrl: "./show-info.page.html",
  styleUrls: ["./show-info.page.scss"],
})
export class ShowInfoPage implements OnInit, OnDestroy {
  backdrops: ImageInfo[] = [];
  castCards: CardInfo[] = [];
  directors: CrewMember[] = [];
  show?: ShowInfo;
  showId!: number;
  showGenreList: Genre[] = [];
  showRecomendations: CardInfo[] = [];
  posters: ImageInfo[] = [];
  producers: CrewMember[] = [];
  providers: StreamingProvider[] = [];
  seasonCards: CardInfo[] = [];
  sub?: Subscription;
  writers: CrewMember[] = [];

  constructor(private appStatusSRV: AppStatusService, private route: ActivatedRoute, private showSRV: ShowService) {}

  ngOnInit(): void {
    this.getGenres();
    this.onGetPath();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  private getGenres() {
    this.showSRV.getShowGenresList().subscribe({
      next: (res) => {
        this.showGenreList = res.genres;
      },
      complete: () => {},
      error: () => {},
    });
  }

  private getShow() {
    this.showSRV.getShowById(this.showId).subscribe({
      next: (showData) => {
        this.show = showData;
        this.seasonCards = this.mapSeasonToCard(showData.seasons);
      },
      complete: () => {
        this.getShowWatchProviders();
      },
      error: () => {
        this.getShowWatchProviders();
      },
    });
  }

  private getShowCredits() {
    this.showSRV.getShowCredits(this.showId).subscribe({
      next: (showCredits) => {
        this.castCards = Sharedfunctions.mapCastToCard(showCredits.cast.slice(0, 14));

        this.directors = showCredits.crew.filter((crewMem: any) => {
          return crewMem.job == "Director";
        });
        this.producers = showCredits.crew.filter((crewMem: any) => {
          return crewMem.job == "Producer";
        });
        this.writers = showCredits.crew.filter((crewMem: any) => {
          return crewMem.job == "Writer";
        });
      },
      complete: () => {
        this.getShowRecomendations();
      },
      error: () => {
        this.getShowRecomendations();
      },
    });
  }

  private getShowImages() {
    this.showSRV.getShowImages(this.showId).subscribe({
      next: (showImages) => {
        this.backdrops = showImages.backdrops.slice(0, 29);
        this.posters = showImages.posters.slice(0, 29);
      },
      complete: () => {
        this.getShowCredits();
      },
      error: () => {
        this.getShowCredits();
      },
    });
  }

  private getShowRecomendations() {
    this.showSRV.getShowRecomendations(this.showId).subscribe({
      next: (showData) => {
        this.showRecomendations = Sharedfunctions.mapShowToCard(showData.results, this.showGenreList);
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
   * @param id  the show Id
   */
  private getShowVideos() {
    this.showSRV.getShowVideos(this.showId).subscribe((showData) => {});
  }

  private getShowWatchProviders() {
    this.showSRV.getShowWatchProviders(this.showId).subscribe({
      next: (showProviders) => {
        console.log(showProviders.results.US);
        if (showProviders.results.US.buy) {
          this.providers.push(
            ...showProviders.results.US.buy.map((prov: StreamingProvider) => {
              prov.logo_path = IMG_PATH + prov.logo_path;
              return prov;
            })
          );
        }
        if (showProviders.results.US.flatrate) {
          this.providers.push(
            ...showProviders.results.US.flatrate.map((prov: StreamingProvider) => {
              prov.logo_path = IMG_PATH + prov.logo_path;
              return prov;
            })
          );
        }
      },
      complete: () => {
        this.getShowImages();
      },
      error: () => {
        this.getShowImages();
      },
    });
  }

  private mapSeasonToCard(seasonList: ShowSeason[]): CardInfo[] {
    let cardList: CardInfo[] = [];
    seasonList.forEach((season) => {
      let card: CardInfo = {
        backgroundPath: IMG_PATH + season.poster_path,
        id: season.id,
        subtitle: `${season.episode_count} Episodes`,
        title: season.name,
      };
      cardList.push(card);
    });
    return cardList;
  }

  private onGetPath() {
    this.sub = this.route.params.subscribe((params: Params) => {
      this.showId = +params["id"];
      this.getShow();
    });
  }
}
