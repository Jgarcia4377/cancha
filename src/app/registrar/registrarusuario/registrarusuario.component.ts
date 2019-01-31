import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {User} from '../../models/user';
import {UsuarioService} from '../../services/usuario.service';

declare var $:any;

@Component({
  selector: 'app-registrarusuario',
  templateUrl: './registrarusuario.component.html',
  styleUrls: ['./registrarusuario.component.css'],
  providers: [UsuarioService]
})
export class RegistrarusuarioComponent implements OnInit {
  test : Date = new Date();
  public title:String;
  public user: User;
  public status:string;

constructor(
  private _route: ActivatedRoute,
  private _router: Router,
  private _UsuarioService: UsuarioService
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

  onSubmit(form){
      this._UsuarioService.register(this.user).subscribe(
        response=>{
          if(response.usuario && response.usuario._id){
            console.log(response.usuario);
            this.showNotification('top','center','Usuario registrado correctamente.','success'); 
         // this.status ='error';
            form.reset();
            this._router.navigateByUrl('/dashboard');
          }
          else{
          //this.status='success';
          console.log(response.usuario);
          //this.showNotification('top','center','No se pudo registrar el Usuario.','warning'); 
         // form.reset();
         }
        },
        error=>{
          var errorMessage=<any>error;
          this.showNotification('top','center',errorMessage.error.message,'danger');
         // if(errorMessage != null){
           // this.showNotification('top','center',errorMessage.error.message,'danger');
          //}
        }
      );
    }

}
