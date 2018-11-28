import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: []
})
export class SesionComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    // this.loadScripts();
  }
  
  // loadScripts() {
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
