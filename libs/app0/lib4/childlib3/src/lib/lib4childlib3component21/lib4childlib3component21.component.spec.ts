import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib3component21Component } from './lib4childlib3component21.component';

describe('Lib4childlib3component21Component', () => {
  let component: Lib4childlib3component21Component;
  let fixture: ComponentFixture<Lib4childlib3component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib3component21Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib3component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
