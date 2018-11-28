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

  listaMensajes = ["Error - Intente de nuevo.", "Error Desconocido - Intente de nuevo."]
  mensajeError:string = ""


  constructor( private fkr:FukuroService, private router:Router ) {}

  ngOnInit() {
  }

  sesion(){
    this.iniciandoSesion = true;
    this.error = false;
    this.mensajeError = "";

    let duser = {
      usuario: this.usuario.usuario,
      contra: crypto.SHA512(this.usuario.contra).toString()
    }

    this.fkr.cargarBarra();

    let token = btoa(JSON.stringify(duser));
    this.fkr.getSesion(token)
      .subscribe( (data:Usuario) => {
        if(data == undefined){
          this.error = true;
          this.mensajeError = this.listaMensajes[0];
          setTimeout(() => this.error = false, 5000);
          // this.usuario.usuario = "";
          // this.usuario.contra = "";
          this.iniciandoSesion = false;
        }else{
          localStorage.setItem("token", token );
          this.fkr.usuario = data;
          this.fkr.token = token;
          this.iniciandoSesion = false;
          if (this.fkr.token != "") {
            this.router.navigate(['/inicio']);
          }
        }
      },err => {
        console.log("Error: "+err)
        this.iniciandoSesion = false;
        this.error = true;
        this.mensajeError = this.listaMensajes[1];
        setTimeout(() => this.error = false, 5000);
      });
  }
}
