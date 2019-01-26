import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse,HttpHeaders } from '@angular/common/http';
import { Canchas } from '../../models/canchas';
import { CanchasService } from '../../services/canchas.service';

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
  providers: [CanchasService],
})
export class CanchasComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  canchas: Canchas[] = [];
  // dtTrigger: Subject = new Subject();

  constructor(
    private _http: HttpClient,
    private _canchasService: CanchasService,
  ) {}

  ngOnInit(){
    const that = this;
    let headers = new HttpHeaders().set('Content-Type','application/json');
    let pagina = 1;

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      autoWidth: true,
      ajax: (dataTablesParameters: any, callback) => {
        that._http
          .post<DataTablesResponse>(
            'http://localhost:3000/api/canchas/'+pagina,
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
      columns: [{ data: '#' }, { data: 'Establecimiento' }, { data: 'Especificaciones' }, { data: 'Ciudad' }, { data: 'Opciones' }]
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
  };


  // private extractData(res: Response) {
  //   const body = res.json();
  //   return body.data || {};
  // }
}
