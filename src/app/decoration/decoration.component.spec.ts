import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorationComponent } from './decoration.component';

describe('DecorationComponent', () => {
  let component: DecorationComponent;
  let fixture: ComponentFixture<DecorationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DecorationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
