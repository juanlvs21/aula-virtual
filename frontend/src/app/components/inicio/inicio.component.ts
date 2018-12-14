import { Component, OnInit } from '@angular/core';
import { FukuroService } from '../../services/fukuro.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
  constructor( public fkr: FukuroService, ) { }
  
  ngOnInit() {
    this.fkr.cargandoComponente = false;
  }

  ngOnDestroy(){
    this.fkr.cargandoComponente = true;
  }
  
  // loadScripts() {
  //   const dynamicScripts = [
  //     'assets/libs/jquery/jquery.min.js',
  //     'assets/libs/bootstrap/js/bootstrap.bundle.min.js',
  //     'assets/libs/sb-admin/adminlte.min.js'
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
