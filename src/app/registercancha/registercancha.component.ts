import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {User} from '../models/user';
import {UsuarioService} from '../services/usuario.service';

declare var $:any;

@Component({
    moduleId:module.id,
    selector: 'registerCancha-cmp',
    templateUrl: './registercancha.component.html',
    providers: [UsuarioService],
})

export class RegisterCanchaComponent implements OnInit{
    test : Date = new Date();
    public title:String;
  public user: User;
  public status:string;
  
  
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _RegisterService: UsuarioService
  ){ 
  
  this.title='RegistraCancha',
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
        console.log('Componente de registra cancha cargado...');
        
        
    }
    onSubmit(form){
        this._RegisterService.register(this.user).subscribe(
          response=>{
            if(response.usuario && response.usuario._id){
              console.log(response.usuario);
           // this.status ='error';
              form.reset();
            }
            else{
            //this.status='success';
            console.log(response.usuario);
            form.reset();
           }
          },
          error=>{
            console.log(<any>error);
          }
        );
      }
}
