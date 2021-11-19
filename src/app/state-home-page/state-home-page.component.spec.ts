import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateHomePageComponent } from './state-home-page.component';

describe('StateHomePageComponent', () => {
  let component: StateHomePageComponent;
  let fixture: ComponentFixture<StateHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
