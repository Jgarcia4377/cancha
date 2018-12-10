import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable'; 
import {Canchas} from '../models/canchas';
import {GLOBAL} from './global';


@Injectable()
export class CanchasService{
    
    public url:string;
    public identity;
    public token;

    constructor(public _http: HttpClient){
        this.url = GLOBAL.url;
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
    
    
    
    registerCancha(cancha: Canchas): Observable <any>{
        let params= JSON.stringify(cancha);
        let token = JSON.parse(localStorage.getItem('token'));
                                
        let headers = new HttpHeaders().set('Content-Type','application/json')
                                       .set('Authorization', this.getToken());
        return this._http.post(this.url+'registrar-cancha',params,{headers:headers});        
        //console.log(user_to_register);
        //console.log(this.url);
    }


    
}


