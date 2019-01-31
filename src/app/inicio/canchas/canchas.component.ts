import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse,HttpHeaders } from '@angular/common/http';
import { Canchas } from '../../models/canchas';
import { CanchasService } from '../../services/canchas.service';
import { EstablecimientoService } from '../../services/establecimiento.service';

class DataTablesResponse {
  canchas: any[];
  draw: number;
  recordsFiltered: number;
  total: number;
}

@Component({
  selector: 'app-canchas',
  templateUrl: './canchas.component.html',
  styleUrls: ['./canchas.component.css'],
  providers: [CanchasService,EstablecimientoService],
})
export class CanchasComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  canchas: Canchas[] = [];
  public provincia = 'Manabí';
  public canton;
  public parroquia;
  public establecimientos = [];
  public buscarPorEstablecimiento = false;
  public canchasDisponiblesEn = 'Portoviejo';
  // dtTrigger: Subject = new Subject();

  constructor(
    private _http: HttpClient,
    private _canchasService: CanchasService,
    private _establecimientoService: EstablecimientoService
  ) {}

  ngOnInit(){
    const that = this;
    let headers = new HttpHeaders().set('Content-Type','application/json');

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      autoWidth: true,
      ajax: (dataTablesParameters: any, callback) => {
        that._http
          .post<DataTablesResponse>(
            'http://localhost:3000/api/canchas/',
            dataTablesParameters, {}
          ).subscribe(resp => {
            that.canchas = resp.canchas;
            callback({
              recordsTotal: resp.total,
              recordsFiltered: resp.total,
              data: []
            });
          });
      },
      columns: [{ data: '#' }, { data: 'Establecimiento' }, { data: 'Especificaciones' }, { data: 'Ciudad' }]
    }
    // this._canchasService.getAllCanchas().subscribe(
    //   response =>{
    //     if(!response.canchas){
    //       console.log(response.canchas)
    //     }else{
    //       console.log(response.canchas);
    //       this.canchas = response.canchas;
    //       console.log(response.canchas.length);
    //       recordsTotal: response.canchas.length;
    //       recordsFiltered: '';
    //     }
    //   },
    //   error=>{
    //     var errorMessage = <any>error;
    //     console.log(errorMessage);
    //     if(errorMessage !=null){
    //       console.log(errorMessage);
    //     }
    //   }
    // );
    this._establecimientoService.getEstablecimientosByUbicacion(this.provincia,this.canton,this.parroquia).subscribe(
      response =>{
        if(!response.establecimientos){
          console.log(response.canchas)
        }else{
          this.establecimientos = response.establecimientos;
          console.log(this.establecimientos);
        }
      },
      error=>{
        var errorMessage = <any>error;
        console.log(errorMessage);
        if(errorMessage !=null){
          console.log(errorMessage);
        }
      }
    )
  };


  // private extractData(res: Response) {
  //   const body = res.json();
  //   return body.data || {};
  // }
}
