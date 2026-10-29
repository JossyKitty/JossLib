import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsDocs } from './section-scroller-docs';

describe('TabsDocs', () => {
  let component: TabsDocs;
  let fixture: ComponentFixture<TabsDocs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsDocs],
    }).compileComponents();

    fixture = TestBed.createComponent(TabsDocs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
