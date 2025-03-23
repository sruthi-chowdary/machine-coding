import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineCodingComponent } from './machine-coding.component';

describe('MachineCodingComponent', () => {
  let component: MachineCodingComponent;
  let fixture: ComponentFixture<MachineCodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineCodingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MachineCodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
