import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollToTopDocs } from './scroll-to-top-docs';

describe('ScrollToTopDocs', () => {
  let component: ScrollToTopDocs;
  let fixture: ComponentFixture<ScrollToTopDocs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollToTopDocs],
    }).compileComponents();

    fixture = TestBed.createComponent(ScrollToTopDocs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
