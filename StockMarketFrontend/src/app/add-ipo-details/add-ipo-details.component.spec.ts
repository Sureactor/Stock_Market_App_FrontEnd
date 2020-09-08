import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIpoDetailsComponent } from './add-ipo-details.component';

describe('AddIpoDetailsComponent', () => {
  let component: AddIpoDetailsComponent;
  let fixture: ComponentFixture<AddIpoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIpoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIpoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
