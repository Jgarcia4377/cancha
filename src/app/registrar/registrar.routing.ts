import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { RegistrarcanchaComponent } from './registrarcancha/registrarcancha.component';
import { RegistrarusuarioComponent } from './registrarusuario/registrarusuario.component';

const registrarRoutes: Routes = [
    {
        path: 'registrar',
        children:[
            {path:'canchas',component:RegistrarcanchaComponent},
            {path:'usuarios', component: RegistrarusuarioComponent}
        ]
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(registrarRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class registrarRoutingModule{}