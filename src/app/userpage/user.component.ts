import { Component, OnInit, DoCheck,AfterViewInit, AfterViewChecked, AfterContentInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { trigger, state, transition, animate, style } from '@angular/animations';
import {UsuarioService} from '../services/usuario.service';
import {User} from '../models/user';


@Component({
    moduleId: module.id,
    selector: 'user-cmp',
    templateUrl: 'user.component.html',
    providers: [UsuarioService],
    animations: [
        trigger('carduserprofile', [
            state('*', style({
                '-ms-transform': 'translate3D(0px, 0px, 0px)',
                '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                '-moz-transform': 'translate3D(0px, 0px, 0px)',
                '-o-transform':'translate3D(0px, 0px, 0px)',
                transform:'translate3D(0px, 0px, 0px)',
                opacity: 1
            })),
            transition('void => *', [
                style({opacity: 0,
                    '-ms-transform': 'translate3D(0px, 150px, 0px)',
                    '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                    '-moz-transform': 'translate3D(0px, 150px, 0px)',
                    '-o-transform':'translate3D(0px, 150px, 0px)',
                    transform:'translate3D(0px, 150px, 0px)',
                }),
                animate('0.3s 0s ease-out'),
            ])
        ]),
        trigger('cardprofile', [
            state('*', style({
                '-ms-transform': 'translate3D(0px, 0px, 0px)',
                '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                '-moz-transform': 'translate3D(0px, 0px, 0px)',
                '-o-transform':'translate3D(0px, 0px, 0px)',
                transform:'translate3D(0px, 0px, 0px)',
                opacity: 1})),
                transition('void => *', [
                    style({opacity: 0,
                        '-ms-transform': 'translate3D(0px, 150px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                        '-moz-transform': 'translate3D(0px, 150px, 0px)',
                        '-o-transform':'translate3D(0px, 150px, 0px)',
                        transform:'translate3D(0px, 150px, 0px)',
                    }),
                    animate('0.3s 0.25s ease-out')
                ])
            ])
        ]
    })

    export class UserComponent implements OnInit, DoCheck{
        public identity;
        public user: User;
        public token;

        constructor(
            private _route: ActivatedRoute,
            private _router: Router,
            private _UsuarioService: UsuarioService,
            
          ){
              this.user=this._UsuarioService.getIdentity();
              this.identity=this.user;
              this.token=this._UsuarioService.getToken();
    
          }

          ngOnInit() {
           // this.identity = this._UsuarioService.getIdentity();
            console.log(this.user);
        }

          ngDoCheck(){
            this.identity = this._UsuarioService.getIdentity();
        }
        onSubmit(){
            console.log(this.user);
     }
    }
