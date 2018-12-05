import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
//import {LoginComponent} from './login/login.component';
import { UsuarioGuard } from './services/usuario.guard';

export const AppRoutes: Routes = [
    { path: '',loadChildren: './login/login.module#LoginModule'},
    { path: 'login',loadChildren: './login/login.module#LoginModule'}, 
    { path: 'register',loadChildren: './register/register.module#RegisterModule'},
    { path: 'register-cancha',loadChildren: './registercancha/registercancha.module#RegisterCanchaModule'}, 
    { path: '',component: AdminLayoutComponent,
                children: 
                [
                    {path: 'dashboard',loadChildren: './dashboard/dashboard.module#DashboardModule'},
                    {path: 'components',loadChildren: './components/components.module#ComponentsModule'},
                    {path: 'forms',loadChildren: './forms/forms.module#Forms'},
                    {path: 'establecimiento',loadChildren: './establecimientopage/establecimiento.module#EstablecimientoModule'},
                    {path: 'tables',loadChildren: './tables/tables.module#TablesModule'},
                    {path: 'widgets',loadChildren: './widgets/widgets.module#WidgetsModule'},
                    {path: 'calendar',loadChildren: './calendar/calendar.module#CalendarModule'},
                    {path: 'perfil',loadChildren: './userpage/user.module#UserModule'},
                    {path: '',loadChildren: './timeline/timeline.module#TimelineModule'}
                ],canActivate:[UsuarioGuard]
    },
    {path: '',component: AuthLayoutComponent,
                children: [
                    {path: 'pages',loadChildren: './pages/pages.module#PagesModule'}
                ]
    }
];
