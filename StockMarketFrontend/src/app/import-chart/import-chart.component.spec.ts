import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportChartComponent } from './import-chart.component';

describe('ImportChartComponent', () => {
  let component: ImportChartComponent;
  let fixture: ComponentFixture<ImportChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
