import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Importando HTTP
import { HttpClientModule } from '@angular/common/http';

// Importar Rutas
import { ROUTES } from "./app.routes";

// Importar Componentes
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { Error404Component } from './components/shared/error404/error404.component';
import { LoginComponent } from './components/sesion/login.component';
import { RegisterComponent } from './components/sesion/register.component';
import { AreasDisponiblesComponent } from './components/areas-disponibles/areas-disponibles.component';
import { AreasSubscritasComponent } from './components/areas-subscritas/areas-subscritas.component';
import { AreaComponent } from './components/area/area.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    SesionComponent,
    Error404Component,
    LoginComponent,
    RegisterComponent,
    AreasDisponiblesComponent,
    AreasSubscritasComponent,
    AreaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot( ROUTES, {useHash:true} )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
