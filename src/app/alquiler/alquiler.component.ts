import { Component, OnInit, DoCheck ,OnChanges, AfterViewInit } from '@angular/core';
//import {Alquiler} from '../../models/alquiler';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {AlquilerService} from '../services/alquiler.service';
import { R3ResolvedDependencyType } from '@angular/compiler/src/compiler_facade_interface';
// import initWizard = require('../../../../assets/js/init/initWizard.js');

declare var $:any;
@Component({
    moduleId: module.id,
    selector: 'alquiler',
    templateUrl: './alquiler.component.html',
    providers: [AlquilerService],
})


export class alquilerComponent implements OnInit , DoCheck{

    test : Date = new Date();
    public identity;
    public title:String;
    //public canchas: Canchas;
   // public alquiler;
    public status:string;
    public establecimiento;
    isShow=false;
    public variable;
    public page;
    public next_page;
    public prev_page;
    public pages;
    public total;
   // public alquiler: Alquiler[];
    
    
//     constructor(
//         private _route: ActivatedRoute,
//         private _router: Router,
//         private _alquilerService: AlquilerService,
//     ){ 
//       this.establecimiento = JSON.parse(localStorage.getItem('establecimiento'))[0];
  
//       this.title='Registra tu cancha',
//       this.alquiler = new alquiler('','',0,0,'',0,true,'','','','',this.establecimiento._id);
//       //this.paises = new Pais('','','','','','','','','')

//    }

   ngOnInit(){
    var datatableInit = function() {
		var $table = $('#datatable-details-alquiler');

		// format function for row details
		var fnFormatDetails = function( datatable, tr ) {
			var data = datatable.fnGetData( tr );

			return [
				'<table>',
					'<tr class="b-top-none">',
						'<td><strong>Nombres:</strong></td>',
                        //'<td>' + data[7]+'.</td>',
                        '<td>' + "Jorge "+'.</td>',
					'</tr>',
					
				'</div>'
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
