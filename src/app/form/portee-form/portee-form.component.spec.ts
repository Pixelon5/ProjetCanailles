import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorteeFormComponent } from './portee-form.component';

describe('PorteeFormComponent', () => {
  let component: PorteeFormComponent;
  let fixture: ComponentFixture<PorteeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorteeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorteeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
