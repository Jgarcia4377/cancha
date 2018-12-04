import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {User} from '../models/user';
import {RegisterService} from '../services/register.service';

declare var $:any;

@Component({
    moduleId:module.id,
    selector: 'register-cmp',
    templateUrl: './register.component.html',
    providers: [RegisterService],
})

export class RegisterComponent implements OnInit{
    test : Date = new Date();
    public title:String;
  public user: User;
  public status:string;
  
  
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _RegisterService: RegisterService
  ){ 
  
  this.title='Registrate',
  this.user = new User('',
  '',
  '',
  '',
  '',
  '',
  '',
  'UsuarioJugador',
  '',
  '');
  }

    checkFullPageBackgroundImage(){
        var $page = $('.full-page');
        var image_src = $page.data('image');

        if(image_src !== undefined){
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
            $page.append(image_container);
        }
    };
    ngOnInit(){
        this.checkFullPageBackgroundImage();
        console.log('Componente de registrate cargado...');
        
        $('.datetimepicker').datetimepicker({
          icons: {
              time: "fa fa-clock-o",
              date: "fa fa-calendar",
              up: "fa fa-chevron-up",
              down: "fa fa-chevron-down",
              previous: 'fa fa-chevron-left',
              next: 'fa fa-chevron-right',
              today: 'fa fa-screenshot',
              clear: 'fa fa-trash',
              close: 'fa fa-remove'
          }
       });

       $('.datepicker').datetimepicker({
          format: 'MM/DD/YYYY',
          icons: {
              time: "fa fa-clock-o",
              date: "fa fa-calendar",
              up: "fa fa-chevron-up",
              down: "fa fa-chevron-down",
              previous: 'fa fa-chevron-left',
              next: 'fa fa-chevron-right',
              today: 'fa fa-screenshot',
              clear: 'fa fa-trash',
              close: 'fa fa-remove',
              inline: true
          }
       });

       $('.timepicker').datetimepicker({
//          format: 'H:mm',    // use this format if you want the 24hours timepicker
          format: 'h:mm A',    //use this format if you want the 12hours timpiecker with AM/PM toggle
          icons: {
              time: "fa fa-clock-o",
              date: "fa fa-calendar",
              up: "fa fa-chevron-up",
              down: "fa fa-chevron-down",
              previous: 'fa fa-chevron-left',
              next: 'fa fa-chevron-right',
              today: 'fa fa-screenshot',
              clear: 'fa fa-trash',
              close: 'fa fa-remove',
              inline: true

          }
       });
    }
    onSubmit(form){
        this._RegisterService.register(this.user).subscribe(
          response=>{
            if(response.user && response.user._id){
              console.log(response.user);
           // this.status ='error';
              form.reset();
            }
            else{
            //this.status='success';
            console.log(response.user);
            form.reset();
           }
          },
          error=>{
            console.log(<any>error);
          }
        );
      }
}
