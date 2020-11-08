import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCartesPorteesComponent } from './liste-cartes-portees.component';

describe('ListeCartesporteesComponent', () => {
  let component: ListeCartesPorteesComponent;
  let fixture: ComponentFixture<ListeCartesPorteesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeCartesPorteesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCartesPorteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
