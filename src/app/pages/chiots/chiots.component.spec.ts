import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiotsComponent } from './chiots.component';

describe('ChiotsComponent', () => {
  let component: ChiotsComponent;
  let fixture: ComponentFixture<ChiotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
