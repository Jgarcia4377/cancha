import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EstablecimientosComponent } from './establecimientos.component';


import { UserRoutes } from './establecimientos.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(UserRoutes),
        FormsModule
    ],
    declarations: [EstablecimientosComponent]
})

export class EstablecimientosModule {}
