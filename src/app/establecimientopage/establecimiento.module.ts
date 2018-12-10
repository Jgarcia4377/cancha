import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EstablecimientoComponent } from './establecimiento.component';
import { misCanchasComponent } from './misCanchas/misCanchas.component'
import { UserRoutes } from './establecimiento.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(UserRoutes),
        FormsModule
    ],
    declarations: [EstablecimientoComponent,
        misCanchasComponent]
})

export class EstablecimientoModule {}
