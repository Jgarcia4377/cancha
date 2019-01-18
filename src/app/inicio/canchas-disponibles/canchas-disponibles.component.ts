import { Component, OnInit, DoCheck } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Canchas} from '../../models/canchas';
import {AlquilerService} from '../../services/alquiler.service';
import {CanchasService} from '../../services/canchas.service';


declare var $:any;
@Component({
  selector: 'app-canchas-disponibles',
  templateUrl: './canchas-disponibles.component.html',
  styleUrls: ['./canchas-disponibles.component.css'],
  providers: [AlquilerService, CanchasService]

})
export class CanchasDisponiblesComponent implements OnInit, DoCheck {

  test : Date = new Date();
  public identity;
  public canchas: Canchas;
  public cancha: Canchas[];
  public title:String;
  //public canchas: Canchas;
 // public alquiler;
  public status:string;
  public establecimiento;
  isShow=false;
  // public paises: Pais[];
  // public provincias: Provincia[];
  // public cantones;
  // public parroquias;
  public page;
public next_page;
public prev_page;
public pages;
public total;

 // public alquiler: Alquiler[];
  
  
constructor(
       private _route: ActivatedRoute,
       private _router: Router,
       private _alquilerService: AlquilerService,
       private _CanchasService: CanchasService,
      //  private _otroService: OtroService
   ){ 
    
    

  }

  ngOnInit() {

    this.actualPage()

    var datatableInit = function() {
      var $table = $('#datatable-details-alquiler');
// format function for row details
var fnFormatDetails = function( datatable, tr ) {
 
var data = datatable.fnGetData( tr );

return [
'<table>',
'<tr class="b-top-none">',
  '<td><strong>Dirección: </strong></td>',
              '<td>' + data[7]+'.</td>',
              // '<td> ' + "Via Crucita - Diagonal al Comando Polcial "+'.</td>',
              
          '</tr>',
      '</div>',
].join('');
};

// insert the expand/collapse column
var th = document.createElement( 'th' );
var td = document.createElement( 'td' );
td.innerHTML = '<i data-toggle class="fa fa-plus-square-o text-primary h5 m-none design" style="cursor: pointer;"></i>';
td.className = "text-center";

$table
.find( 'thead tr' ).each(function() {
this.insertBefore( th, this.childNodes[0] );
});


$table
.find( 'tbody tr' ).each(function() {
this.insertBefore(  td.cloneNode( true ), this.childNodes[0] );
});

// initialize
var datatable = $table.dataTable({
aoColumnDefs: [{
bSortable: false,
aTargets: [ 0 ]
}],
"language": {
  "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
},
aaSorting: [
[1, 'asc']
]
});

// add a listener
$table.on('click', 'i[data-toggle]', function() {
var $this = $(this),
tr = $(this).closest( 'tr' ).get(0);

if ( datatable.fnIsOpen(tr) ) {
$this.removeClass( 'fa-minus-square-o' ).addClass( 'fa-plus-square-o' );
datatable.fnClose( tr );
} else {
$this.removeClass( 'fa-plus-square-o' ).addClass( 'fa-minus-square-o' );
datatable.fnOpen( tr, fnFormatDetails( datatable, tr), 'details' );
}
});

};
$(function() {
datatableInit();
});
  }

  ngDoCheck(){

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
    this._CanchasService.MostrarCanchas(page).subscribe(
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


}
