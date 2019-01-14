import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EditarCanchaComponent } from './editar-cancha/editar-cancha.component';
import { canchasRoutes } from './canchas.routing';

@NgModule({
  declarations: [
    EditarCanchaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(canchasRoutes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CanchasModule {}
