import {Component, OnInit} from '@angular/core';
import {SolicitudesService} from "../solicitudes.service";

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
  solicitudes =[{nombre: 'David', apellidos: 'Rodriguez',nacimiento: new Date('2013/10/27')},
  {nombre: 'Raul', apellidos: 'Perez',nacimiento: new Date('2015/10/07')}];
  solicitud = {nombre: '', apellidos: ''};
  centro = {nombre: ""};

  constructor() {

  }

  ngOnInit(): void {
  }

  delete() {
    console.log('eliminar!')
  }

  enviar() {
    console.log(this.solicitud)
  }

  nombre($event: KeyboardEvent) {
    const element = $event.target as HTMLInputElement
    this.solicitud.nombre = element.value;
  }

  apellidos($event: KeyboardEvent) {
    const element = $event.target as HTMLInputElement
    this.solicitud.apellidos = element.value;
  }

  recibeCentro(centroRec:any){
    console.log(centroRec.nombre)
    this.centro=centroRec;
  }


}
