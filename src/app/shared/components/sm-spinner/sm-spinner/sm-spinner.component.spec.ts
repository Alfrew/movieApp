import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmSpinnerComponent } from './sm-spinner.component';

describe('SmSpinnerComponent', () => {
  let component: SmSpinnerComponent;
  let fixture: ComponentFixture<SmSpinnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmSpinnerComponent]
    });
    fixture = TestBed.createComponent(SmSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
