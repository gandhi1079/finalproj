import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentApplicationFormStateComponent } from './student-application-form-state.component';

describe('StudentApplicationFormStateComponent', () => {
  let component: StudentApplicationFormStateComponent;
  let fixture: ComponentFixture<StudentApplicationFormStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentApplicationFormStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentApplicationFormStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
