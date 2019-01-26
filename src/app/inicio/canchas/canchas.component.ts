import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';
import { Canchas } from '../../models/canchas';
import { CanchasService } from '../../services/canchas.service';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-canchas',
  templateUrl: './canchas.component.html',
  styleUrls: ['./canchas.component.css'],
  providers: [CanchasService],
})
export class CanchasComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  canchas: Canchas[] = [];
  // dtTrigger: Subject = new Subject();

  constructor(
  // private _http: Http,
  private _canchasService: CanchasService,
  ) { 

  }

  ngOnInit(){
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    }

    this._canchasService.getAllCanchas().subscribe(
      response =>{
        if(!response.canchas){
          console.log(response.canchas)
        }else{
          console.log(response.canchas);
          this.canchas = response.canchas;
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
  };

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    // this.dtTrigger.unsubscribe();
  }

  // private extractData(res: Response) {
  //   const body = res.json();
  //   return body.data || {};
  // }
}
