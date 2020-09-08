import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSpecificIpoComponent } from './edit-specific-ipo.component';

describe('EditSpecificIpoComponent', () => {
  let component: EditSpecificIpoComponent;
  let fixture: ComponentFixture<EditSpecificIpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSpecificIpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSpecificIpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
