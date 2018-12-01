import { Routes, CanActivate } from '@angular/router';
import { FukuroService } from './services/fukuro.service';

import { InicioComponent } from './components/inicio/inicio.component';
import { Error404Component } from './components/shared/error404/error404.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { LoginComponent } from './components/sesion/login.component';
import { RegisterComponent } from './components/sesion/register.component';
import { AreasDisponiblesComponent } from './components/areas-disponibles/areas-disponibles.component';
import { AreasSubscritasComponent } from './components/areas-subscritas/areas-subscritas.component';
import { AreaComponent } from './components/area/area.component';

export const ROUTES: Routes = [
    { path: 'sesion', pathMatch: 'full', redirectTo: 'sesion/entrar'},
    { path: 'sesion', component: SesionComponent, 
        children:[
            { path: 'entrar', component: LoginComponent},
            { path: 'registrarse', component: RegisterComponent}
        ]
    },
    { path: 'error404', component: Error404Component},
    { path: '', component: InicioComponent, canActivate:[ FukuroService ] },
    { path: 'areas/disponibles', component: AreasDisponiblesComponent, canActivate:[ FukuroService ] },
    { path: 'areas/subscritas', component: AreasSubscritasComponent, canActivate:[ FukuroService ] },
    { path: 'area/:id', component: AreaComponent, canActivate:[ FukuroService ] },
    { path: '**', pathMatch: 'full', redirectTo: 'error404'}
];
