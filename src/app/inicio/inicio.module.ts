import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CanchasDisponiblesComponent } from './canchas-disponibles/canchas-disponibles.component';
import { InicioRoutes } from './inicio.routing';
import { MaterialModule } from "../material/material.module";
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { CanchasComponent } from './canchas/canchas.component';
import { ComponentesModule } from '../componentes/componentes.module';

@NgModule({
  declarations: [CanchasDisponiblesComponent, CanchasComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(InicioRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    DataTablesModule,
    ComponentesModule
    ]
})
export class InicioModule { }
