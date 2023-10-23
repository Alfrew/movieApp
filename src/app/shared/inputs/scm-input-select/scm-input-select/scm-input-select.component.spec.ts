import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScmInputSelectComponent } from './scm-input-select.component';

describe('ScmInputSelectComponent', () => {
  let component: ScmInputSelectComponent;
  let fixture: ComponentFixture<ScmInputSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScmInputSelectComponent]
    });
    fixture = TestBed.createComponent(ScmInputSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
