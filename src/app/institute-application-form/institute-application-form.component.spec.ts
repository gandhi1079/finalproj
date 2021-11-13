import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteApplicationFormComponent } from './institute-application-form.component';

describe('InstituteApplicationFormComponent', () => {
  let component: InstituteApplicationFormComponent;
  let fixture: ComponentFixture<InstituteApplicationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituteApplicationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
