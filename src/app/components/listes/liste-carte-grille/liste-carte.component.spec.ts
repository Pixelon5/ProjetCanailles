import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCarteComponent } from './liste-carte.component';

describe('ListeCarteComponent', () => {
  let component: ListeCarteComponent;
  let fixture: ComponentFixture<ListeCarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeCarteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
