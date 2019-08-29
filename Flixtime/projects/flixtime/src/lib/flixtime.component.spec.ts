import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlixtimeComponent } from './flixtime.component';

describe('FlixtimeComponent', () => {
  let component: FlixtimeComponent;
  let fixture: ComponentFixture<FlixtimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlixtimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlixtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
