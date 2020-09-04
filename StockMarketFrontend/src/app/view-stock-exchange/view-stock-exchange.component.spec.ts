import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStockExchangeComponent } from './view-stock-exchange.component';

describe('ViewStockExchangeComponent', () => {
  let component: ViewStockExchangeComponent;
  let fixture: ComponentFixture<ViewStockExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewStockExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStockExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
