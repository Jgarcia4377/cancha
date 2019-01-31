import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EstablecimientoComponent } from './establecimiento.component';

import { UserRoutes } from './establecimiento.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(UserRoutes),
        FormsModule
    ],
    declarations: [EstablecimientoComponent]
})

export class EstablecimientoModule {}
