import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickARideComponentComponent } from './pick-a-ride-component.component';

describe('PickARideComponentComponent', () => {
  let component: PickARideComponentComponent;
  let fixture: ComponentFixture<PickARideComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickARideComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickARideComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
