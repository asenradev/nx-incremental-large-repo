import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib4component35Component } from './lib1childlib4component35.component';

describe('Lib1childlib4component35Component', () => {
  let component: Lib1childlib4component35Component;
  let fixture: ComponentFixture<Lib1childlib4component35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib4component35Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib4component35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
