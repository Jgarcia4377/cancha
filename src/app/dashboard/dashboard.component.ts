import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TableData } from '../md/md-table/md-table.component';
import {UsuarioService} from '../services/usuario.service';
import {Canchas} from '../models/canchas';

import * as Chartist from 'chartist';

declare var $:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [UsuarioService]
})
export class DashboardComponent implements OnInit, AfterViewInit{
  // constructor(private navbarTitleService: NavbarTitleService, private notificationService: NotificationService) { }

  public identity;
  //public canchas: Canchas;
  public cancha: Canchas[];
  constructor(
   
    private _UsuarioService: UsuarioService
  ){

  }
    // constructor(private navbarTitleService: NavbarTitleService) { }
  public ngOnInit() {
      //this.cancha = this.cancha;
    this.identity = this._UsuarioService.getIdentity();
    console.log(this.identity);      
    
   }
   ngAfterViewInit(){
       var breakCards = true;
       if(breakCards == true){
           // We break the cards headers if there is too much stress on them :-)
           $('[data-header-animation="true"]').each(function(){
               var $fix_button = $(this);
               var $card = $(this).parent('.card');
               $card.find('.fix-broken-card').click(function(){
                   console.log(this);
                   var $header = $(this).parent().parent().siblings('.card-header, .card-image');
                   $header.removeClass('hinge').addClass('fadeInDown');

                   $card.attr('data-count',0);

                   setTimeout(function(){
                       $header.removeClass('fadeInDown animate');
                   },480);
               });

               $card.mouseenter(function(){
                   var $this = $(this);
                   var hover_count = parseInt($this.attr('data-count'), 10) + 1 || 0;
                   $this.attr("data-count", hover_count);
                   if (hover_count >= 20){
                       $(this).children('.card-header, .card-image').addClass('hinge animated');
                   }
               });
           });
       }
       //  Activate the tooltips
       $('[rel="tooltip"]').tooltip();
   }
}
