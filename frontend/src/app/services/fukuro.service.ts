import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Usuario } from '../interfaces/usuario';
import { Area } from '../interfaces/area';

@Injectable({
  providedIn: 'root'
})
export class FukuroService {

  usuario:Usuario;

  token:string = ""
  sesion:string = ""

  valorCarga:number = 0

  cargandoComponente:boolean = false;

  url = 'http://localhost:3000/api/'

  constructor( private http:HttpClient, private router:Router  ) {
    this.token = localStorage.getItem("token")
    this.sesion = localStorage.getItem("sesion")
    if(this.token == null){
      this.token = ""
      this.sesion = ""
    }else{
      this.getTokenSesion(this.sesion)
        .subscribe( (data:Usuario) => {
          this.usuario = data
          this.sesion = data.sesion
          this.token = data.token
        })
    }  
  }

  canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    if(this.token != ""){
      return true
    }else{
      this.router.navigate(['/sesion/entrar'])
      return false
    }
  }

  // ---------- LOADER ----------

  cargarBarra(){
    setInterval( () => {
      this.valorCarga = this.valorCarga + 10
      if (this.valorCarga == 150) {
        this.valorCarga = 0
      }
    },100)
  }

  // ---------- SESION ----------
  loginSession<Data>(usuario): Observable<Usuario> {  
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<Usuario>(this.url+'sql/session/login', usuario, httpOptions).pipe(
      tap((usuario: Usuario) => console.log(`Servicio - sesion iniciada: ${usuario.usuario}`))
    )
  }

  getTokenSesion<Data>(sesion:string): Observable<Usuario> { 
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'authorization': this.token
      })
    }
    let body_sesion = { 'sesion': sesion}
    return this.http.post<Usuario>(this.url+'sql/session', body_sesion, httpOptions).pipe(
      tap( (usuario: Usuario) => console.log(`Servicio - Obteniendo Sesion | Usuario: ${usuario.usuario}`))
    )
  }

  // ---------- USUARIOS ----------

  createUsuario (user: Usuario): Observable<Usuario> {
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
      })
    }
    let usuario = JSON.stringify(user)
    return this.http.post<Usuario>(this.url+'sql/user', usuario, httpOptions).pipe(
      tap((usuario: Usuario) => console.log(`Usuario ${user.usuario} resgistrado`))
    )
  }

  // getUsuario<Data>(usuario: string): Observable<Usuario> {
  //   const url = `${this.url}sql/user/${usuario}`
  //   return this.http.get<Usuario[]>(url)
  //     .pipe(
  //       map(clusters => clusters[0]), // returns a {0|1} element array
  //       tap(h => {
  //         const outcome = h ? `fetched` : `did not find`
  //       }))
  // }

  checkUsuarios(){
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'authorization': this.token
      })
    }
    return this.http.get(`${this.url}sql/users/check`, httpOptions)
  } 

  getUsuarios(){
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'authorization': this.token
      })
    }
    return this.http.get(`${this.url}sql/users`, httpOptions)
  } 

  // ---------- AREAS ----------
  getAreas(){
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'authorization': this.token
      })
    }
    return this.http.get(`${this.url}sql/areas`, httpOptions)
  }

  getArea(id:number){
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'authorization': this.token
      })
    }
    return this.http.get(`${this.url}sql/area/${id}`, httpOptions)
  }
}