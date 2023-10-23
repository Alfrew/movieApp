import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SmFlatButtonComponent } from "./sm-flat-button.component";

describe("SmFlatButtonComponent", () => {
  let component: SmFlatButtonComponent;
  let fixture: ComponentFixture<SmFlatButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmFlatButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SmFlatButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
