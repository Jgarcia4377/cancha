import { Routes } from '@angular/router';

import { CanchasDisponiblesComponent } from './canchas-disponibles/canchas-disponibles.component';


export const InicioRoutes: Routes = [

    {
        path: '',
        children: [ {
            path: '',
            component: CanchasDisponiblesComponent
        // },{
        //     path: 'register',
        //     component: RegisterComponent
        // },{
        //     path: 'pricing',
        //     component: PricingComponent
        // 
    }]
    }
];
