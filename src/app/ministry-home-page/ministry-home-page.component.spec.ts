import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistryHomePageComponent } from './ministry-home-page.component';

describe('MinistryHomePageComponent', () => {
  let component: MinistryHomePageComponent;
  let fixture: ComponentFixture<MinistryHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinistryHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistryHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
