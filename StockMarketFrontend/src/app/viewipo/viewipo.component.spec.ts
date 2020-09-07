import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewipoComponent } from './viewipo.component';

describe('ViewipoComponent', () => {
  let component: ViewipoComponent;
  let fixture: ComponentFixture<ViewipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
