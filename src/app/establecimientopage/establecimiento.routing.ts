import { Routes } from '@angular/router';

import { EstablecimientoComponent } from './establecimiento.component';

export const UserRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: EstablecimientoComponent
    }]
}
];
