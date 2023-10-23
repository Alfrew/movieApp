import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmInputMultiSelectComponent } from './sm-input-multi-select.component';

describe('SmInputMultiSelectComponent', () => {
  let component: SmInputMultiSelectComponent;
  let fixture: ComponentFixture<SmInputMultiSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmInputMultiSelectComponent]
    });
    fixture = TestBed.createComponent(SmInputMultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
