import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateNodalOfficerHomeComponent } from './state-nodal-officer-home.component';

describe('StateNodalOfficerHomeComponent', () => {
  let component: StateNodalOfficerHomeComponent;
  let fixture: ComponentFixture<StateNodalOfficerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateNodalOfficerHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateNodalOfficerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
