import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Rutas
import { registrarRoutingModule } from './registrar.routing';
import { RegistrarcanchaComponent } from './registrarcancha/registrarcancha.component';
import { RegistrarusuarioComponent } from './registrarusuario/registrarusuario.component';

@NgModule({
  declarations: [RegistrarcanchaComponent, RegistrarusuarioComponent],
  imports: [
    CommonModule,
    FormsModule,
    registrarRoutingModule
  ],
  exports:[
    RegistrarcanchaComponent, 
    RegistrarusuarioComponent
  ],
  providers:[]
})
export class RegistrarModule { }
