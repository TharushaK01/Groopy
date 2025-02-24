import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirticketsComponent } from './airtickets.component';

describe('AirticketsComponent', () => {
  let component: AirticketsComponent;
  let fixture: ComponentFixture<AirticketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AirticketsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
