import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {User} from '../models/user';
import {UsuarioService} from '../services/usuario.service';

declare var $:any;

@Component({
    moduleId:module.id,
    selector: 'login-cmp',
    templateUrl: './login.component.html',
    providers:[UsuarioService]
})

export class LoginComponent implements OnInit{
    test : Date = new Date();
    public title:String;
    public user: User;
    public status:string;
    public identity;
    public token;

    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _UsuarioService: UsuarioService
    ){ 
      
    this.title='Inicio de Sesión',
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
    showNotification(from, align){
        var type = ['','info','success','warning','danger','rose','primary'];

       // var color = Math.floor((Math.random() * 6) + 1);

    	$.notify({
        	icon: "notifications",
          message: "Te has logueado correctamente",
          type:'success',
          timer: 3000,
          placement: {
            from: from,
            align: align
          }
        },{
            icon: "notifications",
            message: "No has podido iniciar sesión, Intenta de nuevo por favor",
            type:'warning',
            timer: 3000,
            placement: {
                from: from,
                align: align
            }
            
        });
	}


    ngOnInit(){
        this.checkFullPageBackgroundImage();

        setTimeout(function(){
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700)
    }
    
    onSubmit(){
      this._UsuarioService.login(this.user).subscribe(
        response=>{
          this.identity = response.usuario;
          //console.log(response);
          if(response.usuario || this.identity.usuario._id){ 
            this.status='success';
            //PERSISTIR DATOS DEL USUARIO
            localStorage.setItem('identity',JSON.stringify(this.identity));
            //CONSEGUIR EL TOKEN
            this.gettoken(); 
          }else{
            //this.$notify='warning';
            this.status='error';
            console.log('error');
          }
          //console.log(response.user);
          //this.status='success';

        },
        error=>{
          var errorMessage=<any>error;
          console.log(errorMessage);
          if(errorMessage !=null){
            this.status='error';
          }
        }
      );
    }

    gettoken(){
      this._UsuarioService.login(this.user,'true').subscribe(
        response=>{
          this.token = response.token;
          if(this.token.length <= 0){
            this.status='error';
          }else{
            this.status='success';
            //PERSISTIR EL TOKEN DEL USUARIO
            localStorage.setItem('token',JSON.stringify(this.token));
            //CONSEGUIR LOS CONTADORES O ESTDISTICAS DEL USUARIO
            this._router.navigate(['/']);
          }
          this.status='success';

        },
        error=>{
          var errorMessage=<any>error;
          console.log(errorMessage);
          if(errorMessage !=null){
            this.status='error';
          }
        }
      ); 
    }
}
