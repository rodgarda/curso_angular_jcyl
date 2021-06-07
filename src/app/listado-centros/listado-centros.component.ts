import { CentrosService } from './../centros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-centros',
  template: `<table><tr><th>Nombre</th><th>Acción</th></tr><tr *ngFor="let centro of centros"><td>{{centro.nombre | uppercase }}</td>
  <td><button [routerLink]="['/centros', centro.nombre]">Consultar</button></td></tr></table>`,
  styleUrls: ['./listado-centros.component.css']
})
export class ListadoCentrosComponent implements OnInit {
  centros:any[];
  constructor(private _centro:CentrosService) { }

  ngOnInit(): void {
    this.centros=this._centro .getCentros();
  }

}
