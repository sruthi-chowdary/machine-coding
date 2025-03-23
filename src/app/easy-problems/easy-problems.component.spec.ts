import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyProblemsComponent } from './easy-problems.component';

describe('EasyProblemsComponent', () => {
  let component: EasyProblemsComponent;
  let fixture: ComponentFixture<EasyProblemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EasyProblemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EasyProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
