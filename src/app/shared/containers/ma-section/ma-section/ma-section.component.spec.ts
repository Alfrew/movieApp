import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaSectionComponent } from './ma-section.component';

describe('MaSectionComponent', () => {
  let component: MaSectionComponent;
  let fixture: ComponentFixture<MaSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaSectionComponent]
    });
    fixture = TestBed.createComponent(MaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
