import { Component, OnInit } from '@angular/core';
import { FukuroService } from '../../services/fukuro.service';
import { Areas } from '../../interfaces/areas';

@Component({
  selector: 'app-areas-disponibles',
  templateUrl: './areas-disponibles.component.html',
  styles: []
})
export class AreasDisponiblesComponent implements OnInit {

  areas:Areas[] = [];

  componenteListo:boolean = false;

  constructor( private fkr:FukuroService ) {}

  ngOnInit() {
    this.getAreas();
  }

  getAreas(){
    this.componenteListo = false;
    this.fkr.getAreas()
      .subscribe( (res:Areas[]) => {
        this.componenteListo = true;
        this.areas = res;
      }, err =>{
        console.error(err);
      })
  }
}
