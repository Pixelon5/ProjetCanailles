import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCartesGrilleComponent } from './liste-cartes-grille.component';

describe('ListeCartesGrilleComponent', () => {
  let component: ListeCartesGrilleComponent;
  let fixture: ComponentFixture<ListeCartesGrilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeCartesGrilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCartesGrilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
