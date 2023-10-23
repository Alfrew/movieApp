import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ma-footer",
  templateUrl: "./ma-footer.component.html",
  styleUrls: ["./ma-footer.component.scss"],
})
export class MaFooterComponent implements OnInit {
  currentRoute: string = "";

  constructor() {}

  ngOnInit(): void {}
}
