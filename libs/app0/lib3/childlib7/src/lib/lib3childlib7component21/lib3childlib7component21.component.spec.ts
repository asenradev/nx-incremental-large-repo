import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib7component21Component } from './lib3childlib7component21.component';

describe('Lib3childlib7component21Component', () => {
  let component: Lib3childlib7component21Component;
  let fixture: ComponentFixture<Lib3childlib7component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib7component21Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib7component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
