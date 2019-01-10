import { Component, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { Establecimiento } from '../../models/establecimiento';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {OtroService} from '../../services/otro.service';
import {Provincia} from 'app/models/provincia';

@Component({
  selector: 'app-registrarusuario',
  templateUrl: './registrarusuario.component.html',
  styleUrls: ['./registrarusuario.component.css'],
  providers: [OtroService]
})
export class RegistrarusuarioComponent implements OnInit, OnChanges {
  public provincias: Provincia[];
  public valorDeProvincia;
  constructor(private _otroService: OtroService) { }

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

  ngOnChanges(changes):void{
    console.log(changes.init.currentValue);
    console.log(changes);
  }

}
