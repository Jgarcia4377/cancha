import { Component, OnInit, OnChanges, AfterViewInit, SimpleChange } from '@angular/core';
import { Establecimiento } from '../../models/establecimiento';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {EstablecimientoService} from '../../services/establecimiento.service';
import {OtroService} from '../../services/otro.service';
import {Provincia} from 'app/models/provincia';

declare var $: any;
interface FileReaderEventTarget extends EventTarget {
  result: string
}
interface FileReaderEvent extends Event {
  target: FileReaderEventTarget;
  getMessage(): string;
}

@Component({
  selector: 'app-registrarcancha',
  templateUrl: './registrarcancha.component.html',
  styleUrls: ['./registrarcancha.component.css'],
  providers: [EstablecimientoService,OtroService]
})
export class RegistrarcanchaComponent implements OnInit, OnChanges, AfterViewInit {
  public title: String;
  public establecimiento: Establecimiento;
  public status: string;
  public provincias: Provincia[];
  public cantones;
  public parroquias;
  private provincia;
  private canton;
  private parroquia;
  //@Input() selectProvincia: Provincia[];
  // readURL(input) {
  //   if (input.files && input.files[0]) {
  //     var reader = new FileReader();

  //     reader.onload = function (e: FileReaderEvent) {
  //       $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
  //     }
  //     reader.readAsDataURL(input.files[0]);
  //   }
  // }

  constructor(      
    private _route: ActivatedRoute,
    private _router: Router,
    private _establecimientoService: EstablecimientoService,
    private _otroService: OtroService
    ) {
      this.title='Registra tu cancha',
      this.establecimiento = new Establecimiento('','Ecuador',this.provincia,this.canton,this.parroquia,'','','','','','','','','','','','','','','','','','');
      //this.paises = new Pais('','','','','','','','','')
    }

