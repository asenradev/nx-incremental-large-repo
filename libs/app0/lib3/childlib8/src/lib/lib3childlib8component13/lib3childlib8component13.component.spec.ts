import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib8component13Component } from './lib3childlib8component13.component';

describe('Lib3childlib8component13Component', () => {
  let component: Lib3childlib8component13Component;
  let fixture: ComponentFixture<Lib3childlib8component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib8component13Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib8component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
