import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTarifasComponent } from './crear-tarifas.component';

describe('CrearTarifasComponent', () => {
  let component: CrearTarifasComponent;
  let fixture: ComponentFixture<CrearTarifasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearTarifasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTarifasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
