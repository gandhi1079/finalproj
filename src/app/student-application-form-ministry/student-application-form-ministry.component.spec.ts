import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentApplicationFormMinistryComponent } from './student-application-form-ministry.component';

describe('StudentApplicationFormMinistryComponent', () => {
  let component: StudentApplicationFormMinistryComponent;
  let fixture: ComponentFixture<StudentApplicationFormMinistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentApplicationFormMinistryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentApplicationFormMinistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
