import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCartesChiotsComponent } from './liste-cartes-chiots.component';

describe('ListeCartesChiotsComponent', () => {
  let component: ListeCartesChiotsComponent;
  let fixture: ComponentFixture<ListeCartesChiotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCartesChiotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCartesChiotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
