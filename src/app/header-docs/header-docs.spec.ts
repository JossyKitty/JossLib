import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDocs } from './header-docs';

describe('HeaderDocs', () => {
  let component: HeaderDocs;
  let fixture: ComponentFixture<HeaderDocs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderDocs],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderDocs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
