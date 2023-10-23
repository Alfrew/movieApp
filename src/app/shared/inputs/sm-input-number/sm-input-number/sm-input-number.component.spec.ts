import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SmInputNumberComponent } from "./sm-input-number.component";

describe("SmInputNumberComponent", () => {
  let component: SmInputNumberComponent;
  let fixture: ComponentFixture<SmInputNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmInputNumberComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SmInputNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
