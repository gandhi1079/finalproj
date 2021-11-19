import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteApplicationFormMinistryComponent } from './institute-application-form-ministry.component';

describe('InstituteApplicationFormMinistryComponent', () => {
  let component: InstituteApplicationFormMinistryComponent;
  let fixture: ComponentFixture<InstituteApplicationFormMinistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituteApplicationFormMinistryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteApplicationFormMinistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
