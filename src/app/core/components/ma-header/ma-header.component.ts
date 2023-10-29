import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ma-header",
  templateUrl: "./ma-header.component.html",
  styleUrls: ["./ma-header.component.scss"],
})
export class MaHeaderComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
