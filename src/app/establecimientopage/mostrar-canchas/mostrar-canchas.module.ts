import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { EditarCanchaComponent } from '../editar-cancha/editar-cancha.component';
//import { EstablecimientoComponent } from '../../establecimientopage/establecimiento.component';
import { UserRoutes } from './mostrar-canchas.routing';
import { MostrarCanchasComponent } from './mostrar-canchas.component';

@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    FormsModule,
    ReactiveFormsModule
  ],declarations: [
    // EditarCanchaComponent,
     MostrarCanchasComponent,
     
   ],
})
export class MostrarCanchasModule {}
