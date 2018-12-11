import { Routes } from '@angular/router';

import { EstablecimientoComponent } from './establecimiento.component';
import {misCanchasComponent} from './misCanchas/misCanchas.component';

export const UserRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: EstablecimientoComponent
    }]},{
        path: '',
        children: [ {
          path: 'misCanchas',
          component: misCanchasComponent
        }]
        },{
          path: '',
          children: [ {
            path: 'misCanchas/:page',
            component: misCanchasComponent
          }]
          }

];
