import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-centro-detalle',
  template: '<br/><br/>{{nombreCentro}}',
  styleUrls: ['./centro-detalle.component.css']
})
export class CentroDetalleComponent implements OnInit {
  nombreCentro=""
  constructor(private route: ActivatedRoute) {
    route.params.subscribe(
     params => this.nombreCentro = params.centroId
     )
  }
  ngOnInit(){}



}
