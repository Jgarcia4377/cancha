import { Component, OnInit, DoCheck,ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Canchas } from '../../models/canchas';
import { AlquilerService } from '../../services/alquiler.service';
import { CanchasService } from '../../services/canchas.service';
import { MatTableDataSource,MatSort,MatPaginator } from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';



declare var $: any;
@Component({
  selector: 'app-canchas-disponibles',
  templateUrl: './canchas-disponibles.component.html',
  styleUrls: ['./canchas-disponibles.component.css'],
  providers: [AlquilerService, CanchasService],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],

})
export class CanchasDisponiblesComponent implements OnInit, DoCheck {

  test: Date = new Date();
  public identity;
  public canchas;
  public cancha: Canchas;
  public title: String;
  public status: string;
  public establecimiento;
  isShow = false;
  public page;
  public next_page;
  public prev_page;
  public pages;
  public total;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _alquilerService: AlquilerService,
    private _CanchasService: CanchasService,
    //  private _otroService: OtroService
  ) {
    //this.cancha = new Canchas('', '', 0, 0, '', 0, true, '', []);
  }

  listData: MatTableDataSource<any>;
displayedColumns: string[] = ['Establecimiento', 'Especificaciones', 'Cesped', 'NJugadores', 'Acción'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;



  ngOnInit() {

    this._CanchasService.MostrarCanchas().subscribe(
      list => {
       console.log(list);
        let array = list.map(item => {
          console.log(array);
         // let cancha = this._CanchasService.MostrarCanchas();
          return {
            $key: item.key,
           //  cancha,
            ...item.payload.val()
          };
        });
        
        this.listData = new MatTableDataSource(array);
         console.log( this.listData);
         this.listData.sort = this.sort;
         this.listData.paginator = this.paginator;
         this.listData.filterPredicate = (data, filter) => {
           return this.displayedColumns.some(ele => {
             return ele != 'Acción' && data[ele].toLowerCase().indexOf(filter) != -1;
           });
         };
      });



    // this.actualPage()

    // var datatableInit = function () {
    //   var $table = $('#datatable-details-alquiler');
    //   // format function for row details
    //   var fnFormatDetails = function (datatable, tr) {

    //     var data = datatable.fnGetData(tr);

    //     return [
    //       '<table>',
    //       '<tr class="b-top-none">',
    //       '<td><strong>Dirección: </strong></td>',
    //       '<td>' + data[5] + '.</td>',
    //       // '<td> ' + "Via Crucita - Diagonal al Comando Polcial "+'.</td>',

    //       '</tr>',
    //       '</div>',
    //     ].join('');
    //   };

    //   // insert the expand/collapse column
    //   var th = document.createElement('th');
    //   var td = document.createElement('td');
    //   td.innerHTML = '<i data-toggle class="fa fa-plus-square-o text-primary h5 m-none design" style="cursor: pointer;"></i>';
    //   td.className = "text-center";

    //   $table
    //     .find('thead tr').each(function () {
    //       this.insertBefore(th, this.childNodes[0]);
    //     });


    //   $table
    //     .find('tbody tr').each(function () {
    //       this.insertBefore(td.cloneNode(true), this.childNodes[0]);
    //     });

    //   // initialize
    //   var datatable = $table.dataTable({
    //     aoColumnDefs: [{
    //       bSortable: false,
    //       aTargets: [0]
    //     }],
    //     "language": {
    //       "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
    //     },
    //     aaSorting: [
    //       [1, 'asc']
    //     ]
    //   });

    //   // add a listener
    //   $table.on('click', 'i[data-toggle]', function () {
    //     var $this = $(this),
    //       tr = $(this).closest('tr').get(0);

    //     if (datatable.fnIsOpen(tr)) {
    //       $this.removeClass('fa-minus-square-o').addClass('fa-plus-square-o');
    //       datatable.fnClose(tr);
    //     } else {
    //       $this.removeClass('fa-plus-square-o').addClass('fa-minus-square-o');
    //       datatable.fnOpen(tr, fnFormatDetails(datatable, tr), 'details');
    //     }
    //   });

    // };
    // $(function () {
    //   datatableInit();
    // });
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
}

  ngDoCheck() {

  }

//   actualPage() {
//     this._route.params.subscribe(params => {
//       let page = +params['page'];
//       this.page = page;
//       if (!page) {
//         page = 1;
//       } else {
//         this.next_page = page + 1;
//         this.prev_page = page - 1;

//         if (this.prev_page <= 0) {
//           this.prev_page = 1;
//         }
//       }
//       //delvolve listado canchas
//       this.getCanchas(page);
//     });
//   }


//   getCanchas(page) {
//     this._CanchasService.MostrarCanchas(page).subscribe(
//       response => {
//         if (!response.canchas) {
//           console.log(response.canchas)
//         } else {
//           console.log(response);
//           this.total = response.total;
//           this.canchas = response.canchas;
//           //this.cancha = response.canchas;
//           this.pages = response.pages;
//           if (page > this.pages) {
//             this._router.navigate(['/misCanchas']);
//           }
//         }
//       },
//       error => {
//         var errorMessage = <any>error;
//         console.log(errorMessage);
//         if (errorMessage != null) {
//           console.log(errorMessage);
//         }
//       }
//     );
//   }


// 
}
