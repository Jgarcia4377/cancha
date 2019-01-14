import { Routes } from '@angular/router';

//componentes
import { EditarCanchaComponent } from './editar-cancha/editar-cancha.component';
import { MostrarCanchasComponent } from './mostrar-canchas/mostrar-canchas.component';

export const canchasRoutes: Routes = [
    {
        path: '',
        children:[
            {
                path:'',
                component:MostrarCanchasComponent
            },
            {
            path:'editar',
            component:EditarCanchaComponent
            }
        ],
    }
];
