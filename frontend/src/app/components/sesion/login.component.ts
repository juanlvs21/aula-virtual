import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FukuroService } from '../../services/fukuro.service';
import * as crypto from 'crypto-js';
import { Usuario } from '../../interfaces/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  usuario = {
    usuario: "",
    contra: ""
  }

  iniciandoSesion:boolean = false;
  error:boolean = false

  listaMensajes = ["Error Desconocido - Intente de nuevo.", "Error - Usuario incorrecto", "Error - Contraseña incorrecta"]
  mensajeError:string = ""


  constructor( private fkr:FukuroService, private router:Router ) {}

  ngOnInit() {
    this.fkr.cargandoComponente = false;
  }

  sesion(){
    this.iniciandoSesion = true
    this.error = false
    this.mensajeError = ""

    let datos_user = {
      usuario: this.usuario.usuario,
      contra: crypto.SHA512(this.usuario.contra).toString()
    }
    
    let user = JSON.stringify(datos_user)
    this.fkr.loginSession(user)
      .subscribe( (data:Usuario) => {
        this.error = true
        this.iniciandoSesion = false
        if(data == undefined){
          this.mensajeError = this.listaMensajes[0]
        }else{
          if (data.error == 1) {
            this.mensajeError = this.listaMensajes[1]
          } else{
            if (data.error == 2) {
              this.mensajeError = this.listaMensajes[2]
            }else{
              localStorage.setItem("token", data.token )
              localStorage.setItem("sesion", data.sesion )
              this.fkr.usuario = data
              this.fkr.token = data.token
              this.fkr.sesion = data.sesion
              if (this.fkr.token != "") {
                this.router.navigate(['/'])
              }
            }
          }
        }
        setTimeout(() => this.error = false, 5000)
      }
      ,err => {
        console.log("Error: "+ err)
        this.iniciandoSesion = false
        this.error = true
        this.mensajeError = this.listaMensajes[0]
        setTimeout(() => this.error = false, 5000)
      });
  }
}
