import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fila-solicitud',
  template: `<td>{{solicitudFila.nombre}} </td>
            <td>{{solicitudFila.apellidos ||'-'}}</td>
            <td>{{solicitudFila.nacimiento | date: 'dd/MM/YYYY'}}</td>
            <td>{{solicitudFila.ayuda ||'-'}}</td>
            <td>{{solicitudFila.tipoSolicitud ||'-'}}</td>
            <td><button (click)="EliminaFila(solicitudFila)">Borrar</button></td>`,
  styleUrls: ['./fila-solicitud.component.css']
})
export class FilaSolicitudComponent implements OnInit {
  @Input() solicitudFila:any;
  @Output() solicitudBorrada = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  EliminaFila(solicitudFila:any){
    this.solicitudBorrada.emit(solicitudFila)
  }
}
