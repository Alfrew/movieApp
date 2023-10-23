import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaFooterComponent } from './ma-footer.component';

describe('MaFooterComponent', () => {
  let component: MaFooterComponent;
  let fixture: ComponentFixture<MaFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaFooterComponent]
    });
    fixture = TestBed.createComponent(MaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
