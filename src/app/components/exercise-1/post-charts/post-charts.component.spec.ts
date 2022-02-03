import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostChartsComponent } from './post-charts.component';

describe('PostGraphComponent', () => {
  let component: PostChartsComponent;
  let fixture: ComponentFixture<PostChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
