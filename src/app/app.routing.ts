import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
//import {LoginComponent} from './login/login.component';
import { UsuarioGuard } from './services/usuario.guard';

export const AppRoutes: Routes = [
    // { path: '', loadChildren: './inicio/inicio.module#InicioModule'},
    { path: '', loadChildren: './inicio/inicio.module#InicioModule'},
    // { path: 'inicio/:id', loadChildren: './inicio/inicio.module#InicioModule'},
    { path: 'login',loadChildren: './login/login.module#LoginModule'}, 
    { path: 'register',loadChildren: './register/register.module#RegisterModule'},
    { path: 'register-establecimiento',loadChildren: './registercancha/registercancha.module#RegisterCanchaModule'}, 
    { path: '',component: AdminLayoutComponent,
                children: 
                [
                    {path: 'dashboard',loadChildren: './dashboard/dashboard.module#DashboardModule',canActivate:[UsuarioGuard]},
                    {path: 'components',loadChildren: './components/components.module#ComponentsModule',canActivate:[UsuarioGuard]},
                    {path: 'forms',loadChildren: './forms/forms.module#Forms',canActivate:[UsuarioGuard]},
                    {path: 'establecimiento',loadChildren: './establecimientopage/establecimiento.module#EstablecimientoModule',canActivate:[UsuarioGuard]},
                    {path: 'detalle',loadChildren: './establecimientos/establecimientos.module#EstablecimientosModule',canActivate:[UsuarioGuard]},
                    {path: 'detalle/:id',loadChildren: './establecimientos/establecimientos.module#EstablecimientosModule',canActivate:[UsuarioGuard]},
                    {path: 'alquiler',loadChildren: './alquiler/alquiler.module#AlquilerModule',canActivate:[UsuarioGuard]},
                    {path: 'tables',loadChildren: './tables/tables.module#TablesModule',canActivate:[UsuarioGuard]},
                    {path: 'widgets',loadChildren: './widgets/widgets.module#WidgetsModule',canActivate:[UsuarioGuard]},
                    {path: 'calendar',loadChildren: './calendar/calendar.module#CalendarModule',canActivate:[UsuarioGuard]},
                    {path: 'perfil',loadChildren: './userpage/user.module#UserModule',canActivate:[UsuarioGuard]},
                    {path: '',loadChildren: './timeline/timeline.module#TimelineModule',canActivate:[UsuarioGuard]},
                    {path: 'canchas',loadChildren: './canchas/canchas.module#CanchasModule',canActivate:[UsuarioGuard]},
                    {path: 'tarifas',loadChildren: './tarifas/tarifas.module#TarifasModule',canActivate:[UsuarioGuard]},
                ]
    },
    {path: '',component: AuthLayoutComponent,
                children: [
                    {path: 'pages',loadChildren: './pages/pages.module#PagesModule'}
                ]
    }
];
