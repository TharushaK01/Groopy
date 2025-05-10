import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostdashboardComponent } from './costdashboard.component';

describe('CostdashboardComponent', () => {
  let component: CostdashboardComponent;
  let fixture: ComponentFixture<CostdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CostdashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
