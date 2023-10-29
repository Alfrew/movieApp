import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { ActivatedRoute, Params } from "@angular/router";
import { ShowService } from "../../services/show.service";
import { ShowInfo } from "../../models/show-info";
import { CrewMember } from "../../models/crew-member";
import { ImageInfo } from "../../models/image-info";
import { CardInfo } from "../../models/card";
import { Show } from "../../models/show";
import { Sharedfunctions } from "src/app/core/utils/sharedFunctions";
import { Genre } from "../../models/genre";
import { StreamingProvider } from "../../models/streaming-provider";
import { CastMember } from "../../models/cast-member";
import { ShowSeason } from "../../models/show-season";
import { IMG_PATH } from "src/app/core/constants/httpConsts";

@Component({
  templateUrl: "./show-info.page.html",
  styleUrls: ["./show-info.page.scss"],
})
export class ShowInfoPage implements OnInit, OnDestroy {
  backdrops: ImageInfo[] = [];
  castCards: CardInfo[] = [];
  directors: CrewMember[] = [];
  show?: ShowInfo;
  showGenreList: Genre[] = [];
  showRecomendations: CardInfo[] = [];
  posters: ImageInfo[] = [];
  producers: CrewMember[] = [];
  providers: StreamingProvider[] = [];
  seasonCards: CardInfo[] = [];
  sub?: Subscription;
  writers: CrewMember[] = [];

  constructor(private route: ActivatedRoute, private showSRV: ShowService) {}

  ngOnInit(): void {
    this.getGenres();
    this.onGetPath();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  private getGenres() {
    this.showSRV.getShowGenresList().subscribe((res) => {
      this.showGenreList = res.genres;
    });
  }

  private getShow(id: number) {
    this.showSRV.getShowById(id).subscribe((showData) => {
      this.show = showData;
      this.seasonCards = this.mapSeasonToCard(showData.seasons);
    });
  }

  private getShowCredits(id: number) {
    this.showSRV.getShowCredits(id).subscribe((showCredits) => {
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
    });
  }

  private getShowImages(id: number) {
    this.showSRV.getShowImages(id).subscribe((showImages) => {
      this.backdrops = showImages.backdrops.slice(0, 29);
      this.posters = showImages.posters.slice(0, 29);
    });
  }

  private getShowRecomendations(id: number) {
    this.showSRV.getShowRecomendations(id).subscribe((showData) => {
      this.showRecomendations = Sharedfunctions.mapShowToCard(showData.results, this.showGenreList);
    });
  }

  /**
   * @deprecated can't be used since it doesn't return neither a link or video to watch
   * @param id  the show Id
   */
  private getShowVideos(id: number) {
    this.showSRV.getShowVideos(id).subscribe((showData) => {});
  }

  private getShowWatchProviders(id: number) {
    this.showSRV.getShowWatchProviders(id).subscribe((showProviders) => {
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
      const id = +params["id"];
      this.getShow(id);
      this.getShowCredits(id);
      this.getShowImages(id);
      this.getShowRecomendations(id);
      this.getShowWatchProviders(id);
    });
  }
}
