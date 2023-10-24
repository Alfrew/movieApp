import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaSearchComponent } from './ma-search.component';

describe('MaSearchComponent', () => {
  let component: MaSearchComponent;
  let fixture: ComponentFixture<MaSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaSearchComponent]
    });
    fixture = TestBed.createComponent(MaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
