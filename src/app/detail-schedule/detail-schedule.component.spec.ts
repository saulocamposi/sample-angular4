import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsScheduleComponent } from './details-schedule.component';

describe('DetailsScheduleComponent', () => {
  let component: DetailsScheduleComponent;
  let fixture: ComponentFixture<DetailsScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
