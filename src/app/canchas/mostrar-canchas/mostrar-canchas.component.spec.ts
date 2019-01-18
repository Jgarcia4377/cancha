import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarCanchasComponent } from './mostrar-canchas.component';

describe('MostrarCanchasComponent', () => {
  let component: MostrarCanchasComponent;
  let fixture: ComponentFixture<MostrarCanchasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarCanchasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarCanchasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
