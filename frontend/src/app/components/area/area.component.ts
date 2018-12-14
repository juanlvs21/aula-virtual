import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FukuroService } from '../../services/fukuro.service';
import { Area } from '../../interfaces/area';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styles: []
})
export class AreaComponent implements OnInit {

  area:Area;

  id_area:number = 0;

  componenteListo:boolean = false;

  constructor( private fkr:FukuroService, private activatedRouted: ActivatedRoute) {}

  ngOnInit() {
    this.getId();
    this.getArea();
  }

  ngOnDestroy(){
    this.fkr.cargandoComponente = true;
  }

  getId(){
    this.activatedRouted.params.subscribe(params => {
      this.id_area = params['id'];
    })
  }

  getArea(){
    this.componenteListo = false;
    this.fkr.getArea(this.id_area)
      .subscribe( (res:Area) => {
        this.fkr.cargandoComponente = false;
        this.componenteListo = true;
        this.area = res[0];
      }, err =>{
        console.error(err);
      })
  }

}
