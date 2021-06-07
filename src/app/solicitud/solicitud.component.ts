import { SolicitudesService } from './../solicitudes.service';
import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
  solicitudes:any=[];
  solicitud = {nombre: '', apellidos: '',nacimiento:new Date('1000/01/01'),ayuda:0,tipoSolicitud:'' };
  centro = {nombre: ""};

  constructor(private solicitudesService: SolicitudesService) {
    solicitudesService.getSolicitudes()
    .then( x =>{
      this.solicitudes=x;
      })

    }


  ngOnInit(): void {
  }

  delete() {
    console.log('eliminar!')
  }

  enviar() {
    this.solicitudes.push({nombre:this.solicitud.nombre,apellidos: this.solicitud.apellidos,nacimiento:new Date('1000/01/01')});
    //this.solicitudes.push(Object.assign({},this.solicitud));
    //this.solicitudes.push({...this.solicitud})

    //this.solicitudes.push(this.solicitud);
    this.solicitud.nombre="";
    this.solicitud.apellidos="";
  }

  capturaInput($event: KeyboardEvent,nombreInput:any) {
    const element = $event.target as HTMLInputElement
    this.solicitud[nombreInput] = element.value;
  }

  recibeCentro(centroRec:any){

    this.centro=centroRec;
  }

  borrarSolicitud(solicitud:any){
      var i = this.solicitudes.indexOf( solicitud );
      this.solicitudes.splice( i, 1 );
  }


}
