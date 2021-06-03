import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fila-solicitud',
  template: `{{solicitudFila.nombre}}
            {{solicitudFila.apellidos}}
            {{solicitudFila.nacimiento | date: 'dd/MM/YYYY'}}
             <button (click)="EliminaFila(solicitudFila)">Borrar</button>`,
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
