import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CanchasDisponiblesComponent } from './canchas-disponibles/canchas-disponibles.component';
import { InicioRoutes } from './inicio.routing';

@NgModule({
  declarations: [CanchasDisponiblesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(InicioRoutes),
    FormsModule
  ]
})
export class InicioModule { }
