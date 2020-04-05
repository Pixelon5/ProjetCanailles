import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCartesCarrousselComponent } from './liste-cartes-carroussel.component';

describe('ListeCartesCarrousselComponent', () => {
  let component: ListeCartesCarrousselComponent;
  let fixture: ComponentFixture<ListeCartesCarrousselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeCartesCarrousselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCartesCarrousselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
