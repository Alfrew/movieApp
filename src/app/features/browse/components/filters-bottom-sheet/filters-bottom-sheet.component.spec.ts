import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersBottomSheetComponent } from './filters-bottom-sheet.component';

describe('FiltersBottomSheetComponent', () => {
  let component: FiltersBottomSheetComponent;
  let fixture: ComponentFixture<FiltersBottomSheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltersBottomSheetComponent]
    });
    fixture = TestBed.createComponent(FiltersBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
