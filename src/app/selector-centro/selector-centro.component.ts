import { CentrosService } from './../centros.service';
import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-selector-centro',
  templateUrl: './selector-centro.component.html',
  styleUrls: ['./selector-centro.component.css']
})
export class SelectorCentroComponent implements OnInit {

  centrosFiltrados:any=[];
  centroSeleccionado={nombre:''};
  @Output() asignaCentro = new EventEmitter();

  constructor(private _centros:CentrosService) { }

  ngOnInit(): void {
  }

  centro($event: any):void{
  this.centrosFiltrados = [...this._centros.getCentros()].filter(centro =>
    centro.nombre.toLocaleUpperCase().includes($event.target.value.toLocaleUpperCase()))
  }

  seleccionarCentro(centro:any){
    this.centroSeleccionado=centro;
    this.centrosFiltrados=[];
    this.asignaCentro.emit(centro);
  }
}
