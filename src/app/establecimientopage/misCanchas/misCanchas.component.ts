import { Component, OnInit, DoCheck ,OnChanges, AfterViewInit } from '@angular/core';
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


export class misCanchasComponent implements OnInit , DoCheck{

    test : Date = new Date();
    public identity;
    public title:String;
    public canchas: Canchas;
    public newCancha: Canchas;
    public status:string;
    public establecimiento;
    isShow=false;
    public variable;
    public page;
    public next_page;
    public prev_page;
    public pages;
    public total;
    public cancha: Canchas[];
    
    
    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _canchasService: CanchasService,
    ){ 
      this.establecimiento = JSON.parse(localStorage.getItem('establecimiento'))[0];
  
      this.title='Registra tu cancha',
      this.newCancha = new Canchas('','',0,0,'',0,true,'','','','',this.establecimiento._id);
      //this.paises = new Pais('','','','','','','','','')

   }

   ngDoCheck(){
    this.identity = this._canchasService.getIdentity();
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


   ngOnInit(){
     this.actualPage();
    // Init Tooltips
    // $('[rel="tooltip"]').tooltip();
   // this.newCancha = this._canchasService.getIdentity();
   
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
          
      this._canchasService.registerCancha(this.newCancha).subscribe(
        response=>{
          console.log(this.newCancha);
          if(response.cancha && response.cancha._id){
            console.log(response.cancha);
            //localStorage.setItem('identity',JSON.stringify(this.newCancha));
            //console.log('token')
         // this.status ='error';
            form.reset();
            
          }
          else{
          //this.status='success';
          console.log(response.cancha);
          this.showNotification('top','center','Cancha Registrada Correctamente','success'); 
          form.reset();
    
         }
        },
        error=>{
          console.log(<any>error);
        }
      );
    }

    
}
