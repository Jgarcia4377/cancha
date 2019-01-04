import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Establecimiento} from '../models/establecimiento';
import {EstablecimientoService} from '../services/establecimiento.service';


@Component({
    moduleId: module.id,
    selector: 'establecimiento-cmp',
    templateUrl: 'establecimiento.component.html',
    providers:[EstablecimientoService]
    })

    export class EstablecimientoComponent implements OnInit{ 
        title = 'ffm';
        public establecimiento: Establecimiento;
        public status: string;
        public identity;
      
        constructor(
          private _route: ActivatedRoute,
          private _router: Router,
          private _EstablecimientoService: EstablecimientoService
        )
        {
          this.establecimiento = new Establecimiento('',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '');
        }
        ngOnInit(){
          console.log('componente de establecimiento cargado');
          this.establecimiento = this._EstablecimientoService.getIdentity();
        }
      
        onSubmit(){
            this._EstablecimientoService.updateEstablecimiento(this.establecimiento).subscribe(
              response=>{
                if(!response.establecimiento){
                  console.log(response.establecimiento);
                   this.status ='error';
                   
                }
                else{
                this.status='success';
                localStorage.setItem('identity', JSON.stringify(this.establecimiento));
                this.identity = this.establecimiento;

                //SUBIDA DE IMAGEN DE USUARIO
               }
              },
              error=>{
                var errorMessage = <any>error;
                console.log(errorMessage);

                if(errorMessage !=null){
                  this.status='error';
                }
              }
            );
          }
        
      }
      
