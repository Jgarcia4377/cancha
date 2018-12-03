import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; 
import {Establecimiento} from '../models/establecimiento';
import {GLOBAL} from './global';


@Injectable()
export class EstablecimientoService{
    
    public url:string;

    constructor(public _http: HttpClient){
        this.url = GLOBAL.url;
    }

    registrarEstablecimiento(establecimiento: Establecimiento): Observable <any>{
        
        let params= JSON.stringify(establecimiento);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        
        return this._http.post(this.url+'Registrar-Establecimiento', params, {headers:headers});        
        //console.log(user_to_register);
        //console.log(this.url);
    }
    
}


