import { Component, OnInit } from "@angular/core";
import { ShowService } from "../../services/show.service";
import { AppStatusService } from "src/app/core/services/app-status.service";
import { InputSelectOption } from "src/app/shared/utils/input-select-utils";
import { CardCta, CardInfo } from "../../models/card";
import { Filters, ShowRequestType } from "../../models/filters";
import { Genre } from "../../models/genre";
import { Sharedfunctions } from "src/app/core/utils/sharedFunctions";
import { Show } from "../../models/show";
import { IMG_PATH } from "src/app/core/constants/httpConsts";

@Component({
  templateUrl: "./shows.page.html",
  styleUrls: ["./shows.page.scss"],
})
export class ShowsPage implements OnInit {
  date: string = new Date().toDateString();
  filters: Filters = {
    include_adult: false,
    language: "en-US",
    page: 1,
    sort_by: "popularity.desc",
  };
  showCardList: CardInfo[] = [];
  showCta: CardCta[] = [
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
  showGenreList: Genre[] = [];
  showRequestList: InputSelectOption[] = [
    { value: "airingToday", viewValue: "AIRING TODAY" },
    { value: "onTheAir", viewValue: "ON THE AIR" },
    { value: "popular", viewValue: "POPULAR" },
    { value: "top", viewValue: "TOP RATED" },
    { value: "general", viewValue: "ALL SHOWS" },
  ];
  requestType: ShowRequestType = "popular";
  totalPages: number = 500;

  constructor(private appStatusService: AppStatusService, private showService: ShowService) {}

  ngOnInit(): void {
    this.getGenres();
    this.getShows();
  }

  filtersChanged(selectedFilters: Filters) {
    this.filters = Object.assign({}, selectedFilters);
    this.requestType = "general";
    this.filters.page = 1;
    this.showCardList = [];
    this.getShows();
  }

  getShows() {
    this.appStatusService.showSpinner();
    this.showService.getShowList(this.filters, this.requestType).subscribe({
      next: (res) => {
        this.showCardList.push(...this.mapShowToCard(res.results));
        this.totalPages = res.total_pages < 500 ? res.total_pages : 500;
      },
      complete: () => {
        this.appStatusService.hideSpinner();
      },
      error: () => {
        this.appStatusService.hideSpinner();
      },
    });
  }

  loadMore() {
    this.filters.page++;
    this.getShows();
  }

  requestChanged() {
    this.filters = {
      include_adult: false,
      language: "en-US",
      page: 1,
      sort_by: "popularity.desc",
    };
    this.showCardList = [];
    this.getShows();
  }

  private getGenres() {
    this.showService.getShowGenresList().subscribe((res) => {
      this.showGenreList = res.genres;
    });
  }

  private mapShowToCard(showList: Show[]): CardInfo[] {
    let cardList: CardInfo[] = [];
    showList.forEach((show) => {
      let card: CardInfo = {
        backgroundPath: IMG_PATH + show.poster_path,
        ctas: this.showCta,
        id: show.id,
        info: `${show.vote_average}/10`,
        subtitle: `${show.first_air_date} * ${Sharedfunctions.returnGenreById(this.showGenreList, show.genre_ids[0])}`,
        title: show.name,
      };
      cardList.push(card);
    });
    return cardList;
  }
}
