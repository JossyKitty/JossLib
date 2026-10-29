import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionScroller } from './section-scroller';

describe('SectionScroller', () => {
  let component: SectionScroller;
  let fixture: ComponentFixture<SectionScroller>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionScroller],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionScroller);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
