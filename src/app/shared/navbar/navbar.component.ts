import { Component, OnInit, Renderer, DoCheck, ViewChild, ElementRef, Directive } from '@angular/core';
import { ROUTES } from '../.././sidebar/sidebar-routes.config';
import { Router, ActivatedRoute, Params, Route } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import {UsuarioService} from '../../services/usuario.service';

var misc:any ={
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
}
declare var $: any;
@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit,DoCheck{
    private listTitles: any[];
    location: Location;
    private nativeElement: Node;
    private toggleButton;
    private sidebarVisible: boolean;
    public identity;

    @ViewChild("navbar-cmp") button;

    constructor(location:Location, private renderer : Renderer, private element : ElementRef,
        private _route: ActivatedRoute,
        private _router: Router,
        private _UsuarioService: UsuarioService) {
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
        
    }

    ngOnInit(){
        this.identity = this._UsuarioService.getIdentity();
        this.listTitles = ROUTES.filter(listTitle => listTitle);

        var navbar : HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        if($('body').hasClass('sidebar-mini')){
            misc.sidebar_mini_active = true;
        }
        $('#minimizeSidebar').click(function(){
            var $btn = $(this);

            if(misc.sidebar_mini_active == true){
                $('body').removeClass('sidebar-mini');
                misc.sidebar_mini_active = false;

            }else{
                setTimeout(function(){
                    $('body').addClass('sidebar-mini');

                    misc.sidebar_mini_active = true;
                },300);
            }

            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function(){
                window.dispatchEvent(new Event('resize'));
            },180);

            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function(){
                clearInterval(simulateWindowResize);
            },1000);
        });
    }

    ngDoCheck(){
        this.identity = this._UsuarioService.getIdentity();
    }
    isMobileMenu(){
        if($(window).width() < 991){
            return false;
        }
        return true;
    }
    sidebarToggle(){
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];

        if(this.sidebarVisible == false){
            setTimeout(function(){
                toggleButton.classList.add('toggled');
            },500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }

    getTitle(){
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if(titlee.charAt(0) === '#'){
            titlee = titlee.slice( 2 );
        }
        for(var item = 0; item < this.listTitles.length; item++){
            if(this.listTitles[item].path === titlee){
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    }
    getPath(){
        // console.log(this.location);
        return this.location.prepareExternalUrl(this.location.path());
    }
    logout(){
        localStorage.clear();
        this.identity = null;
        this._router.navigate(['/']);
        console.log('sesión cerrada');
    }
    
}
