import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gc1Component } from './gc1.component';

describe('Gc1Component', () => {
  let component: Gc1Component;
  let fixture: ComponentFixture<Gc1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gc1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
