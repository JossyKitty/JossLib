import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionScrollerDocs } from './section-scroller-docs';

describe('SectionScrollerDocs', () => {
  let component: SectionScrollerDocs;
  let fixture: ComponentFixture<SectionScrollerDocs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionScrollerDocs],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionScrollerDocs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
