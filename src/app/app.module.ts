import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
//import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent }   from './app.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
//import { LoginComponent } from './login/login.component';
import { AppRoutes } from './app.routing';
import {} from '@angular/core/index'

//servicios 

import { UsuarioService } from './services/usuario.service';
import { UsuarioGuard } from './services/usuario.guard';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(AppRoutes),
        HttpClientModule,
        SidebarModule,
        NavbarModule,
        FooterModule
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        AuthLayoutComponent,
        
        
    ],
    providers: [
        UsuarioService,
        UsuarioGuard
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
