import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectUbicacionComponent } from './select-ubicacion.component';

describe('SelectUbicacionComponent', () => {
  let component: SelectUbicacionComponent;
  let fixture: ComponentFixture<SelectUbicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectUbicacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectUbicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
