import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib3component37Component } from './lib0childlib3component37.component';

describe('Lib0childlib3component37Component', () => {
  let component: Lib0childlib3component37Component;
  let fixture: ComponentFixture<Lib0childlib3component37Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib3component37Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib3component37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
