import { Component, OnInit, DoCheck, OnChanges, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Canchas } from '../../models/canchas';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CanchasService } from '../../services/canchas.service';
import { R3ResolvedDependencyType } from '@angular/compiler/src/compiler_facade_interface';
import { Tarifa } from '../../models/tarifa';
import { TarifaService } from '../../services/tarifa.service';
import { Establecimiento } from 'app/models/establecimiento';

declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-editar-cancha',
  templateUrl: './editar-cancha.component.html',
  //styleUrls: ['./editar-cancha.component.css'],
  providers: [CanchasService, TarifaService]
})
export class EditarCanchaComponent implements OnInit, DoCheck {
  test : Date = new Date();
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
  public cancha: Canchas[];
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
      this.newCancha = new Canchas('','',0,0,'',0,true,'','','','',this.establecimiento._id);
    this.tarifa = new Tarifa('','','',true,'',false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false);
   }

  ngOnInit() {
    this._tarifaService.mostrarMisTarifas().subscribe(
      response=>{
        this.tarifas = response.tarifas;
         console.log(this.tarifas)
      }
    )
    this.actualPage();

    var datatableInit = function() {
      var $table = $('#datatable-details-alquiler');
// format function for row details
var fnFormatDetails = function( datatable, tr ) {
 
var data = datatable.fnGetData( tr );

return [
// '<table>',
// '<tr class="">',
//   '<td><strong>Dirección: </strong></td>',
//               '<td>' + data[2]+'.</td>',
//               //'<td> ' + "Via Crucita - Diagonal al Comando Polcial "+'.</td>',
              
//           '</tr>',
//       '</div>',
].join('');
};

// insert the expand/collapse column
// var th = document.createElement( 'th' );
// var td = document.createElement( 'td' );
// td.innerHTML = '<i data-toggle class="fa fa-plus-square-o text-primary h5 m-none design" style="cursor: pointer;"></i>';
// td.className = "text-center";

// $table
// .find( 'thead tr' ).each(function() {
// this.insertBefore( th, this.childNodes[0] );
// });


// $table
// .find( 'tbody tr' ).each(function() {
// this.insertBefore(  td.cloneNode( true ), this.childNodes[0] );
// });

// initialize
var datatable = $table.dataTable({


aoColumnDefs: [{
bSortable: false,
aTargets: [ 0 ]
}],
"languaje":{
  "sProcessing":     "Procesando...",
  "sLengthMenu":     "Mostrar _MENU_ registros",
  "sZeroRecords":    "No se encontraron resultados",
  "sEmptyTable":     "Ningún dato disponible en esta tabla",
  "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
  "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
  "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
  "sInfoPostFix":    "",
  "sSearch":         "Buscar:",
  "sUrl":            "",
  "sInfoThousands":  ",",
  "sLoadingRecords": "Cargando...",
  "oPaginate": {
      "sFirst":    "Primero",
      "sLast":     "Último",
      "sNext":     "Siguiente",
      "sPrevious": "Anterior"
  },
  "oAria": {
      "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
      "sSortDescending": ": Activar para ordenar la columna de manera descendente"
  }
},
aaSorting: [
[1, 'asc']
]
});


};
$(function() {
datatableInit();
});

   
   
  }

  actualPage(){
    this._route.params.subscribe(params =>{
      let page = +params['page'];
      this.page = page;
      if(!page){
        page=1;
      }else{
        this.next_page = page+1;
        this.prev_page = page-1;

        if(this.prev_page <= 0){
          this.prev_page=1;
        }
      }
      //delvolve listado canchas
      this.getCanchas(page);
    });
  }

  
  getCanchas(page){
    this._canchasService.getCanchas(page).subscribe(
      response =>{
        if(!response.canchas){
          console.log(response.canchas)
        }else{
          console.log(response.canchas);
          this.total = response.total;
          this.canchas = response.canchas;
          this.pages = response.pages;
          if(page > this.pages){
            this._router.navigate(['/misCanchas']);
          }
        }
      },
      error=>{
        var errorMessage = <any>error;
        console.log(errorMessage);
        if(errorMessage !=null){
          console.log(errorMessage);
        }
      }
    );
  }


  ngDoCheck(){
    this.identity = this._canchasService.getIdentity();
  }

  onSubmit(editarCancha: NgForm){
    
    this._canchasService.registerCancha(this.newCancha).subscribe(
      response=>{
        console.log(this.newCancha);
        if(response.cancha && response.cancha._id){
          console.log(response.cancha);
          //localStorage.setItem('identity',JSON.stringify(this.newCancha));
          //console.log('token')
       // this.status ='error';
       editarCancha.reset();
          
        }
        else{
        //this.status='success';
        console.log(response.cancha);
        this.showNotification('top','center','Cancha Registrada Correctamente','success'); 
        location.reload();
        editarCancha.reset();
  
       }
      },
      error=>{
        console.log(<any>error);
      }
    );
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
