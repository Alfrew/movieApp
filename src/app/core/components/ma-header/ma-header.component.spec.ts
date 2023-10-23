import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaHeaderComponent } from './ma-header.component';

describe('MaHeaderComponent', () => {
  let component: MaHeaderComponent;
  let fixture: ComponentFixture<MaHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaHeaderComponent]
    });
    fixture = TestBed.createComponent(MaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
