import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib6component36Component } from './lib3childlib6component36.component';

describe('Lib3childlib6component36Component', () => {
  let component: Lib3childlib6component36Component;
  let fixture: ComponentFixture<Lib3childlib6component36Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib6component36Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib6component36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
