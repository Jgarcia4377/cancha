import { Component, OnInit, DoCheck, OnChanges, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Canchas } from '../../models/canchas';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CanchasService } from '../../services/canchas.service';
import { R3ResolvedDependencyType } from '@angular/compiler/src/compiler_facade_interface';
import { Tarifa } from '../../models/tarifa';

@Component({
  selector: 'app-editar-cancha',
  templateUrl: './editar-cancha.component.html',
  styleUrls: ['./editar-cancha.component.css'],
  providers: [CanchasService]
})
export class EditarCanchaComponent implements OnInit, DoCheck {
  public identity;
  public title: String;
  public cancha: Canchas;
  public status: String;
  public establecimiento;
  public tarifa: Tarifa;

  constructor(
    private _canchasService: CanchasService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this.establecimiento = JSON.parse(localStorage.getItem('establecimiento'))[0];
    this.title='Registra tu cancha',
      this.cancha = new Canchas('','',0,0,'',0,true,'','','','',this.establecimiento._id);
   }

  ngOnInit() {
  }

  ngDoCheck(){
    this.identity = this._canchasService.getIdentity();
  }

  onSubmit(editarCancha: NgForm){
    console.log(editarCancha.value);
    console.log(editarCancha.valid);
  }


}
