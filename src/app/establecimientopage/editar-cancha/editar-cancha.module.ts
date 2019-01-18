import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EditarCanchaComponent } from '../editar-cancha/editar-cancha.component';
import { UserRoutes } from './editar-cancha.routing';

@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    FormsModule
   
  ],declarations: [
    EditarCanchaComponent,
    
   // MostrarCanchasComponent,
  ],
})
export class EditarCanchasModule {}
