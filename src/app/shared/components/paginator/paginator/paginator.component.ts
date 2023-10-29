import { Component, EventEmitter, Input, Output } from "@angular/core";

import { AppStatusService } from "@core";

@Component({
  selector: "app-paginator",
  templateUrl: "./paginator.component.html",
  styleUrls: ["./paginator.component.scss"],
})
export class PaginatorComponent {
  @Input() page: number = 1;
  @Input() totalPages: number = 1;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  constructor(private appStatusSRV: AppStatusService) {}

  changePage(newPage: number) {
    if (newPage < 1 || newPage > this.totalPages) {
      return;
    }
    this.page = newPage;
    this.pageChange.emit(this.page);
    this.appStatusSRV.scrollToTop();
  }
}
