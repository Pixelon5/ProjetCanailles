import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartePorteeComponent } from './carte-portee.component';

describe('CartePorteeComponent', () => {
  let component: CartePorteeComponent;
  let fixture: ComponentFixture<CartePorteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartePorteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartePorteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
