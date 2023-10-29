import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject, Subscription, debounceTime, distinctUntilChanged } from "rxjs";
import { Movie } from "src/app/features/movie/models/movie";
import { Show } from "src/app/features/movie/models/show";
import { MovieService } from "src/app/features/movie/services/movie.service";
import { ShowService } from "src/app/features/movie/services/show.service";

@Component({
  selector: "app-ma-search",
  templateUrl: "./ma-search.component.html",
  styleUrls: ["./ma-search.component.scss"],
})
export class MaSearchComponent implements OnInit, OnDestroy {
  term$ = new Subject<string>();
  sub?: Subscription;

  movieList: Movie[] = [];
  showList: Show[] = [];

  constructor(private movieSRV: MovieService, private showSRV: ShowService) {}

  ngOnInit(): void {
    this.sub = this.term$.pipe(debounceTime(1000), distinctUntilChanged()).subscribe((term: string) => {
      this.getMovies(term);
      this.getShows(term);
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  search(target: any) {
    this.term$.next(target.value);
  }

  private getMovies(searchValue: string) {
    this.movieSRV.searchMovie(searchValue).subscribe({
      next: (res) => {
        this.movieList = res.results.slice(0, 3);
      },
    });
  }
  private getShows(searchValue: string) {
    this.showSRV.searchShow(searchValue).subscribe({
      next: (res) => {
        this.showList = res.results.slice(0, 3);
      },
    });
  }
}
