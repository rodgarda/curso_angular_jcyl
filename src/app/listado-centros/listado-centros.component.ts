import { CentrosService } from './../centros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-centros',
  template: `<table><tr><th>Nombre</th></tr><tr *ngFor="let centro of centros">{{centro.nombre | uppercase }}</tr>`,
  styleUrls: ['./listado-centros.component.css']
})
export class ListadoCentrosComponent implements OnInit {
  centros:any[];
  constructor(private _centro:CentrosService) { }

  ngOnInit(): void {
    this.centros=this._centro .getCentros();
  }

}
