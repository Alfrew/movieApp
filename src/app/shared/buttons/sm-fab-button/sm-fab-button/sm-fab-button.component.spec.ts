import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmFabButtonComponent } from './sm-fab-button.component';

describe('SmFabButtonComponent', () => {
  let component: SmFabButtonComponent;
  let fixture: ComponentFixture<SmFabButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmFabButtonComponent]
    });
    fixture = TestBed.createComponent(SmFabButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
