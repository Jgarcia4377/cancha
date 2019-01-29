import { Component, OnInit , DoCheck} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CanchasService } from '../services/canchas.service';
import { AlquilerService } from '../services/alquiler.service';
import { Canchas } from '../models/canchas';
import { Alquiler } from '../models/alquiler';

@Component({
  selector: 'app-establecimientos',
  templateUrl: './establecimientos.component.html',
  styleUrls: ['./establecimientos.component.css'],
  providers: [CanchasService, AlquilerService]
})
export class EstablecimientosComponent implements OnInit , DoCheck{

  public canchas;
  public NewAlquiler: Alquiler;
  public misAlquiler = [];
  public idEstablecimiento = '5c3ad0ba0a9c4b2e840f487f';
  public identity;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _canchasService: CanchasService,
    private _alquilerService: AlquilerService,
  ) { 

    // this.NewAlquiler = new Alquiler('',
    // '003',
    // '',
    // this.idEstablecimiento,
    // '',
    // this.identity._id,
    // this.NewAlquiler.fechaAlquiler,
    // false,
    // this.NewAlquiler.subtotal,
    // this.NewAlquiler.fecha,
    // this.NewAlquiler.una,
    // this.NewAlquiler.dos,
    // this.NewAlquiler.tres,
    // this.NewAlquiler.cuatro,
    // this.NewAlquiler.cinco,
    // this.NewAlquiler.seis,
    // this.NewAlquiler.siete,
    // this.NewAlquiler.ocho,
    // this.NewAlquiler.nueve,
    // this.NewAlquiler.diez,
    // this.NewAlquiler.oncee,
    // this.NewAlquiler.doce,
    // this.NewAlquiler.trece,
    // this.NewAlquiler.catorce,
    // this.NewAlquiler.quince,
    // this.NewAlquiler.diezyseis,
    // this.NewAlquiler.diezysiete,
    // this.NewAlquiler.diezyocho,
    // this.NewAlquiler.diezynueve,
    // this.NewAlquiler.veinte,
    // this.NewAlquiler.veinteyuno,
    // this.NewAlquiler.veinteydos,
    // this.NewAlquiler.veinteytres,
    // this.NewAlquiler.cero);
  }

  
  ngDoCheck(){
    this.identity = this._alquilerService.getIdentity();
  }

 

  ngOnInit() {
    // const idEstablecimiento = this._route.snapshot.params['idE'];
   
    this.getCanchaByEstablecimiento(this.idEstablecimiento);

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
