import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Room0Component } from './room0.component';

describe('Room0Component', () => {
  let component: Room0Component;
  let fixture: ComponentFixture<Room0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Room0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Room0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
