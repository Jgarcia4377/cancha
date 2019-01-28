import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectUbicacionComponent } from './select-ubicacion/select-ubicacion.component';

@NgModule({
  declarations: [SelectUbicacionComponent],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports:[SelectUbicacionComponent]
})
export class ComponentesModule { }
