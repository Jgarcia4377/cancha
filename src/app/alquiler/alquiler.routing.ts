import { Routes } from '@angular/router';
import { CrearAlquilerComponent } from './crear-alquiler/crear-alquiler.component';

export const AlquilerRoutes: Routes = [
    {

      path: '',
      children: [ 
        {
        path: '',
        component: CrearAlquilerComponent
        },
        {
          path: 'crear',
          component: CrearAlquilerComponent
        }
        ]
    }
];
