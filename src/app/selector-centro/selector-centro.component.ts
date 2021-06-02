import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-selector-centro',
  templateUrl: './selector-centro.component.html',
  styleUrls: ['./selector-centro.component.css']
})
export class SelectorCentroComponent implements OnInit {
  centros = [{nombre: "Fernando de Rojas"}, {nombre: "Agustinas"}];
  centrosFiltrados:any=[];
  centroSeleccionado={nombre:''};
  @Output() asignaCentro = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  centro($event: any):void{
  this.centrosFiltrados = [...this.centros].filter(centro =>
    centro.nombre.toLocaleUpperCase().includes($event.target.value.toLocaleUpperCase()))
  }

  seleccionarCentro(centro:any){
    this.centroSeleccionado=centro;
    this.centrosFiltrados=[];
    this.asignaCentro.emit(centro);
  }
}
