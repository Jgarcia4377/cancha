import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CanchasService } from '../services/canchas.service';
import { Canchas } from '../models/canchas';

@Component({
  selector: 'app-establecimientos',
  templateUrl: './establecimientos.component.html',
  styleUrls: ['./establecimientos.component.css']
})
export class EstablecimientosComponent implements OnInit {

  public canchas;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _canchasService: CanchasService,
  ) { }

 

  ngOnInit() {
    // const idEstablecimiento = this._route.snapshot.params['idE'];
    const idEstablecimiento = '5c3bde54f2e5363988a9aedc';
    this.getCanchaByEstablecimiento(idEstablecimiento);
  }

  getCanchaByEstablecimiento(idEstablecimiento){
    this._canchasService.getAllCanchasByEstablecimiento(idEstablecimiento).subscribe(
      response =>{
        if(!response.canchas){
          console.log(response.canchas)
        }else{
          console.log(response.canchas);
          // this.total = response.total;
          this.canchas = response.canchas;
          // this.pages = response.pages;
          // if(page > this.pages){
          //   this._router.navigate(['/canchas']);
          // }
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
