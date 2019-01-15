import { Routes } from '@angular/router';

//componentes

import { MostrarCanchasComponent } from './mostrar-canchas.component';

export const UserRoutes: Routes = [
    {
      path: '',
      children: [ {
        path: '',
        component: MostrarCanchasComponent
    }]
}
];
