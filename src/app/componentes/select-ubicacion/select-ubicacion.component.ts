import { Component, OnInit, Output } from '@angular/core';
import { Provincia } from 'app/models/provincia';
import { OtroService } from '../../services/otro.service';
import { NgForm } from '@angular/forms';
declare var $: any;

@Output()

@Component({
  selector: 'app-select-ubicacion',
  templateUrl: './select-ubicacion.component.html',
  styleUrls: ['./select-ubicacion.component.css'],
  providers: [OtroService]
})
export class SelectUbicacionComponent implements OnInit {
  public provincias: Provincia[];
  public cantones = [];
  public parroquias = [];
  private provincia = '';
  private canton = '';
  private parroquia = '';
  

  constructor(private _otroService: OtroService) { 
    
  }

  ngOnInit() {
    //cargar las provincias
    this._otroService.cargarProvincias().subscribe(
      response=>{
          const peopleArray = Object.keys(response.provincias['0']).map(i => response.provincias['0'][i])
          this.provincias = peopleArray;
      },
      error=>{
        console.log(<any>error);
      },
      ()=>{
          console.log('finalizado');
      }
    );
  }

  onChange(newValue) {
    let cantones = Object.keys(newValue.cantones).map(i => newValue.cantones[i])
    console.log(newValue.provincia);
    this.cantones = cantones;
    // this.provincia = newValue.provincia;
  }

  onChangeCanton(newValue){
    let parroquias = Object.keys(newValue.parroquias).map(i => newValue.parroquias[i])
    console.log(newValue.canton);
    this.parroquias = parroquias;
    // this.canton = newValue.canton;
  }
  
  onChangeParroquia(newValue){
    console.log(newValue);
    // this.parroquia = newValue;
  }

  onSubmit(cambiarUbicacion: NgForm){
    this.limpiar();
    console.log(cambiarUbicacion.value);
    this.provincia = cambiarUbicacion.value.selectProvincia.provincia;
    this.canton = cambiarUbicacion.value.selectCanton.canton;
    this.parroquia = cambiarUbicacion.value.selectParroquia;
    console.log(this.provincia);
    console.log(this.canton);
    console.log(this.parroquia);
    $('#cancelarModalCambiarUbicacion').click();
    this.limpiar();
  }

  limpiar(){
    this.provincia = '';
    this.canton = '';
    this.parroquia = '';
    this.parroquias = [];
    this.cantones = [];

  }

}
