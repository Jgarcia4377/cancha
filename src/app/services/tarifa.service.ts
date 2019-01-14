import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable'; 
import {Tarifa} from '../models/tarifa';
import {GLOBAL} from './global';
import { Tokens } from './tokens';

@Injectable()
export class TarifaService{
    public url:String;
    public identity;
 
    constructor(public _http: HttpClient){
        this.url = GLOBAL.url;
    }

    registrarTarifa(tarifa: Tarifa): Observable <any>{
        let token = new Tokens().getToken();
        let params = JSON.stringify(tarifa);
        let headers = new HttpHeaders().set('Content-Type','application/json')
                                       .set('Authorization', token);
        return this._http.post(this.url+'registrar-tarifa',params,{headers:headers});
    }

    mostrarMisTarifas(page=null): Observable <any>{
        let token = new Tokens().getToken();
        let headers = new HttpHeaders().set('Content-Type','application/json') 
                                       .set('Authorization', token);
        return this._http.get(this.url+'mis-tarifas/'+page, {headers:headers});        
    }
}
