import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SmInputSelectComponent } from "./sm-input-select.component";

describe("SmInputSelectComponent", () => {
  let component: SmInputSelectComponent;
  let fixture: ComponentFixture<SmInputSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmInputSelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SmInputSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
