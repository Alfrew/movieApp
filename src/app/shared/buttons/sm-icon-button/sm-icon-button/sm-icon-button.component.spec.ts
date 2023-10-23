import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SmIconButtonComponent } from "./sm-icon-button.component";

describe("SmIconButtonComponent", () => {
  let component: SmIconButtonComponent;
  let fixture: ComponentFixture<SmIconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmIconButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SmIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
