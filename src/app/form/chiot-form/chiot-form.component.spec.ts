import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiotFormComponent } from './chiot-form.component';

describe('ChiotFormComponent', () => {
  let component: ChiotFormComponent;
  let fixture: ComponentFixture<ChiotFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiotFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiotFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
