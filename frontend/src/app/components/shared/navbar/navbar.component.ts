import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FukuroService } from '../../../services/fukuro.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public fkr:FukuroService, private router:Router ) {}

  ngOnInit() {
    // this.loadScripts()
  }

  salir(){
    if (confirm('¿Desea cerrar sesión?')) {
      this.fkr.token = "";
      this.fkr.sesion = "";
      localStorage.clear();
      this.router.navigate(['/sesion/entrar']);
    }else{
      return;
    }
  }

  //   loadScripts() {
  //   const dynamicScripts = [
  //     'assets/libs/jquery/jquery.min.js'
  //   ];
  //   for (let i = 0; i < dynamicScripts.length; i++) {
  //     const node = document.createElement('script');
  //     node.src = dynamicScripts[i];
  //     node.type = 'text/javascript';
  //     node.async = false;
  //     node.charset = 'utf-8';
  //     document.getElementsByTagName('head')[0].appendChild(node);
  //   }
  // }
}
