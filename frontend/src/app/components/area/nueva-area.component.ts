import { Component, OnInit } from '@angular/core';
import { FukuroService } from '../../services/fukuro.service';

@Component({
  selector: 'app-nueva-area',
  templateUrl: './nueva-area.component.html',
  styles: []
})
export class NuevaAreaComponent implements OnInit {

  componenteListo:boolean = false;

  constructor( private fkr:FukuroService) {}

  ngOnInit() {
    this.fkr.cargandoComponente = false;
    this.componenteListo = true;
  }

  ngOnDestroy(){
    this.fkr.cargandoComponente = true;
  }

}
