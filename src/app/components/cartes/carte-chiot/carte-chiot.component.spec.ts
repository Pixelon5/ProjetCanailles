import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteChiotComponent } from './carte-chiot.component';

describe('CarteChiotComponent', () => {
  let component: CarteChiotComponent;
  let fixture: ComponentFixture<CarteChiotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteChiotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteChiotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
