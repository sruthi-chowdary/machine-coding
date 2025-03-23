import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumProblemsComponent } from './medium-problems.component';

describe('MediumProblemsComponent', () => {
  let component: MediumProblemsComponent;
  let fixture: ComponentFixture<MediumProblemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediumProblemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediumProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
