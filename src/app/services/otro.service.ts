import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable'; 
import {Pais} from '../models/pais';
import {GLOBAL} from './global';


@Injectable()
export class OtroService{
    
    public url:string;
    public paises: Array<Pais> = [];

    constructor(public _http: HttpClient){
        this.url = GLOBAL.url;
        
    }

    cargarPaises(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get<Array<Pais>>(this.url+'paises', {headers:headers});  
    }
    
}
