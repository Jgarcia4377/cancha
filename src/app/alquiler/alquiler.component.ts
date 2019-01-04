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

   }
   ngDoCheck(){

   }

    
}
