import { Routes } from '@angular/router';

import { alquilerComponent } from './alquiler.component';

export const AlquilerRoutes: Routes = [
    {
        path: '',
        children:[
            {
                path:'',
                component:alquilerComponent
            },

        ],
}
];
