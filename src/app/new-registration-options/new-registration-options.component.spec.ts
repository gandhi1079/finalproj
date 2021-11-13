import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRegistrationOptionsComponent } from './new-registration-options.component';

describe('NewRegistrationOptionsComponent', () => {
  let component: NewRegistrationOptionsComponent;
  let fixture: ComponentFixture<NewRegistrationOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRegistrationOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRegistrationOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
