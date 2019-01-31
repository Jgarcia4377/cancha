import { Routes } from '@angular/router';

import { CanchasComponent } from './canchas/canchas.component';
import { InicioComponent } from './inicio.component';


export const InicioRoutes: Routes = [

    {
        path: '',
        children: [{
            path: '',
            component: CanchasComponent
        }]
    }
];
