import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib6component28Component } from './lib4childlib6component28.component';

describe('Lib4childlib6component28Component', () => {
  let component: Lib4childlib6component28Component;
  let fixture: ComponentFixture<Lib4childlib6component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib6component28Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib6component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
