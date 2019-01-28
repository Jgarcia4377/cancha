import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; 
import {Establecimiento} from '../models/establecimiento';
import {GLOBAL} from './global';


@Injectable()
export class EstablecimientoService{
    
    public url:string;
    public token;
    public identity;
    public establecimiento;

    constructor(public _http: HttpClient){
        this.url = GLOBAL.url;
    }

    getIdentity(){
        let identity = JSON.parse(localStorage.getItem('identity'));
        if(identity != "undefined"){
            this.identity = identity;
        }else{
            this.identity = null;
        }
        return this.identity;
    }
    getEstable(){
        let establecimiento = JSON.parse(localStorage.getItem('establecimiento'));
        if(establecimiento != "undefined"){
            this.establecimiento = establecimiento;
        }else{
            this.establecimiento = null;
        }
        return this.establecimiento;
    }
    getToken(){
        let token = JSON.parse(localStorage.getItem('token'));
        if(token != "undefined"){
            this.token = token;
        }else{
            this.token = null;
        }
        return this.token;
    }

    registrarEstablecimiento(establecimiento: Establecimiento): Observable <any>{
        
        let params= JSON.stringify(establecimiento);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        
        return this._http.post(this.url+'registrar-establecimiento', params, {headers:headers});        
        //console.log(user_to_register);
        //console.log(this.url);
    }

    updateEstablecimiento(establecimiento: Establecimiento): Observable <any>{
        
        let params= JSON.stringify(establecimiento);
        let headers = new HttpHeaders().set('Content-Type','application/json')
                                       .set('Authorization', this.getToken());
                                      // .set('Authorization', this.getEstable());
        
        return this._http.put(this.url+'actualizar-establecimiento/'+establecimiento._id, params, {headers:headers});        
        //console.log(user_to_register);
        //console.log(this.url);
    }

    getEstablecimiento(id): Observable <any>{
        let headers = new HttpHeaders().set('Content-Type','application/json') 
                                       .set('Authorization', this.getToken());
                                       
        return this._http.get(this.url+'establecimiento/'+id, {headers:headers});        
    }

    getEstablecimientos(pagina): Observable <any>{
        let headers = new HttpHeaders().set('Content-Type','application/json')                        
        return this._http.get(this.url+'establecimientos/'+pagina, {headers:headers});        
    }

    getEstablecimientosByUbicacion(provincia,canton,parroquia): Observable <any>{
        let params = JSON.stringify({'provincia':provincia,'canton':canton,'parroquia':parroquia});
        let headers = new HttpHeaders().set('Content-Type','application/json')                        
        return this._http.post(this.url+'establecimientos', params, {headers:headers});        
    }
    
}


