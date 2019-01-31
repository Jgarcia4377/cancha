import { Component, OnInit, DoCheck, OnChanges, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Canchas } from '../../models/canchas';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CanchasService } from '../../services/canchas.service';
import { R3ResolvedDependencyType } from '@angular/compiler/src/compiler_facade_interface';
import { Tarifa } from '../../models/tarifa';
import { TarifaService } from '../../services/tarifa.service';
import { Establecimiento } from 'app/models/establecimiento';
import { Notificacion } from '../../services/notificacion';

declare var $: any;

@Component({
  selector: 'app-editar-canchas',
  templateUrl: './editar-canchas.component.html',
  styleUrls: ['./editar-canchas.component.css'],
  providers: [CanchasService, TarifaService]
})
export class EditarCanchasComponent implements OnInit, DoCheck {
  public notifi: Notificacion;
  public identity;
  public title:String;
  public canchas: Canchas;
  public newCancha: Canchas;
  public status:string;
  public establecimiento:Establecimiento;
  isShow=false;
  public variable;
  public page;
  public next_page;
  public prev_page;
  public pages;
  public total;
  public cancha: Canchas;
  public tarifa: Tarifa;
  public tarifas;
  public selectTarifa;
  public misTarifas = [];
  public misTarifasIds = [];
  public tarifaAgregada;

  constructor(
    private _canchasService: CanchasService,
    private _tarifaService: TarifaService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { 
    this.establecimiento = JSON.parse(localStorage.getItem('establecimiento'))[0];
    this.title='Registra tu cancha',
    this.newCancha = new Canchas('','',0,0,'',0,true,'',[]);
    this.cancha = new Canchas('','',0,0,'',0,true,'',[]);
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

  agregarTarifa(){
    this.misTarifasIds.push(this.selectTarifa._id);
    console.log(this.misTarifasIds);
    this.misTarifas.push(this.selectTarifa);
    console.log(this.misTarifas);
    this.newCancha.misTarifas.push(this.selectTarifa._id);
  }

  onChange(newValue){
    this.selectTarifa = newValue;
  }

  onSubmit(editarCancha: NgForm){
    console.log(editarCancha.value);
    // console.log(editarCancha.valid);
    let cancha = editarCancha.value;
    this.cancha = new Canchas('',cancha.nombre,cancha.largo,cancha.ancho,cancha.cesped,cancha.numeroJugadores,cancha.estado,this.establecimiento._id,cancha.misTarifas);
    this._canchasService.registerCancha(this.cancha).subscribe(
      response=>{
        if(response.canchaGuardada && response.canchaGuardada._id){
          console.log('Cancha Registrada Correctamente');
          this.showNotification('top','right','Cancha Registrada Correctamente.','success'); 
          this._router.navigate(['/canchas/canchas']);
        }
      }
    )
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
}
