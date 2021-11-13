import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateNodalOfficerLoginComponent } from './state-nodal-officer-login.component';

describe('StateNodalOfficerLoginComponent', () => {
  let component: StateNodalOfficerLoginComponent;
  let fixture: ComponentFixture<StateNodalOfficerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateNodalOfficerLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateNodalOfficerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
