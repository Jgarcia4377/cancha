import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanchasDisponiblesComponent } from './canchas-disponibles.component';

describe('CanchasDisponiblesComponent', () => {
  let component: CanchasDisponiblesComponent;
  let fixture: ComponentFixture<CanchasDisponiblesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanchasDisponiblesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanchasDisponiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
