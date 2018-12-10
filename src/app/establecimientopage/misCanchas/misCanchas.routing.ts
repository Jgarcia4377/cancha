import { Routes } from '@angular/router';

import { misCanchasComponent } from './misCanchas.component';

export const UserRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: misCanchasComponent
    }]
}
];
