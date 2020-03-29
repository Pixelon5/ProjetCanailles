import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReproducteursComponent } from './reproducteurs.component';

describe('ReproducteursComponent', () => {
  let component: ReproducteursComponent;
  let fixture: ComponentFixture<ReproducteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReproducteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReproducteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
