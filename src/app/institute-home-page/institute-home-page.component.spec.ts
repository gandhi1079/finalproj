import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteHomePageComponent } from './institute-home-page.component';

describe('InstituteHomePageComponent', () => {
  let component: InstituteHomePageComponent;
  let fixture: ComponentFixture<InstituteHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituteHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
