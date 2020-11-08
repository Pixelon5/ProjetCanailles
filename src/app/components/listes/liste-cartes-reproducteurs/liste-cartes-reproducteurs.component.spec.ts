import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCartesReproducteursComponent } from './liste-cartes-reproducteurs.component';

describe('ListeCartesGrilleComponent', () => {
  let component: ListeCartesReproducteursComponent;
  let fixture: ComponentFixture<ListeCartesReproducteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeCartesReproducteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCartesReproducteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
