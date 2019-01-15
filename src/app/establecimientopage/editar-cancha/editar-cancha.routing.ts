import { Routes } from '@angular/router';

//componentes

import { EditarCanchaComponent } from './editar-cancha.component';

export const UserRoutes: Routes = [
    {
      path: '',
      children: [ {
        path: '',
        component: EditarCanchaComponent
    }]
}
];
