import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteReproducteurComponent } from './carte-reproducteur.component';

describe('CarteReproducteurComponent', () => {
  let component: CarteReproducteurComponent;
  let fixture: ComponentFixture<CarteReproducteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteReproducteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteReproducteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
