import { Routes } from '@angular/router';

//componentes
import { EditarCanchaComponent } from './editar-cancha/editar-cancha.component';

export const canchasRoutes: Routes = [
    {
        path: '',
        children:[{
            path:'editar',
            component:EditarCanchaComponent
        }]
    }
];
