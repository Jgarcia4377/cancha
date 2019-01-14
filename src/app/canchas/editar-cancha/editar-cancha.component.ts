import { Component, OnInit, DoCheck, OnChanges, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Canchas } from '../../models/canchas';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CanchasService } from '../../services/canchas.service';
import { R3ResolvedDependencyType } from '@angular/compiler/src/compiler_facade_interface';
import { Tarifa } from '../../models/tarifa';
import { TarifaService } from '../../services/tarifa.service';

declare var $: any;

@Component({
  selector: 'app-editar-cancha',
  templateUrl: './editar-cancha.component.html',
  styleUrls: ['./editar-cancha.component.css'],
  providers: [CanchasService, TarifaService]
})
export class EditarCanchaComponent implements OnInit, DoCheck {
  public identity;
  public title: String;
  public cancha: Canchas;
  public status: String;
  public establecimiento;
  public tarifa: Tarifa;
  public tarifas;

  constructor(
    private _canchasService: CanchasService,
    private _tarifaService: TarifaService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this.establecimiento = JSON.parse(localStorage.getItem('establecimiento'))[0];
    this.title='Registra tu cancha',
    this.cancha = new Canchas('','',0,0,'',0,true,'','','','','');
    this.tarifa = new Tarifa('','','',true,'',false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false);
   }

  ngOnInit() {
    this._tarifaService.mostrarMisTarifas().subscribe(
      response=>{
        this.tarifas = response.tarifas;
      }
    )
  }

  ngDoCheck(){
    this.identity = this._canchasService.getIdentity();
  }

  onSubmit(editarCancha: NgForm){
    // console.log(editarCancha.value);
    // console.log(editarCancha.valid);
  }

  onSubmitTarifa(registrarTarifa: NgForm){
    let tarifa = registrarTarifa.value;
    this.tarifa = new Tarifa('',tarifa.establecimientoId,tarifa.nombreTarifa,tarifa.estadoTarifa,tarifa.valorTarifa,tarifa.lunesTarifa,tarifa.martesTarifa,tarifa.miercolesTarifa,tarifa.juevesTarifa,tarifa.viernesTarifa,tarifa.sabadoTarifa,tarifa.domingoTarifa,false,false,false,false,false,false,tarifa.sieteTarifa,tarifa.ochoTarifa,tarifa.nueveTarifa,tarifa.diezTarifa,tarifa.onceTarifa,tarifa.doceTarifa,tarifa.treceTarifa,tarifa.catorceTarifa,tarifa.quinceTarifa,tarifa.diezyseisTarifa,tarifa.diezysieteTarifa,tarifa.diezyochoTarifa,tarifa.diezynueveTarifa,tarifa.veinteTarifa,tarifa.veinteyunoTarifa,tarifa.veinteydosTarifa,tarifa.veinteytresTarifa,tarifa.ceroTarifa);
    this._tarifaService.registrarTarifa(this.tarifa).subscribe(
      response=>{
        if(response.tarifaGuardada && response.tarifaGuardada._id){
          this.showNotification('top','right','Tarifa Registrada Correctamente.','success');  
          $('#cancelarModalTarifa').click();
        }
      }
    )
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


}
