import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckStudentStatusComponent } from './check-student-status.component';

describe('CheckStudentStatusComponent', () => {
  let component: CheckStudentStatusComponent;
  let fixture: ComponentFixture<CheckStudentStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckStudentStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckStudentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
