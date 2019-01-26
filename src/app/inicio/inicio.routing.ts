import { Routes } from '@angular/router';

import { CanchasDisponiblesComponent } from './canchas-disponibles/canchas-disponibles.component';
import { CanchasComponent } from './canchas/canchas.component';


export const InicioRoutes: Routes = [

    {
        path: '',
        children: [ {
            path: '',
            component: CanchasDisponiblesComponent
        },{
            path: 'inicio',
            component: CanchasComponent
        },
        { path: '', redirectTo: 'inicio', pathMatch: 'full' }]
    }
];
