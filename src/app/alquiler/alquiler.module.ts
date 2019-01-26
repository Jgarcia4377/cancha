import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearAlquilerComponent } from './crear-alquiler/crear-alquiler.component';
import { AlquilerRoutes } from './alquiler.routing';

@NgModule({
  declarations: [CrearAlquilerComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(AlquilerRoutes),
  ]
})
export class AlquilerModule { }
