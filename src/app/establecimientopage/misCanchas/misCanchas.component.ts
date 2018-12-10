import { Component, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import {Canchas} from '../../models/canchas';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {CanchasService} from '../../services/canchas.service';
// import initWizard = require('../../../../assets/js/init/initWizard.js');

export interface TableData {
  headerRow: string[];
  dataRows: string[][];
}


declare var $:any;
@Component({
    moduleId: module.id,
    selector: 'mis-cancha-cmp',
    templateUrl: './misCanchas.component.html',
    providers: [CanchasService],
})


export class misCanchasComponent implements OnInit {

    test : Date = new Date();
    public title:String;
    public canchas: Canchas;
    public status:string;
    public tableData1: TableData;
    public idEstablecimiento;
    isShow=false;
    

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _canchasService: CanchasService,
    ){ 
      this.idEstablecimiento = localStorage.getItem('establecimiento._id');
      this.title='Registra tu cancha',
      this.canchas = new Canchas('','',0,0,'',0,true,'','','','',this.idEstablecimiento);
      //this.paises = new Pais('','','','','','','','','')
   }

   ngOnInit(){
    // Init Tooltips
    // $('[rel="tooltip"]').tooltip();
    this.tableData1 = {
        headerRow: [ '#', 'Nombre', 'Dimensiones', 'Cesped', '# Jugadores', 'Actions'],
        dataRows: [
            ['1', 'Cancha 1', '3,45 x 5,70', 'Artificial', '12','btn-simple'],
            ['2', 'Cancha 2', '4 x 9', 'Natural', '18','btn-simple'],
            ['3', 'Cancha 3', '7,67 x 5,70', 'Artificial', '10','btn-simple'],
            ]
     };
    }

  

    onSubmit(form){
      this._canchasService.registerCancha(this.canchas).subscribe(
        response=>{
          if(response.cancha && response.cancha._id){
            console.log(response.cancha);
            console.log('token')
         // this.status ='error';
            form.reset();
          }
          else{
          //this.status='success';
          console.log(response.cancha);
          form.reset();
         }
        },
        error=>{
          console.log(<any>error);
        }
      );
    }

    
}
