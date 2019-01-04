import { Component, OnInit,DoCheck } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {User} from '../models/user';
import {UsuarioService} from '../services/usuario.service';

declare var $:any;

@Component({
    moduleId:module.id,
    selector: 'login-cmp',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers:[UsuarioService]
})


export class LoginComponent implements OnInit, DoCheck{
    test : Date = new Date();
    public title:String;
    public user: User;
    public status:string;
    public identity;
    public establecimiento;
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
          console.log(response);
          if(response.usuario || this.identity.usuario._id){
            if(response.establecimiento){
              this.establecimiento = response.establecimiento;
              localStorage.setItem('establecimiento',JSON.stringify(this.establecimiento));
            } 
            //PERSISTIR DATOS DEL USUARIO
            localStorage.setItem('identity',JSON.stringify(this.identity));
            //CONSEGUIR EL TOKEN
            this.gettoken();
            this.status='success';
            this.showNotification('top','center','Iniciando sesión.','success'); 
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
          this.showNotification('top','center',errorMessage.error.message,'danger');
          if(errorMessage != null){
            this.status='error';
          }
        }
      );
    }

    ngDoCheck(){
      this.identity = this._UsuarioService.getIdentity();
    }

    gettoken(){
      this._UsuarioService.login(this.user,'true').subscribe(
        response=>{
          this.token = response.token;
          if(this.token.length <= 0){
            
            this.status='error';
            this._router.navigate(['/']);
          }else{
            this.status='success';
            //PERSISTIR EL TOKEN DEL USUARIO
            localStorage.setItem('token',JSON.stringify(this.token));
            //CONSEGUIR LOS CONTADORES O ESTDISTICAS DEL USUARIO
            this._router.navigate(['/dashboard']);
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
