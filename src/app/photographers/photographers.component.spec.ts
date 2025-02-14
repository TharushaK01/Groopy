import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographersComponent } from './photographers.component';

describe('PhotographersComponent', () => {
  let component: PhotographersComponent;
  let fixture: ComponentFixture<PhotographersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotographersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotographersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
