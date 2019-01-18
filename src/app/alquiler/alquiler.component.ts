import { Component, OnInit, DoCheck ,OnChanges, AfterViewInit } from '@angular/core';
import {Canchas} from '..//models/canchas';
//import {Alquiler} from '../../models/alquiler';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {AlquilerService} from '../services/alquiler.service';
import { R3ResolvedDependencyType } from '@angular/compiler/src/compiler_facade_interface';
import {OtroService} from '../services/otro.service';
import {Pais} from 'app/models/pais';
import {Provincia} from 'app/models/provincia';
import { Establecimiento } from 'app/models/establecimiento';
// import initWizard = require('../../../../assets/js/init/initWizard.js');

declare var $:any;
@Component({
    moduleId: module.id,
    selector: 'alquiler',
    templateUrl: './alquiler.component.html',
    providers: [AlquilerService,OtroService],
})


export class alquilerComponent implements OnInit , DoCheck{

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
    public paises: Pais[];
    public provincias: Provincia[];
    public cantones;
    public parroquias;
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
         private _otroService: OtroService
     ){ 
      
      

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
        this._alquilerService.getCanchas(page).subscribe(
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
    

   ngOnInit(){
       this.actualPage();
    console.log(this.cancha);

    this._otroService.cargarPaises().subscribe(
        response=>{
            //console.log(response.paises);
            this.paises = response.paises;
        },
        error=>{
          console.log(<any>error);
        },
        ()=>{
            console.log('finalizado');
        }
      );

      this._otroService.cargarProvincias().subscribe(
        response=>{
            const peopleArray = Object.keys(response.provincias['0']).map(i => response.provincias['0'][i])
            console.log(peopleArray);
            console.log(peopleArray[0]);
            this.provincias = peopleArray;
            // var idprovincia = peopleArray[12];
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




    var datatableInit = function() {
                var $table = $('#datatable-details-alquiler');
		// format function for row details
		var fnFormatDetails = function( datatable, tr ) {
           
			var data = datatable.fnGetData( tr );

			return [
				'<table>',
					'<tr class="b-top-none">',
						'<td><strong>Dirección: </strong></td>',
                        //'<td>' + data[7]+'.</td>',
                        '<td> ' + "Via Crucita - Diagonal al Comando Polcial "+'.</td>',
                        
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

    
}
