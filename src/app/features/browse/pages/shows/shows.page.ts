import { Component, OnInit } from "@angular/core";

import { CardCta, CardInfo, Filters, Genre, ShowRequestType, ShowService } from "@browse";
import { AppStatusService, Sharedfunctions } from "@core";
import { InputSelectOption } from "@shared";

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

  constructor(private appStatusSRV: AppStatusService, private showSRV: ShowService) {}

  ngOnInit(): void {
    this.getGenres();
  }

  public filtersChanged(selectedFilters: Filters) {
    this.filters = Object.assign({}, selectedFilters);
    this.requestType = "general";
    this.filters.page = 1;
    this.showCardList = [];
    this.getShows();
  }

  public loadMore() {
    this.filters.page++;
    this.getShows();
  }

  public requestChanged() {
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
    this.appStatusSRV.showSpinner();
    this.showSRV.getShowGenresList().subscribe({
      next: (res) => {
        this.showGenreList = res.genres;
      },
      complete: () => {
        this.getShows();
      },
    });
  }

  private getShows() {
    this.appStatusSRV.showSpinner();
    this.showSRV.getShowList(this.filters, this.requestType).subscribe({
      next: (res) => {
        this.showCardList.push(...Sharedfunctions.mapShowToCard(res.results, this.showGenreList));
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
