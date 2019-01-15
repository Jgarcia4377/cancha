import { Routes } from '@angular/router';

import { EstablecimientoComponent } from './establecimiento.component';

import {MostrarCanchasComponent} from './mostrar-canchas/mostrar-canchas.component';
import {EditarCanchaComponent} from './editar-cancha/editar-cancha.component';

export const UserRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: EstablecimientoComponent
    },{
       
          path: 'misCanchas',
          component: EditarCanchaComponent
        
        },{
         
            path: 'editarCancha',
            component: MostrarCanchasComponent
          
          }]
        }
];
