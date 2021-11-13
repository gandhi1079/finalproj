import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInstituteStatusComponent } from './check-institute-status.component';

describe('CheckInstituteStatusComponent', () => {
  let component: CheckInstituteStatusComponent;
  let fixture: ComponentFixture<CheckInstituteStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckInstituteStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInstituteStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
