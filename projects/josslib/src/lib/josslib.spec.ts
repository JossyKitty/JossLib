import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Josslib } from './josslib';

describe('Josslib', () => {
  let component: Josslib;
  let fixture: ComponentFixture<Josslib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Josslib],
    }).compileComponents();

    fixture = TestBed.createComponent(Josslib);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
