import { Routes } from '@angular/router';
import { CrearTarifasComponent } from './crear-tarifas/crear-tarifas.component';
import { MostrarTarifasComponent } from './mostrar-tarifas/mostrar-tarifas.component';

export const TarifasRoutes: Routes = [
    {
      path: '',
      children: [ 
        {
          path: 'tarifas',
          component: MostrarTarifasComponent
        },
        { 
          path: 'crear',
          component: CrearTarifasComponent 
        }
        ]
    }
];
