import { Component, OnInit, ElementRef, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params, Route } from '@angular/router';
import { UsuarioService } from './services/usuario.service';
import { CanchasService } from './services/canchas.service';
import {EstablecimientoService} from './services/establecimiento.service';
declare var $:any;
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [UsuarioService, CanchasService,EstablecimientoService]
})

export class AppComponent implements OnInit, DoCheck{
    public title:string;
    public identity;

    constructor(
        private elRef:ElementRef,
        private _canchasService: CanchasService,
        private _userService: UsuarioService,
        private _establecimientoSercice : EstablecimientoService,
        private _route: ActivatedRoute,
        private _router: Router
        ) {
            this.title = 'NGSOCIAL' 
        }
    ngOnInit(){
        this.identity = this._userService.getIdentity();
        console.log(this.identity);
        let body = document.getElementsByTagName('body')[0];
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows){
           // if we are on windows OS we activate the perfectScrollbar function
            body.classList.add("perfect-scrollbar-on");
        } else {
            body.classList.add("perfect-scrollbar-off");
        }
        $.material.init();
    }
    ngDoCheck(){
        this.identity = this._userService.getIdentity();
        this.identity = this._canchasService.getIdentity();
        this.identity = this._establecimientoSercice.getIdentity();
    }
    logout(){
        localStorage.clear();
        this.identity = null;
        this._router.navigate(['/']);
        console.log('sesión cerrada');
    }
}
