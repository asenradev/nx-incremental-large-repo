import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib3component42Component } from './lib3childlib3component42.component';

describe('Lib3childlib3component42Component', () => {
  let component: Lib3childlib3component42Component;
  let fixture: ComponentFixture<Lib3childlib3component42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib3component42Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib3component42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
