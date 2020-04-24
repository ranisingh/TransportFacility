import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddANewRideComponentComponent } from './add-a-new-ride-component.component';

describe('AddANewRideComponentComponent', () => {
  let component: AddANewRideComponentComponent;
  let fixture: ComponentFixture<AddANewRideComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddANewRideComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddANewRideComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