    //notificaciones
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
    this._establecimientoService.registrarEstablecimiento(this.establecimiento).subscribe(
      response=>{
        if(response.establecimiento && response.establecimiento._id){
          //console.log(response.establecimiento);
       // this.status ='error';
       this.showNotification('top','center','Establecimiento Guardado Correctamente.','success'); 
          form.reset();
          this._router.navigate(['/establecimiento']);
        }
        else{
        //this.status='success';
        this.showNotification('top','center','Error al guardar los datos','danger'); 
        //console.log(response.establecimiento);
        form.reset();
       }
      },
      error=>{
        this.showNotification('top','center',error.error.message,'danger');
        console.log(<any>error);
      }
    );
  }

  ngOnInit() {
    const paises = {
      paises: this.provincias

    }

console.log(this.provincias);

    //cargar las provincias
    this._otroService.cargarProvincias().subscribe(
      response=>{
          const peopleArray = Object.keys(response.provincias['0']).map(i => response.provincias['0'][i])
          //console.log(peopleArray);
          //console.log(peopleArray[0]);
          this.provincias = peopleArray;
          // var idprovincia = peopleArray['12'];
          // const peopleArray2 = Object.keys(idprovincia).map(i =>idprovincia[i])
          // console.log(peopleArray2);
          // const peopleArray3 = Object.keys(peopleArray2['1']).map(i => peopleArray2['1'][i])
          // console.log(peopleArray3);
          // this.cantones = peopleArray3;
          // var idcanton = peopleArray3[2];
          // const parroquiass = Object.keys(idcanton).map(i => idcanton[i])
          // console.log(parroquiass);
          // const parroquiasss = Object.keys(parroquiass['1']).map(i => parroquiass['1'][i])
          // this.parroquias = parroquiasss;
          // console.log(parroquiasss);
          // this.parroquias = parroquiasss;
      },
      error=>{
        console.log(<any>error);
      },
      ()=>{
          console.log('finalizado');
      }
    );
    // Code for the Validator
    var $validator = $('.wizard-card form').validate({
      rules: {
        firstname: {
          required: true,
          minlength: 3
        },
        lastname: {
          required: true,
          minlength: 3
        },
        email: {
          required: true,
          minlength: 3,
        }
      },

      errorPlacement: function (error, element) {
        $(element).parent('div').addClass('has-error');
      }
    });

    // Wizard Initialization
    $('.wizard-card').bootstrapWizard({
      'tabClass': 'nav nav-pills',
      'nextSelector': '.btn-next',
      'previousSelector': '.btn-previous',

      onNext: function (tab, navigation, index) {
        var $valid = $('.wizard-card form').valid();
        if (!$valid) {
          $validator.focusInvalid();
          return false;
        }
      },

      onInit: function (tab, navigation, index) {

        //check number of tabs and fill the entire row
        var $total = navigation.find('li').length;
        var $width = 100 / $total;
        var $wizard = navigation.closest('.wizard-card');

        var $display_width = $(document).width();

        if ($display_width < 600 && $total > 3) {
          $width = 50;
        }

        navigation.find('li').css('width', $width + '%');
        var $first_li = navigation.find('li:first-child a').html();
        var $moving_div = $('<div class="moving-tab">' + $first_li + '</div>');
        $('.wizard-card .wizard-navigation').append($moving_div);

        //    this.refreshAnimation($wizard, index);
        var total_steps = $wizard.find('li').length;
        var move_distance = $wizard.width() / total_steps;
        var step_width = move_distance;
        move_distance *= index;

        var $current = index + 1;

        if ($current == 1) {
          move_distance -= 8;
        } else if ($current == total_steps) {
          move_distance += 8;
        }

        $wizard.find('.moving-tab').css('width', step_width);
        $('.moving-tab').css({
          'transform': 'translate3d(' + move_distance + 'px, 0, 0)',
          'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'

        });

        $('.moving-tab').css('transition', 'transform 0s');
      },

      onTabClick: function (tab, navigation, index) {

        var $valid = $('.wizard-card form').valid();

        if (!$valid) {
          return false;
        } else {
          return true;
        }
      },

      onTabShow: function (tab, navigation, index) {
        var $total = navigation.find('li').length;
        var $current = index + 1;

        var $wizard = navigation.closest('.wizard-card');

        // If it's the last tab then hide the last button and show the finish instead
        if ($current >= $total) {
          $($wizard).find('.btn-next').hide();
          $($wizard).find('.btn-finish').show();
        } else {
          $($wizard).find('.btn-next').show();
          $($wizard).find('.btn-finish').hide();
        }

        var button_text = navigation.find('li:nth-child(' + $current + ') a').html();

        setTimeout(function () {
          $('.moving-tab').text(button_text);
        }, 150);

        var checkbox = $('.footer-checkbox');

        if (index !== 0) {
          $(checkbox).css({
            'opacity': '0',
            'visibility': 'hidden',
            'position': 'absolute'
          });
        } else {
          $(checkbox).css({
            'opacity': '1',
            'visibility': 'visible'
          });
        }

        // this.refreshAnimation($wizard, index);
        var total_steps = $wizard.find('li').length;
        var move_distance = $wizard.width() / total_steps;
        var step_width = move_distance;
        move_distance *= index;

        var $current = index + 1;

        if ($current == 1) {
          move_distance -= 8;
        } else if ($current == total_steps) {
          move_distance += 8;
        }

        $wizard.find('.moving-tab').css('width', step_width);
        $('.moving-tab').css({
          'transform': 'translate3d(' + move_distance + 'px, 0, 0)',
          'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'

        });
      }
    });


    // Prepare the preview for profile picture
    $("#wizard-picture").change(function () {

      this.readURL(this);
    });

    $('[data-toggle="wizard-radio"]').click(function () {
      console.log('click');

      var wizard = $(this).closest('.wizard-card');
      wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
      $(this).addClass('active');
      $(wizard).find('[type="radio"]').removeAttr('checked');
      $(this).find('[type="radio"]').attr('checked', 'true');
    });

    $('[data-toggle="wizard-checkbox"]').click(function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).find('[type="checkbox"]').removeAttr('checked');
      } else {
        $(this).addClass('active');
        $(this).find('[type="checkbox"]').attr('checked', 'true');
      }
    });

    $('.set-full-height').css('height', 'auto');

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

  ngOnChanges(changes):void{
    var input = $(this);
    console.log(changes.init.currentValue);
    console.log(changes);
    console.log(input.val());
    var target: EventTarget;
    if (input.files && input.files[0]) {
      var reader: any = new FileReader();

      reader.onload = function (e) {
        $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
      }
      reader.readAsDataURL(input.files[0]);
    }
  }

  ngAfterViewInit() {
    $('.wizard-card').each(function () {

      var $wizard = $(this);
      var index = $wizard.bootstrapWizard('currentIndex');
      // this.refreshAnimation($wizard, index);

      var total_steps = $wizard.find('li').length;
      var move_distance = $wizard.width() / total_steps;
      var step_width = move_distance;
      move_distance *= index;

      var $current = index + 1;

      if ($current == 1) {
        move_distance -= 8;
      } else if ($current == total_steps) {
        move_distance += 8;
      }

      $wizard.find('.moving-tab').css('width', step_width);
      $('.moving-tab').css({
        'transform': 'translate3d(' + move_distance + 'px, 0, 0)',
        'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'

      });

      $('.moving-tab').css({
        'transition': 'transform 0s'
      });
    });
  }

}
