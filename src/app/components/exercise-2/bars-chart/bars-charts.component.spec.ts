import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarsChartsComponent } from './bars-charts.component';

describe('BarsChartsComponent', () => {
  let component: BarsChartsComponent;
  let fixture: ComponentFixture<BarsChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarsChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarsChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
