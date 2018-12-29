import { Component, OnInit } from '@angular/core';
import { FukuroService } from '../../services/fukuro.service';
import { Area } from '../../interfaces/area';

@Component({
  selector: 'app-nueva-area',
  templateUrl: './nueva-area.component.html',
  styles: []
})
export class NuevaAreaComponent implements OnInit {

  componenteListo:boolean = false;
  guardandoArea:boolean = false;
  areaGuardada:boolean = false;
  portadaGuardada:boolean = false;

  area:Area = {
    nombre: "",
    descripcion: "",
    img: ""
  };

  constructor( private fkr:FukuroService) {}

  ngOnInit() {
    this.fkr.cargandoComponente = false;
    this.componenteListo = true;
  }

  ngOnDestroy(){
    this.fkr.cargandoComponente = true;
  }

  nuevaArea(){
    this.guardandoArea = true;
    this.areaGuardada = false;
    // this.registrando = true
    console.log(this.area)

    this.area.img = "portada-default.png";

    this.fkr.nuevaArea(this.area)
    .subscribe( (data:Area) => {
      console.log(data)
      this.guardandoArea = false;
      this.areaGuardada = true;
    }, err => {
      // this.registrando = false
      // this.errorServicio = true
      console.error("Error: "+err)
    })
  }

}
