import { Genre } from "../../models/genre";
import { Filters } from "../../models/filters";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { Sharedfunctions } from "src/app/core/utils/sharedFunctions";
import { Component, Input, Output, EventEmitter, OnDestroy } from "@angular/core";
import { FiltersBottomSheetComponent } from "../filters-bottom-sheet/filters-bottom-sheet.component";
import { Subscription } from "rxjs";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.scss"],
})
export class FiltersComponent implements OnDestroy {
  @Input() currentFilters!: Filters;
  @Input() genreList: Genre[] = [];
  @Output() filtersChange: EventEmitter<Filters> = new EventEmitter<Filters>();

  currentGenres: number[] = [];
  sub?: Subscription;

  constructor(private matBottomSheet: MatBottomSheet) {}

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  getGenreById(id: number) {
    return Sharedfunctions.returnGenreById(this.genreList, id);
  }

  openFilters() {
    let bottomSheetData = {
      filters: this.currentFilters,
      genres: this.genreList,
    };
    this.sub = this.matBottomSheet
      .open(FiltersBottomSheetComponent, { data: bottomSheetData, disableClose: true })
      .afterDismissed()
      .subscribe((filters: Filters) => {
        this.currentFilters = filters;
        if (filters.with_genres) {
          this.currentGenres = Sharedfunctions.returnNumberListFromStringArray(filters.with_genres);
        }
        this.filtersChange.emit(this.currentFilters);
      });
  }

  removeFilter(filterName: string) {
    switch (filterName) {
      case "include_adult":
        this.currentFilters.include_adult = false;
        break;
      case "sort_by":
        this.currentFilters.sort_by = "popularity.desc";
        break;
      case "vote_average_gte":
        this.currentFilters.vote_average_gte = undefined;
        break;
      case "vote_average_lte":
        this.currentFilters.vote_average_lte = undefined;
        break;
      case "with_genres":
        this.currentFilters.with_genres = undefined;
        break;
      case "year":
        this.currentFilters.year = undefined;
        break;
    }
    this.filtersChange.emit(this.currentFilters);
  }

  returnGenreLength() {
    return this.currentGenres.length > 1 ? "+" + (this.currentGenres.length - 1) : "";
  }
}
