import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarcanchaComponent } from './registrarcancha.component';

describe('RegistrarcanchaComponent', () => {
  let component: RegistrarcanchaComponent;
  let fixture: ComponentFixture<RegistrarcanchaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarcanchaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarcanchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
