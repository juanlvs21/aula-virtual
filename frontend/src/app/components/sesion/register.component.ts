import { Component, OnInit } from '@angular/core';
import { FukuroService } from '../../services/fukuro.service';
import * as crypto from 'crypto-js';
import { Router } from '@angular/router';
import { Usuario } from '../../interfaces/usuario'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  usuarios:Usuario[]

  usuario:Usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    usuario: '',
    contra: '',
    tipo: 1
  }

  contras = {
    contra: '',
    repetir: ''
  }

  contrasDiferentes:boolean = false
  usuarioYaRegistrado:boolean = false
  correoYaRegistrado:boolean = false
  registrando:boolean = false 
  errorServicio:boolean = false

  constructor( public fkr:FukuroService, private router:Router ) { }

  ngOnInit() {
    this.getUsuarios()
  }

  getUsuarios(){
    this.fkr.getUsuarios()
      .subscribe( (data:Usuario[]) => {
        this.usuarios = data
      },err => {
        console.error("Error: "+err)
      })
  }

  compararContras(){
    if (this.contras.contra != this.contras.repetir) {
      this.contrasDiferentes = true
      setTimeout(() => {
        this.contrasDiferentes = false
      }, 5000);
    }else{
      this.contrasDiferentes = false
    }
  }

  verificarUsuario():boolean{     
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].usuario == this.usuario.usuario) {
        return true;      
      }else{
        return false;      
      } 
    }
  }

  verificarCorreo():boolean{     
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].correo == this.usuario.correo) {
        return true;      
      }else{
        return false;      
      }
    }
  }

  registrar(){
    this.contrasDiferentes = false
    this.errorServicio = false
    this.registrando = true

    this.fkr.cargarBarra();

    this.usuarioYaRegistrado = this.verificarUsuario()
    this.correoYaRegistrado = this.verificarCorreo()

    if ((this.usuarioYaRegistrado)||(this.correoYaRegistrado)) {
      this.registrando = false;
      setTimeout(() => {
        this.usuarioYaRegistrado = false
        this.correoYaRegistrado = false
      }, 5000);
    }

    if ((!this.usuarioYaRegistrado)&&(!this.correoYaRegistrado)) {
      if (this.contras.contra != this.contras.repetir) {
        this.contrasDiferentes = true
        setTimeout(() => {
          this.registrando = false
          this.contrasDiferentes = false
        }, 5000);
      }else{
        this.usuario.contra = crypto.SHA512(this.contras.contra).toString()
        this.fkr.createUsuario(this.usuario)
          .subscribe( (data:Usuario) => {
            console.log(data)
            this.registrando = false
            this.router.navigate(['/sesion/entrar']);
          }, err => {
            this.registrando = false
            this.errorServicio = true
            console.error("Error: "+err)
          })
      }
    }
  }
}
