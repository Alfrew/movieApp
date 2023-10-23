import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AppStatusService {
  isSpinnerVisible: BehaviorSubject<boolean> = new BehaviorSubject(false);
  goToTop: BehaviorSubject<boolean> = new BehaviorSubject(false);
  goTop: boolean = false;

  constructor() {}

  scrollToTop() {
    this.goTop = !this.goTop;
    this.goToTop.next(this.goTop);
  }

  hideSpinner() {
    this.isSpinnerVisible.next(false);
  }

  showSpinner() {
    this.isSpinnerVisible.next(true);
  }
}
