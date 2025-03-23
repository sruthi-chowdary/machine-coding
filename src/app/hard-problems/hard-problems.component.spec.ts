import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardProblemsComponent } from './hard-problems.component';

describe('HardProblemsComponent', () => {
  let component: HardProblemsComponent;
  let fixture: ComponentFixture<HardProblemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HardProblemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HardProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
