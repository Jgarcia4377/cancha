import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { alquilerComponent } from './alquiler.component';
import { AlquilerRoutes } from './alquiler.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AlquilerRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [alquilerComponent]
})

export class AlquilerModule {}