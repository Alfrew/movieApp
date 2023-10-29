import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInfoPage } from './show-info.page';

describe('ShowInfoPage', () => {
  let component: ShowInfoPage;
  let fixture: ComponentFixture<ShowInfoPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowInfoPage]
    });
    fixture = TestBed.createComponent(ShowInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
