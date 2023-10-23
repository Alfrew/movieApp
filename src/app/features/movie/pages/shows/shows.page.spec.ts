import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsPage } from './shows.page';

describe('ShowsPage', () => {
  let component: ShowsPage;
  let fixture: ComponentFixture<ShowsPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowsPage]
    });
    fixture = TestBed.createComponent(ShowsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
