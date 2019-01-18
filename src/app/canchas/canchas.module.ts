import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MostrarCanchasComponent } from './mostrar-canchas/mostrar-canchas.component';
import { EditarCanchasComponent } from './editar-canchas/editar-canchas.component';

import { CanchasRoutes } from './canchas.routing';

@NgModule({
  declarations: [MostrarCanchasComponent, EditarCanchasComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(CanchasRoutes),
  ]
})
export class CanchasModule { }
