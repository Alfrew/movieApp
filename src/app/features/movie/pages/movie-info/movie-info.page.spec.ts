import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MovieInfoPage } from "./movie-info.page";

describe("MovieInfoPage", () => {
  let component: MovieInfoPage;
  let fixture: ComponentFixture<MovieInfoPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieInfoPage],
    });
    fixture = TestBed.createComponent(MovieInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
