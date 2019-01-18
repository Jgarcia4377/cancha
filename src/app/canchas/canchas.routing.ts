import { Routes } from '@angular/router';
import { MostrarCanchasComponent } from './mostrar-canchas/mostrar-canchas.component';
import { EditarCanchasComponent } from './editar-canchas/editar-canchas.component';

export const CanchasRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: MostrarCanchasComponent
    },{
          path: 'misCanchas',
          component: MostrarCanchasComponent
        },{
         
            path: 'editar',
            component: EditarCanchasComponent
          
          }]
        }
];
