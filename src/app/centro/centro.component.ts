import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-centro',
  template: `{{centro}}`,
  styleUrls: ['./centro.component.css']
})
export class CentroComponent implements OnInit {

  centro: string="Gerencia de Atención Primaria";

  constructor() {
  }

  ngOnInit(): void {
  }

}
