import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarTarifasComponent } from './mostrar-tarifas.component';

describe('MostrarTarifasComponent', () => {
  let component: MostrarTarifasComponent;
  let fixture: ComponentFixture<MostrarTarifasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarTarifasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarTarifasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
