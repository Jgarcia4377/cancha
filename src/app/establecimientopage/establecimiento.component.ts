import { Component, OnInit, DoCheck } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Establecimiento} from '../models/establecimiento';
import {EstablecimientoService} from '../services/establecimiento.service';

declare var $:any;


@Component({
    moduleId: module.id,
    selector: 'establecimiento-cmp',
    templateUrl: 'establecimiento.component.html',
    providers:[EstablecimientoService]
    })

    export class EstablecimientoComponent implements OnInit, DoCheck{ 
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
          this.establecimiento = JSON.parse(localStorage.getItem('establecimiento'))[0];
          //this.establecimiento = this._EstablecimientoService.getIdentity();
          this.identity =  this.establecimiento;
          
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


        showNotification(from, align,message,typeError){
          var type = ['','info','success','warning','danger','rose','primary'];
  
          $.notify({
            // options
              icon: "notifications",
              title: "",
              message: message,
              url: '',
              target: '_blank'
            },{
             // settings
              element: 'body',
              position: null,
              type: typeError,
              allow_dismiss: true,
              newest_on_top: false,
              showProgressbar: false,
              placement: {
                from: from,
                align: align
              },
              offset: 20,
              spacing: 10,
              z_index: 1031,
              delay: 3000,
              timer: 1000,
              url_target: '_blank',
              mouse_over: null,
              animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
              },
              onShow: null,
              onShown: null,
              onClose: null,
              onClosed: null,
              icon_type: 'class',
              template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
                '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                '<span data-notify="icon"></span> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                  '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
              '</div>' 
            });
    }
  

        ngOnInit(){
          console.log('componente de establecimiento cargado');
          //this.identity = this._EstablecimientoService.getIdentity();
          //this.establecimiento = this._EstablecimientoService.getEstablecimiento(id);
          //this.loadPage()
        }

        loadPage(){
          this._route.params.subscribe(params=>{
            let id = params['id'];
            this.getEstablecimiento(id);
          })
        }

        getEstablecimiento(id){
          this._EstablecimientoService.getEstablecimiento(id).subscribe(
            response=>{
              if(response.establecimiento){
                console.log(response.establecimiento);
                this.establecimiento=response.establecimiento;
              }else{
                console.log(response.establecimiento);
              }
            },
            error=>{
              console.log(<any>error);
              this._router.navigate(['/establecimiento',this.identity._id]);
            }
          )

        }

        ngDoCheck(){
          //this.identity = this._canchasService.getIdentity();
          
          this.establecimiento = this._EstablecimientoService.getIdentity();
          //this.establecimientos = this._EstablecimientoService.getEstablecimiento(Establecimiento);
          
        }
      
        onSubmit(){
          this._EstablecimientoService.updateEstablecimiento(this.establecimiento).subscribe(
            response=>{
              if(!response.establecimiento){
                console.log(response.establecimiento)
              }else{
                console.log(response.establecimiento)
                localStorage.setItem('identity',JSON.stringify(this.establecimiento));
                this.identity = this.establecimiento;
                this.showNotification('top','center','Actualizado Correctamente.','success'); 
              }

            },
            error=>{
              var errorMessage= <any>error;
              console.log(errorMessage);
              if(errorMessage !=null){
                console.log(errorMessage);
              }
            }
          );

        }
        
      }
      
