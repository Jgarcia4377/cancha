import { Component, OnInit, DoCheck, OnChanges, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Canchas } from '../../models/canchas';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CanchasService } from '../../services/canchas.service';
import { R3ResolvedDependencyType } from '@angular/compiler/src/compiler_facade_interface';
import { Tarifa } from '../../models/tarifa';
import { TarifaService } from '../../services/tarifa.service';
import { Establecimiento } from 'app/models/establecimiento';

@Component({
  selector: 'app-editar-canchas',
  templateUrl: './editar-canchas.component.html',
  styleUrls: ['./editar-canchas.component.css'],
  providers: [CanchasService, TarifaService]
})
export class EditarCanchasComponent implements OnInit {
  public identity;
  public title:String;
  public canchas: Canchas;
  public newCancha: Canchas;
  public status:string;
  public establecimiento:Establecimiento;
  isShow=false;
  public variable;
  public page;
  public next_page;
  public prev_page;
  public pages;
  public total;
  public cancha: Canchas[];
  public tarifa: Tarifa;
  public tarifas;

  constructor(
    private _canchasService: CanchasService,
    private _tarifaService: TarifaService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { 
    this.establecimiento = JSON.parse(localStorage.getItem('establecimiento'))[0];
    this.title='Registra tu cancha',
    this.newCancha = new Canchas('','',0,0,'',0,true,'','','','',this.establecimiento._id);
    this.tarifa = new Tarifa('','','',true,'',false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false);
   }

  ngOnInit() {
    this._tarifaService.mostrarMisTarifas().subscribe(
      response=>{
        this.tarifas = response.tarifas;
         console.log(this.tarifas)
      }
    )
  }

}
