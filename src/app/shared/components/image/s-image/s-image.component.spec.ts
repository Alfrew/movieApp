import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SImageComponent } from './s-image.component';

describe('SImageComponent', () => {
  let component: SImageComponent;
  let fixture: ComponentFixture<SImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SImageComponent]
    });
    fixture = TestBed.createComponent(SImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
