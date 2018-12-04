import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable'; 
import {User} from '../models/user';
import {GLOBAL} from './global';


@Injectable()
export class UsuarioService{
    
    public url:string;
    public identity;
    public token;

    constructor(public _http: HttpClient){
        this.url = GLOBAL.url;
    }
    login(user:User, token=null): Observable <any>{
        if(token != null){
           user.gettoken = token;
        }
        let params= JSON.stringify(user); 
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'login', params, {headers:headers});        
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
    getToken(){
        let token = JSON.parse(localStorage.getItem('token'));
        if(token != "undefined"){
            this.token = token;
        }else{
            this.token = null;
        }
        return this.token;
    }

    
}


