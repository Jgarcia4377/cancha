import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TarifasFormComponent } from './tarifas-form/tarifas-form.component';
import { CrearTarifasComponent } from './crear-tarifas/crear-tarifas.component';
import { MostrarTarifasComponent } from './mostrar-tarifas/mostrar-tarifas.component';
import { TarifasRoutes } from './tarifas.routing';

@NgModule({
  declarations: [TarifasFormComponent, CrearTarifasComponent, MostrarTarifasComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(TarifasRoutes),
  ],
  exports: [TarifasFormComponent]
})
export class TarifasModule { }
