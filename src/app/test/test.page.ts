import { Component, OnInit } from "@angular/core";

@Component({
  selector: "page-test",
  template: ``,
  styles: [],
})
export class TestPage implements OnInit {
  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
