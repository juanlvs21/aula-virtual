import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Usuario } from '../interfaces/usuario'

@Injectable({
  providedIn: 'root'
})
export class FukuroService {

  usuario:Usuario;

  token:string = "";

  valorCarga:number = 0;
  cargaNav:number = 0;

  url = 'http://localhost:3000/api/';

  constructor( private http:HttpClient, private router:Router  ) {
    this.token = localStorage.getItem("token");

    if(this.token == null){
      this.token = "";
    }else{
      this.getTokenSesion(this.token)
        .subscribe( (data:Usuario) => {
          this.usuario = data;
        })
    }  
  }

  canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    if(this.token != ""){
      return true;
    }else{
      this.router.navigate(['/sesion/entrar']);
      return false;
    }
  }

  // ---------- LOADER ----------

  cargarBarra(){
    setInterval( () => {
      this.valorCarga = this.valorCarga + 10;
      if (this.valorCarga == 150) {
        this.valorCarga = 0;
      }
    },100)
  }

  // ---------- USUARIOS ----------

  createUsuario (user: Usuario): Observable<Usuario> {
    let usuario = JSON.stringify(user);
  
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  
    return this.http.post<Usuario>(this.url+'estructura/usuario', usuario, httpOptions).pipe(
      tap((usuario: Usuario) => console.log(`Usuario ${user.usuario} resgistrado`))
    );
  }

  getSesion<Data>(usuario: string): Observable<Usuario> {
    const url = `${this.url}estructura/sesion/${usuario}`;
    return this.http.get<Usuario[]>(url)
      .pipe(
        map(clusters => clusters[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
        }));
  }

  getTokenSesion<Data>(token: string): Observable<Usuario> {
    const url = `${this.url}estructura/tokensesion/${token}`;
    return this.http.get<Usuario[]>(url)
      .pipe(
        map(clusters => clusters[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
        }));
  }

  getUsuario<Data>(usuario: string): Observable<Usuario> {
    const url = `${this.url}estructura/usuario/${usuario}`;
    return this.http.get<Usuario[]>(url)
      .pipe(
        map(clusters => clusters[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
        }));
  }

  getUsuarios(){
    return this.http.get(`${this.url}estructura/usuarios`);
  } 

  // ---------- USUARIOS ----------

  getAreas(){
    return this.http.get(`${this.url}estructura/areas`);
  }

}