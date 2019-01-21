import { Component, OnInit, DoCheck ,OnChanges, AfterViewInit } from '@angular/core';
import { Canchas } from '../../models/canchas';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CanchasService } from '../../services/canchas.service';

@Component({
  selector: 'app-mostrar-canchas',
  templateUrl: './mostrar-canchas.component.html',
  //styleUrls: ['./mostrar-canchas.component.css'],
  providers: [CanchasService],
})
export class MostrarCanchasComponent implements OnInit, DoCheck {
  public identity;
  public title:String;
  public newCancha: Canchas;
  public canchas;
  public variable;
  public page;
  public next_page;
  public prev_page;
  public pages;
  public total;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _canchasService: CanchasService,
  ) {
    this.newCancha = new Canchas('','',0,0,'',0,true,'',[]);
   }

   ngDoCheck(){
    this.identity = this._canchasService.getIdentity();
  }

  ngOnInit(){
    this.actualPage(); 
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
            this._router.navigate(['/canchas']);
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
