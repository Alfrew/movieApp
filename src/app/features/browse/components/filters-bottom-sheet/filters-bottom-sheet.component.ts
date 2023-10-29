import { Component, Inject, OnInit } from "@angular/core";
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from "@angular/material/bottom-sheet";

import { Filters, Genre } from "@browse";
import { Sharedfunctions } from "@core";
import { InputSelectOption } from "@shared";

@Component({
  selector: "app-filters-bottom-sheet",
  templateUrl: "./filters-bottom-sheet.component.html",
  styleUrls: ["./filters-bottom-sheet.component.scss"],
})
export class FiltersBottomSheetComponent implements OnInit {
  selectedFilters: Filters = {
    include_adult: false,
    language: "en-US",
    page: 1,
    sort_by: "popularity.desc",
  };
  selectedGenres: number[] = [];

  genreList: InputSelectOption[] = [];
  sortList: InputSelectOption[] = [
    { value: "popularity.asc", viewValue: "Popularity ASC" },
    { value: "popularity.desc", viewValue: "Popularity DESC" },
    { value: "primary_release_date.asc", viewValue: "Release Date ASC" },
    { value: "primary_release_date.desc", viewValue: "Release Date DESC" },
    { value: "revenue.asc", viewValue: "Revenue ASC" },
    { value: "revenue.desc", viewValue: "Revenue DESC" },
    { value: "vote_average.asc", viewValue: "Average Vote ASC" },
    { value: "vote_average.desc", viewValue: "Average Vote DESC" },
    { value: "vote_count.asc", viewValue: "Vote Count ASC" },
    { value: "vote_count.desc", viewValue: "Vote Count DESC" },
  ];
  yearList: InputSelectOption[] = [];

  constructor(
    private bottomSheetRef: MatBottomSheetRef<FiltersBottomSheetComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public bottomSheetData: { filters: Filters; genres: Genre[] }
  ) {}

  ngOnInit(): void {
    this.selectedFilters = Object.assign({}, this.bottomSheetData.filters); //Used because if you write selectedFilters = bottomSheetData.filters, selectedFilters will be an extension of bottomSheetData.filters, meanwhile in this way they two different objects
    this.yearList = this.generateYearList();
    this.genreList = Sharedfunctions.returnSelectList(this.bottomSheetData.genres, "id", "name");
    if (this.selectedFilters.with_genres) {
      this.selectedGenres = Sharedfunctions.returnNumberListFromStringArray(this.selectedFilters.with_genres);
    }
  }

  applyFilters() {
    this.selectedFilters.with_genres = this.selectedGenres.toString();
    this.bottomSheetRef.dismiss(this.selectedFilters);
  }

  clearFilters() {
    this.selectedFilters = {
      include_adult: false,
      language: "en-US",
      page: 1,
      sort_by: "popularity.desc",
    };
    this.selectedGenres = [];
  }

  closeFilters() {
    this.bottomSheetRef.dismiss(this.bottomSheetData.filters);
  }

  private generateYearList(startYear?: number) {
    let currentYear: number = new Date().getFullYear();
    let yearList: InputSelectOption[] = [];
    startYear = startYear || 1940;

    while (startYear <= currentYear) {
      yearList.unshift({ value: startYear, viewValue: startYear.toString() });
      startYear++;
    }

    return yearList;
  }
}
