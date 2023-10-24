import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { interval as observableInterval } from "rxjs";
import { takeWhile, scan, tap } from "rxjs/operators";
import { AppStatusService } from "./core/services/app-status.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  @ViewChild("routerWrapper") routerWrapper!: ElementRef;
  title = "movieApp";
  isSpinnerVisible = false;

  constructor(private appStatusSRV: AppStatusService) {}

  ngOnInit(): void {
    this.subscribeToService();
  }

  private subscribeToService() {
    this.appStatusSRV.goToTop.subscribe(() => {
      this.scrollTop();
    });
    this.appStatusSRV.isSpinnerVisible.subscribe((bool) => {
      this.isSpinnerVisible = bool;
    });
  }

  private scrollTop() {
    const duration = 600;
    const interval = 5;
    const move = (this.routerWrapper.nativeElement.scrollTop * interval) / duration;
    observableInterval(interval)
      .pipe(
        scan((acc, curr) => acc - move, this.routerWrapper.nativeElement.scrollTop),
        tap((position) => (this.routerWrapper.nativeElement.scrollTop = position)),
        takeWhile((val) => val > 0)
      )
      .subscribe();
  }
}
