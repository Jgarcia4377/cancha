import { Component, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import {Canchas} from '../../models/canchas';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {CanchasService} from '../../services/canchas.service';
import { R3ResolvedDependencyType } from '@angular/compiler/src/compiler_facade_interface';
// import initWizard = require('../../../../assets/js/init/initWizard.js');



declare var $:any;
@Component({
    moduleId: module.id,
    selector: 'mis-canchas-cmp',
    templateUrl: './misCanchas.component.html',
    providers: [CanchasService],
})


export class misCanchasComponent implements OnInit {

    test : Date = new Date();
    public title:String;
    public canchas: Canchas;
    public status:string;
    public establecimiento;
    isShow=false;
    public variable;
    public page;
    public next_page;
    public prev_page;
    public pages;
    public total;
   // public cancha: Canchas[];
    
    
    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _canchasService: CanchasService,
    ){ 
      this.establecimiento = JSON.parse(localStorage.getItem('establecimiento'))[0];
  
      this.title='Registra tu cancha',
      this.canchas = new Canchas('','',0,0,'',0,true,'','','','',this.establecimiento._id);
      //this.paises = new Pais('','','','','','','','','')

   }

   ngOnInit(){
     this.actualPage();
    // Init Tooltips
    // $('[rel="tooltip"]').tooltip();
    
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

  

    onSubmit(form){
      this._canchasService.registerCancha(this.canchas).subscribe(
        response=>{
          console.log(this.canchas);
          if(response.cancha && response.cancha._id){
            console.log(response.cancha);
            //console.log('token')
         // this.status ='error';
            form.reset();
          }
          else{
          //this.status='success';
          console.log(response.cancha);
    
         }
        },
        error=>{
          console.log(<any>error);
        }
      );
    }

    
}
