import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
//import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent }   from './app.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AppRoutes } from './app.routing';
import {} from '@angular/core/index'
import { UsuarioService } from './services/usuario.service';
import { UsuarioGuard } from './services/usuario.guard';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { UsuariosComponent } from './mantenimiento/usuarios/usuarios.component';

//import { alquilerComponent } from './alquiler/alquiler.components';

//modulo de registro
import { RegistrarModule } from './registrar/registrar.module';
//import { CanchasModule } from './canchas/canchas.module';
import { AlquilerModule } from './alquiler/alquiler.module';
@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(AppRoutes),
        HttpClientModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        RegistrarModule,
        //CanchasModule,
        AlquilerModule
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        AuthLayoutComponent,
        MantenimientoComponent,
        UsuariosComponent,
  //      alquilerComponent
        
        
    ],
    providers: [
        UsuarioService,
        UsuarioGuard
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
