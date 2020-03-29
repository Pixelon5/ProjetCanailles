import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorteesComponent } from './portees.component';

describe('PorteesComponent', () => {
  let component: PorteesComponent;
  let fixture: ComponentFixture<PorteesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorteesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
