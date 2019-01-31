import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EstablecimientosComponent } from './establecimientos.component';


import { EstablecimientoRoutes } from './establecimientos.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(EstablecimientoRoutes),
        FormsModule
    ],
    declarations: [EstablecimientosComponent]
})

export class EstablecimientosModule {}
