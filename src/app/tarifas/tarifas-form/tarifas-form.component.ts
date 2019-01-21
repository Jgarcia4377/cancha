import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tarifa } from '../../models/tarifa';
import { TarifaService } from '../../services/tarifa.service';
import { Notificacion } from '../../services/notificacion';
import { Establecimiento } from 'app/models/establecimiento';

declare var $: any;

@Component({
  selector: 'app-tarifas-form',
  templateUrl: './tarifas-form.component.html',
  styleUrls: ['./tarifas-form.component.css'],
  providers: [TarifaService]
})
export class TarifasFormComponent implements OnInit {
  
  public tarifa: Tarifa;
  public notifi: Notificacion;
  public establecimiento:Establecimiento;
  
  constructor(
    private _tarifaService: TarifaService,
  ) {    this.establecimiento = JSON.parse(localStorage.getItem('establecimiento'))[0];
  this.tarifa = new Tarifa('','','',true,'',false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false); }

  ngOnInit() {
  }

  onSubmit(event: Event){
    event.preventDefault();
    console.log("sent pors request");
  }

  onSubmitTarifa(registrarTarifa: NgForm){
    let tarifa = registrarTarifa.value;
    this.tarifa = new Tarifa('',tarifa.establecimientoId,tarifa.nombreTarifa,tarifa.estadoTarifa,tarifa.valorTarifa,tarifa.lunesTarifa,tarifa.martesTarifa,tarifa.miercolesTarifa,tarifa.juevesTarifa,tarifa.viernesTarifa,tarifa.sabadoTarifa,tarifa.domingoTarifa,false,false,false,false,false,false,tarifa.sieteTarifa,tarifa.ochoTarifa,tarifa.nueveTarifa,tarifa.diezTarifa,tarifa.onceTarifa,tarifa.doceTarifa,tarifa.treceTarifa,tarifa.catorceTarifa,tarifa.quinceTarifa,tarifa.diezyseisTarifa,tarifa.diezysieteTarifa,tarifa.diezyochoTarifa,tarifa.diezynueveTarifa,tarifa.veinteTarifa,tarifa.veinteyunoTarifa,tarifa.veinteydosTarifa,tarifa.veinteytresTarifa,tarifa.ceroTarifa);
    this._tarifaService.registrarTarifa(this.tarifa).subscribe(
      response=>{
        if(response.tarifaGuardada && response.tarifaGuardada._id){
          this.notifi.showNotification('top','right','Tarifa Registrada Correctamente.','success');  
          $('#cancelarModalTarifa').click();
        }
      }
    )
  }

}
